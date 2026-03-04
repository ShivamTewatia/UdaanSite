import { useState, useMemo } from "react";
import {
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import {
  placementDataTop,
  getCommonDepartments,
  getDeptShort,
  METRIC_CONFIG,
} from "./placementDataTop";

import { CollapsibleWrapper } from "./collapsableSection";
import styles from "./departmentTrendChart.module.css";

const CHART_HEIGHT = 220;

/* ---------- 3D Bar ---------- */
const Bar3D = ({
  height,
  maxHeight,
  color,
  darkColor,
  lightColor,
  value,
  suffix,
  delay,
  isHovered,
  onHover,
  onLeave,
}) => {
  const barW = 40;
  const depth = 16;
  const usableHeight = CHART_HEIGHT - depth;
  const barH = maxHeight > 0 ? Math.max((height / maxHeight) * usableHeight, 4) : 4;

  return (
    <div
      className={styles.barWrapper}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isHovered && (
        <div className={styles.tooltip} style={{ background: color }}>
          {value}
          {suffix}
        </div>
      )}

      <div className={styles.barCanvas} style={{ width: barW + depth, height: CHART_HEIGHT }}>
        <div
          className={styles.barInner}
          style={{
            width: barW + depth,
            height: barH + depth,
            animationDelay: `${delay}s`,
          }}
        >
          <div
            className={styles.barFront}
            style={{
              width: barW,
              height: barH,
              background: `linear-gradient(180deg, ${color} 0%, ${darkColor} 100%)`,
              boxShadow: isHovered ? `0 0 16px ${lightColor}` : "none",
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

/* ---------- Main Component ---------- */
export const PlacementChart3D = () => {
  const [selectedMetric, setSelectedMetric] = useState("placementPercent");
  const [hoveredBar, setHoveredBar] = useState(null);

  const commonDepts = useMemo(() => getCommonDepartments(), []);
  const metricConfig = METRIC_CONFIG[selectedMetric];

  const year1 = placementDataTop[0];
  const year2 = placementDataTop[1];

  const chartData = useMemo(() => {
    return commonDepts.map((course) => {
      const d1 = year1.courses.find((c) => c.course === course);
      const d2 = year2.courses.find((c) => c.course === course);
      const v1 = d1?.[selectedMetric] || 0;
      const v2 = d2?.[selectedMetric] || 0;
      const change = v1 > 0 ? ((v2 - v1) / v1) * 100 : 0;
      return { course, shortName: getDeptShort(course), year1Value: v1, year2Value: v2, change };
    });
  }, [commonDepts, selectedMetric, year1, year2]);

  const maxValue = useMemo(() => {
    const all = chartData.flatMap((d) => [d.year1Value, d.year2Value]);
    return Math.max(...all);
  }, [chartData]);

  const yTicks = useMemo(() => {
    const roundedMax = Math.ceil(maxValue);
    const step = roundedMax / 4;
    return [roundedMax, step * 3, step * 2, step, 0].map((v) =>
      selectedMetric === "placementPercent" ? `${Math.round(v)}%` : `${Math.round(v)}`
    );
  }, [maxValue, selectedMetric]);

  return (
    <div className={styles.container}>
      <CollapsibleWrapper
        icon={BarChart3}
        title="Department Comparison Chart"
        subtitle={`${year1.year} vs ${year2.year} · Year-over-Year Analysis`}
        defaultOpen={true}
      >
        {/* Metric Buttons */}
        <div className={styles.metricRow}>
          {Object.keys(METRIC_CONFIG).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedMetric(key)}
              className={`${styles.metricBtn} ${selectedMetric === key ? styles.metricBtnActive : ""}`}
            >
              {METRIC_CONFIG[key].label}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className={styles.chartArea}>
          {/* Y-Axis */}
          <div className={styles.yAxis} style={{ height: CHART_HEIGHT }}>
            {yTicks.map((t, i) => (
              <span key={i} className={styles.yAxisLabel}>{t}</span>
            ))}
          </div>

          {/* Bars */}
          <div className={styles.barsContainer}>
            <div className={styles.barsRow} style={{ height: CHART_HEIGHT }}>
              {/* Grid lines at 25%, 50%, 75%, 100% */}
              <div className={styles.gridLine} style={{ bottom: "25%" }} />
              <div className={styles.gridLine} style={{ bottom: "50%" }} />
              <div className={styles.gridLine} style={{ bottom: "75%" }} />
              <div className={styles.gridLine} style={{ bottom: "100%" }} />

              {chartData.map((item, i) => (
                <div key={item.course} className={styles.barGroup} style={{ width: 124 }}>
                  <div className={styles.changeChip}>
                    <span
                      className={`${styles.changeInner} ${
                        item.change >= 0 ? styles.changeUp : styles.changeDown
                      }`}
                    >
                      {item.change >= 0 ? (
                        <ArrowUpRight className={styles.changeIcon} />
                      ) : (
                        <ArrowDownRight className={styles.changeIcon} />
                      )}
                      {Math.abs(item.change).toFixed(1)}%
                    </span>
                  </div>

                  <div className={styles.barPair}>
                    <Bar3D
                      height={item.year1Value}
                      maxHeight={maxValue}
                      color="hsl(215, 65%, 65%)"
                      darkColor="hsl(215, 65%, 50%)"
                      lightColor="hsl(215, 65%, 82%)"
                      value={item.year1Value}
                      suffix={metricConfig.suffix}
                      delay={i * 0.06}
                      isHovered={hoveredBar === `${item.course}-1`}
                      onHover={() => setHoveredBar(`${item.course}-1`)}
                      onLeave={() => setHoveredBar(null)}
                    />
                    <Bar3D
                      height={item.year2Value}
                      maxHeight={maxValue}
                      color="hsl(215, 45%, 80%)"
                      darkColor="hsl(215, 45%, 66%)"
                      lightColor="hsl(215, 45%, 90%)"
                      value={item.year2Value}
                      suffix={metricConfig.suffix}
                      delay={i * 0.06 + 0.03}
                      isHovered={hoveredBar === `${item.course}-2`}
                      onHover={() => setHoveredBar(`${item.course}-2`)}
                      onLeave={() => setHoveredBar(null)}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* X-Axis Labels */}
            <div className={styles.xAxisRow}>
              {chartData.map((item) => (
                <div key={item.course} className={styles.xLabel}>
                  {item.shortName}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend below chart */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendSwatch} style={{ background: "hsl(215 65% 65%)" }} />
            <span className={styles.legendLabel}>{year1.year}</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendSwatch} style={{ background: "hsl(215 45% 80%)" }} />
            <span className={styles.legendLabel}>{year2.year}</span>
          </div>
        </div>
      </CollapsibleWrapper>
    </div>
  );
};


