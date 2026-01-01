import styles from "./chartCard.module.css";

export const ChartCard = ({ icon,title, subtitle, children, actions, legend }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </div>

        <div className={styles.headerActions}>
          {legend}
          {actions}
        </div>
      </div>
      <div className={styles.chartContainer}>
        {children}
      </div>
    </div>
  );
};
