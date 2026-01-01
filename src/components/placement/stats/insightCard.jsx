import styles from "./insightCard.module.css";

export const InsightCard = ({
  icon: Icon,
  label,
  value,
  subValue,
  variant,
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      {/* Accent Bar */}
      <div className={styles.accentBar} />

      {/* Icon */}
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.label}>{label}</p>
        <div className={styles.valueRow}>
          <p className={styles.value}>{value}</p>
          {subValue && <p className={styles.subValue}>{subValue}</p>}
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
