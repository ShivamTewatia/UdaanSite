import { useEffect, useRef } from "react";
import styles from "./YearSelector.module.css";

export const YearSelector = ({
  years,
  selectedYear,
  onYearChange,
  title = "Year Wise Placement Statistics",
  label = "Select Academic Session",
  sublabel = "Browse placement data by year",
}) => {
  const containerRef = useRef(null);
  const selectedRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !selectedRef.current) return;
    const container = containerRef.current;
    const selected = selectedRef.current;
    const containerRect = container.getBoundingClientRect();
    const selectedRect = selected.getBoundingClientRect();
    const offset =
      selectedRect.left -
      containerRect.left -
      container.clientWidth / 2 +
      selected.clientWidth / 2;
    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: "smooth",
    });
  }, [selectedYear]);

  return (
    <div className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.root}>
        <div className={styles.textBlock}>
          <h3 className={styles.label}>{label}</h3>
          <p className={styles.sublabel}>{sublabel}</p>
        </div>

        <div ref={containerRef} className={styles.scrollContainer}>
          <div className={styles.buttonGroup}>
            {years.map((year) => (
              <button
                key={year}
                ref={selectedYear === year ? selectedRef : null}
                onClick={() => onYearChange(year)}
                className={`${styles.button} ${
                  selectedYear === year ? styles.active : styles.inactive
                }`}
              >
                {year}
                {selectedYear === year && (
                  <span className={styles.indicator} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
