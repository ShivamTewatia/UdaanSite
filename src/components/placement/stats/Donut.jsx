import { PieChart } from "lucide-react";
import { CollapsibleWrapper } from "./collapsableSection";
import { placementDataTop } from "./placementDataTop";
import styles from "./donut.module.css";
import { useState } from "react";

const COLORS = {
  year1: { main: "hsl(215, 65%, 55%)", dark: "hsl(215, 65%, 38%)", light: "hsl(215, 65%, 72%)" },
  year2: { main: "hsl(215, 65%, 55%)", dark: "hsl(215, 65%, 38%)", light: "hsl(215, 65%, 72%)" },
  gray: { main: "hsl(220, 15%, 88%)", dark: "hsl(220, 15%, 72%)" },
};

/* ---------- Donut Util Functions (unchanged) ----------- */
const polarToCart = (cx, cy, rx, ry, deg) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + rx * Math.cos(rad), y: cy + ry * Math.sin(rad) };
};

const donutPath = (cx, cy, oRx, oRy, iRx, iRy, startDeg, endDeg) => {
  if (endDeg - startDeg >= 360) endDeg = startDeg + 359.99;
  const os = polarToCart(cx, cy, oRx, oRy, startDeg);
  const oe = polarToCart(cx, cy, oRx, oRy, endDeg);
  const is_ = polarToCart(cx, cy, iRx, iRy, startDeg);
  const ie = polarToCart(cx, cy, iRx, iRy, endDeg);
  const lg = endDeg - startDeg > 180 ? 1 : 0;
  return `M${os.x},${os.y} A${oRx},${oRy} 0 ${lg} 1 ${oe.x},${oe.y} 
          L${ie.x},${ie.y} A${iRx},${iRy} 0 ${lg} 0 ${is_.x},${is_.y} Z`;
};

/* ---------- Single Donut Component (unchanged) ---------- */
const Donut3D = ({ yearData, colors, id }) => {
  const [hovered, setHovered] = useState(null);

  const cx = 120, cy = 90;
  const oRx = 80, oRy = 40, iRx = 45, iRy = 22;
  const depth = 16;

  const { placed, eligibleStudents, placementPercent } = yearData.totals;
  const unplaced = eligibleStudents - placed;
  const placedEnd = (placed / eligibleStudents) * 360;

  return (
    <div className={styles.donutCard}>
      <div className={styles.yearBadge}>{yearData.year}</div>

      {/* SVG Donut */}
      <svg viewBox="0 0 240 160" className={styles.donutSvg}>
        <defs>
          <linearGradient id={`dg-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.light} />
            <stop offset="100%" stopColor={colors.main} />
          </linearGradient>
          <filter id={`ds-${id}`}>
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Bottom Layer */}
        <path
          d={`M${cx + oRx},${cy} A${oRx},${oRy} 0 1 1 ${cx - oRx},${cy} 
              L${cx - oRx},${cy + depth} A${oRx},${oRy} 0 1 0 ${cx + oRx},${cy + depth} Z`}
          fill={colors.dark}
          opacity={0.85}
        />

        {/* Inner bottom */}
        <path
          d={`M${cx - iRx},${cy} A${iRx},${iRy} 0 1 1 ${cx + iRx},${cy} 
              L${cx + iRx},${cy + depth} A${iRx},${iRy} 0 1 0 ${cx - iRx},${cy + depth} Z`}
          fill="hsl(220, 15%, 78%)"
          opacity={0.5}
        />

        {/* Placed */}
        <path
          d={donutPath(cx, cy, oRx, oRy, iRx, iRy, 0, placedEnd)}
          fill={`url(#dg-${id})`}
          stroke="white"
          strokeWidth="0.8"
          filter={`url(#ds-${id})`}
          opacity={hovered === "unplaced" ? 0.6 : 1}
          onMouseEnter={() => setHovered("placed")}
          onMouseLeave={() => setHovered(null)}
        />

        {/* Unplaced */}
        <path
          d={donutPath(cx, cy, oRx, oRy, iRx, iRy, placedEnd, 360)}
          fill={COLORS.gray.main}
          stroke="white"
          strokeWidth="0.8"
          opacity={hovered === "placed" ? 0.6 : 1}
          onMouseEnter={() => setHovered("unplaced")}
          onMouseLeave={() => setHovered(null)}
        />

        {/* Center text */}
        <text x={cx} y={cy - 4} textAnchor="middle" className={styles.centerPercent}>
          {placementPercent.toFixed(1)}%
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" className={styles.centerLabel}>
          Placed
        </text>
      </svg>

      {/* Hover Tooltip */}
      {hovered && (
        <div
          className={styles.hoverTooltip}
          style={{ background: hovered === "placed" ? colors.main : "hsl(220,10%,55%)" }}
        >
          {hovered === "placed" ? `${placed} Placed` : `${unplaced} Unplaced`}
        </div>
      )}

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.statItem}>
          <span className={styles.statValue} style={{ color: colors.main }}>{placed}</span>
          <span className={styles.statLabel}>Placed</span>
        </div>

        <div className={styles.statDivider} />

        <div className={styles.statItem}>
          <span className={styles.statValue}>{unplaced}</span>
          <span className={styles.statLabel}>Unplaced</span>
        </div>

        <div className={styles.statDivider} />

        <div className={styles.statItem}>
          <span className={styles.statValue}>{eligibleStudents}</span>
          <span className={styles.statLabel}>Eligible</span>
        </div>
      </div>
    </div>
  );
};

/* ---------- WRAPPED Donut Section ---------- */
export const OverallDonut3D = () => {
  const year1 = placementDataTop[0];
  const year2 = placementDataTop[1];

  return (
    <CollapsibleWrapper
      icon={PieChart}
      title="Overall Placement Breakdown"
      subtitle="Placed vs Unplaced Comparison"
      defaultOpen={true}
    >
      <div className={styles.container}>
        <div className={styles.donutRow}>
          <Donut3D yearData={year1} colors={COLORS.year1} id="y1" />
          <Donut3D yearData={year2} colors={COLORS.year2} id="y2" />
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendSwatch} style={{ background: COLORS.year1.main }} />
            <span className={styles.legendLabel}>Placed</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendSwatch} style={{ background: COLORS.gray.main }} />
            <span className={styles.legendLabel}>Unplaced</span>
          </div>
        </div>
      </div>
    </CollapsibleWrapper>
  );
};

export default OverallDonut3D;