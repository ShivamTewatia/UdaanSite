import { forwardRef } from "react";
import { AnimatedNumber } from "./animatedDigit.jsx";
import styles from "./statCard.module.css";

const getVariantFromColor = (color) => {
  if (!color) return "info";
  
  const colorLower = color.toLowerCase();
  
  if (colorLower.includes("340") || colorLower.includes("rose") || colorLower.includes("pink") || colorLower === "#ec4899" || colorLower === "#f43f5e") {
    return "primary";
  }
  if (colorLower.includes("30") || colorLower.includes("orange") || colorLower.includes("amber") || colorLower === "#f97316" || colorLower === "#f59e0b") {
    return "secondary";
  }
  if (colorLower.includes("160") || colorLower.includes("green") || colorLower.includes("emerald") || colorLower.includes("teal") || colorLower === "#10b981" || colorLower === "#14b8a6") {
    return "success";
  }
  if (colorLower.includes("258") || colorLower.includes("purple") || colorLower.includes("violet") || colorLower === "#8b5cf6" || colorLower === "#a855f7") {
    return "accent";
  }
  return "info";
};

export const StatCard = forwardRef(({ 
  icon: Icon, 
  title, 
  value, 
  suffix, 
  description, 
  color, 
  variant,
  delay = 0 
}, ref) => {
  const cardVariant = variant || getVariantFromColor(color);
  
  return (
    <div 
      ref={ref}
      className={`${styles.card} ${styles[cardVariant]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.glowOrb} />

      <div className={styles.cornerAccent} />

      <div className={styles.iconWrapper}>
        <div className={styles.iconInner}>
          <Icon className={styles.icon} />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>
          <AnimatedNumber value={value} />
          {suffix && <span className={styles.suffix}>{suffix}</span>}
        </p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";
