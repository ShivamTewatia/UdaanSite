import styles from "./yearSelector.module.css";

export const YearSelector = ({ years, selectedYear, onYearChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`${styles.button} ${selectedYear === year ? styles.active : styles.inactive}`}
          >
            {year}
            {selectedYear === year && <span className={styles.indicator} />}
          </button>
        ))}
      </div>
    </div>
  );
};

