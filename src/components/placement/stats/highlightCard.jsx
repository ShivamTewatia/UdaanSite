import styles from "./highlightCard.module.css";

export const HighlightCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  variant,
  delay = 0,
}) => {
  return (
    <div
      className={`${styles.card} ${styles[variant]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      
      <div className={styles.glowOrb} />

      <div className={styles.iconWrapper}>
        <div className={styles.iconInner}>
          <Icon className={styles.icon} />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.cornerAccent} />
    </div>
  );
};
