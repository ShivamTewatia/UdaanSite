import { useMemo } from "react";
import { CHART_COLORS } from "./placementData";
import styles from "./radarChartSection.module.css";
import { CollapsibleWrapper } from './collapsableSection';

export const FunnelChart3D = ({ courses, year }) => {
  const sorted = useMemo(
    () => [...courses].sort((a, b) => b.eligibleStudents - a.eligibleStudents),
    [courses]
  );

  const maxStudents = useMemo(
    () => Math.max(...sorted.map((c) => c.eligibleStudents)),
    [sorted]
  );

  const totals = useMemo(() => {
    const eligibleStudents = courses.reduce((s, c) => s + c.eligibleStudents, 0);
    const placed = courses.reduce((s, c) => s + c.placed, 0);
    const placementPercent =
      eligibleStudents > 0
        ? ((placed / eligibleStudents) * 100).toFixed(1)
        : "0";
    const highestPackage = Math.max(...courses.map((c) => c.highestPackage));

    return { eligibleStudents, placed, placementPercent, highestPackage };
  }, [courses]);

  return (

    <CollapsibleWrapper
      // icon={Building2}
      title={`Department-wise Analysis`}
      subtitle={`Eligible Vs Placed${year ? ` – ${year}` : ""}`}
      defaultOpen={true}
      legend={
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDotEligible} />
            <span>Eligible</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDotPlaced} />
            <span>Placed</span>
          </div>
        </div>
      }
    >
    <div className={styles.chartWrapper}>
      {}


      {}
      <div className={styles.barList}>
        {sorted.map((course, i) => {
          const eligibleWidth = (course.eligibleStudents / maxStudents) * 100;
          const placedWidth = (course.placed / maxStudents) * 100;
          const color = CHART_COLORS[i % CHART_COLORS.length];

          return (
            <div key={course.course} className={styles.barRow}>
              <div className={styles.barLabel}>
                {course.course.replace("B.Tech ", "")}
              </div>

              <div className={styles.barTrack}>
                <div
                  className={styles.barEligible}
                  style={{
                    width: `${eligibleWidth}%`,
                    background: `${color}22`,
                    border: `1px solid ${color}44`,
                  }}
                />

                <div
                  className={styles.barPlaced}
                  style={{
                    width: `${placedWidth}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                  }}
                />

                <div
                  className={styles.barValues}
                  style={{ right: `${100 - eligibleWidth + 1}%` }}
                >
                  {/* {course.placed}/{course.eligibleStudents}  */}
                  ({course.placementPercent}%)
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </CollapsibleWrapper>
  );
};
