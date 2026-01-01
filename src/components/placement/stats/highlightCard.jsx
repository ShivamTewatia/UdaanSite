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
      {/* Glow Orb */}
      <div className={styles.glowOrb} />

      {/* Icon */}
      <div className={styles.iconWrapper}>
        <div className={styles.iconInner}>
          <Icon className={styles.icon} />
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* Corner Accent */}
      <div className={styles.cornerAccent} />
    </div>
  );
};
