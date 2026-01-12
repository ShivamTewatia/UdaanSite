// import styles from "./yearSelector.module.css";

// export const YearSelector = ({ years, selectedYear, onYearChange }) => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         {years.map((year) => (
//           <button
//             key={year}
//             onClick={() => onYearChange(year)}
//             className={`${styles.button} ${selectedYear === year ? styles.active : styles.inactive}`}
//           >
//             {year}
//             {selectedYear === year && <span className={styles.indicator} />}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };
import { useEffect, useRef } from "react";
import styles from "./yearSelector.module.css";

export const YearSelector = ({ years, selectedYear, onYearChange }) => {
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
    <div ref={containerRef} className={styles.container}>
      <div className={styles.wrapper}>
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
  );
};

