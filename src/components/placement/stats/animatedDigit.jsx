import { useEffect, useState, useRef } from "react";
import styles from "./animatedDigit.module.css";

const AnimatedDigit = ({ value, isRolling }) => {
  const digits = "0123456789";
  const isNumeric = digits.includes(value);

  if (!isNumeric) {
    return <span className={styles.staticChar}>{value}</span>;
  }

  const numericValue = parseInt(value, 10);

  return (
    <span className={`${styles.digit} ${isRolling ? styles.rolling : ""}`}>
      <span 
        className={styles.digitInner}
        style={{ transform: `translateY(-${numericValue * 1.2}em)` }}
      >
        {digits.split("").map((d) => (
          <span key={d} className={styles.digitValue}>
            {d}
          </span>
        ))}
      </span>
    </span>
  );
};

export const AnimatedNumber = ({ value, className = "" }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [displayValue, setDisplayValue] = useState(String(value));
  const prevValueRef = useRef(String(value));
  const timeoutRef = useRef(null);

  useEffect(() => {
    const newValue = String(value);
    
    if (prevValueRef.current !== newValue) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      setIsRolling(true);
      setDisplayValue(newValue);
      
      timeoutRef.current = setTimeout(() => {
        setIsRolling(false);
      }, 500);

      prevValueRef.current = newValue;
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value]);

  const characters = displayValue.split("");

  return (
    <span className={`${styles.animatedValue} ${isRolling ? styles.flash : ""} ${className}`}>
      {characters.map((char, index) => (
        <AnimatedDigit 
          key={index} 
          value={char} 
          isRolling={isRolling} 
        />
      ))}
    </span>
  );
};
