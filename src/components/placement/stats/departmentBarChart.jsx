import { useState } from "react";
import { Building2 } from "lucide-react";
import { CollapsibleWrapper } from "./collapsableSection";
import styles from "./DepartmentBarChart.module.css";

const CHART_HEIGHT = 240;

const METRICS = [
  { key: "placement", label: "Placement %", suffix: "%", max: 100 },
  { key: "highestPackage", label: "Highest Package", suffix: " LPA", max: 0 },
  { key: "averagePackage", label: "Avg Package", suffix: " LPA", max: 0 },
];

const getBarColors = (percent) => {
  const lightness = 82 - (percent / 100) * 20;
  const sat = 55 + (percent / 100) * 14;
  return {
    color: `hsl(215, ${sat}%, ${lightness}%)`,
    dark: `hsl(215, ${sat}%, ${lightness - 8}%)`,
    light: `hsl(215, ${sat + 5}%, ${lightness + 10}%)`,
  };
};

const Bar3D = ({
  height,
  maxHeight,
  color,
  darkColor,
  lightColor,
  delay,
  isHovered,
  onHover,
  onLeave,
}) => {
  const barW = 30;
  const depth = 14;
  const usableHeight = CHART_HEIGHT - depth - 10;
  const barH = maxHeight > 0 ? Math.max((height / maxHeight) * usableHeight, 6) : 6;

  return (
    <div
      className={styles.barWrapper}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={styles.barHitArea}
        style={{
          height: barH + depth,
          width: barW + depth,
          bottom: 0,
          left: 0,
        }}
      />
      <div className={styles.barCanvas} style={{ width: barW + depth, height: CHART_HEIGHT }}>
        <div
          className={styles.barInner}
          style={{ width: barW + depth, height: barH + depth, animationDelay: `${delay}s` }}
        >
          <div
            className={styles.barFront}
            style={{
              width: barW,
              height: barH,
              background: `linear-gradient(180deg, ${lightColor} 0%, ${color} 50%, ${darkColor} 100%)`,
              boxShadow: isHovered ? `0 4px 20px ${lightColor}` : "none",
              filter: isHovered ? "brightness(1.08)" : "brightness(1)",
            }}
          />
          <div
            className={styles.barTop}
            style={{
              width: barW,
              height: depth,
              bottom: barH,
              left: 0,
              background: `linear-gradient(135deg, ${lightColor} 0%, ${color} 100%)`,
              transform: `skewX(-45deg) translateX(${depth / 2}px)`,
            }}
          />
          <div
            className={styles.barRight}
            style={{
              width: depth,
              height: barH,
              background: darkColor,
              transform: `skewY(-45deg) translateY(-${depth / 2}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const DepartmentBarChart = ({ courses, year }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [activeMetric, setActiveMetric] = useState("placement");

  const currentMetric = METRICS.find((m) => m.key === activeMetric);

  const chartData = courses.map((item) => ({
    name: item.course.replace("B.Tech ", "").replace("B.Tech. ", ""),
    fullName: item.course,
    placement: item.placementPercent,
    highestPackage: item.highestPackage,
    averagePackage: item.averagePackage,
    placed: item.placed ?? item.offers ?? 0,
    eligible: item.eligibleStudents,
  }));

  const maxVal =
    currentMetric.max > 0
      ? currentMetric.max
      : Math.ceil(Math.max(...chartData.map((d) => d[activeMetric])) * 1.15);

  const ySteps = 5;
  const yLabels = Array.from({ length: ySteps + 1 }, (_, i) =>
    Math.round((maxVal / ySteps) * (ySteps - i))
  );

  return (
    <div className={styles.chartContainer}>
    <CollapsibleWrapper
      icon={Building2}
      title={`Department-wise Statistics${year ? ` – ${year}` : ""}`}
      subtitle="Hover on bars for detailed insights"
      defaultOpen={true}
    >
      <div className={styles.metricRow}>
        {METRICS.map((m) => (
          <button
            key={m.key}
            className={`${styles.metricBtn} ${activeMetric === m.key ? styles.metricBtnActive : ""}`}
            onClick={() => setActiveMetric(m.key)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.chartArea}>
          <div className={styles.yAxis} style={{ height: CHART_HEIGHT }}>
            {yLabels.map((v, i) => (
              <span key={i} className={styles.yAxisLabel}>
                {activeMetric === "placement" ? `${v}%` : `₹${v}`}
              </span>
            ))}
          </div>

          <div className={styles.barsContainer}>
            <div className={styles.barsRow} style={{ height: CHART_HEIGHT }}>
              {Array.from({ length: ySteps - 1 }, (_, i) => (
                <div
                  key={i}
                  className={styles.gridLine}
                  style={{ bottom: `${((i + 1) / ySteps) * 100}%` }}
                />
              ))}

              {chartData.map((entry, idx) => {
                const val = entry[activeMetric];
                const pct = maxVal > 0 ? (val / maxVal) * 100 : 0;
                const colors = getBarColors(pct);

                return (
                  <div key={idx} className={styles.barGroup}>
                    <div className={styles.barPair}>
                      <Bar3D
                        height={val}
                        maxHeight={maxVal}
                        color={colors.color}
                        darkColor={colors.dark}
                        lightColor={colors.light}
                        value={val}
                        suffix={currentMetric.suffix}
                        delay={idx * 0.06}
                        isHovered={hoveredIdx === idx}
                        onHover={() => setHoveredIdx(idx)}
                        onLeave={() => setHoveredIdx(null)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.xAxisRow}>
              {chartData.map((entry, idx) => (
                <div key={idx} className={styles.xLabel}>{entry.name}</div>
              ))}
            </div>

            {hoveredIdx !== null && chartData[hoveredIdx] && (
              <div className={styles.detailCardWrap}>
                <div className={styles.detailCard}>
                  <div className={styles.detailTitle}>{chartData[hoveredIdx].fullName}</div>
                  <div className={styles.detailDivider} />
                  <div className={styles.detailGrid}>
                    <span className={styles.detailLabel}>Placement Rate</span>
                    <span className={styles.detailValueMain}>{chartData[hoveredIdx].placement}%</span>

                    <span className={styles.detailLabel}>Placed / Eligible</span>
                    <span className={styles.detailValue}>
                      {chartData[hoveredIdx].placed} / {chartData[hoveredIdx].eligible}
                    </span>

                    <span className={styles.detailLabel}>Highest Package</span>
                    <span className={styles.detailValue}>₹{chartData[hoveredIdx].highestPackage} LPA</span>

                    <span className={styles.detailLabel}>Average Package</span>
                    <span className={styles.detailValue}>₹{chartData[hoveredIdx].averagePackage} LPA</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CollapsibleWrapper>
    </div>
  );
};
