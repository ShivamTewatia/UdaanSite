import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChartIcon } from 'lucide-react';
import { placementDataTop, getDeptShort } from './placementDataTop';
import { CollapsibleWrapper } from "./collapsableSection";
import styles from './departmentPieChart.module.css';

const COLORS = [
  'hsl(215, 65%, 50%)', 'hsl(215, 55%, 58%)', 'hsl(215, 45%, 66%)', 'hsl(215, 60%, 54%)',
  'hsl(215, 70%, 44%)', 'hsl(215, 50%, 62%)', 'hsl(215, 40%, 56%)', 'hsl(215, 55%, 68%)',
  'hsl(215, 60%, 48%)', 'hsl(215, 50%, 72%)', 'hsl(215, 45%, 60%)',
];

const DEPTH_COLORS = [
  'hsl(215, 65%, 38%)', 'hsl(215, 55%, 44%)', 'hsl(215, 45%, 52%)', 'hsl(215, 60%, 40%)',
  'hsl(215, 70%, 34%)', 'hsl(215, 50%, 48%)', 'hsl(215, 40%, 42%)', 'hsl(215, 55%, 54%)',
  'hsl(215, 60%, 36%)', 'hsl(215, 50%, 58%)', 'hsl(215, 45%, 46%)',
];

const RADIAN = Math.PI / 180;

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className={styles.tooltip}>
      <div className={styles.ttTitle}>{d.name}</div>
      <div className={styles.ttRow}>
        <span>Placed</span>
        <span className={styles.ttValue}>{d.placed} / {d.eligible}</span>
      </div>
      <div className={styles.ttRow}>
        <span>Share</span>
        <span className={styles.ttValue}>{d.sharePercent}%</span>
      </div>
    </div>
  );
};

const renderLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, name, payload } = props;
  const share = payload.sharePercent;

  if (parseFloat(share) < 1.5) return null;

  const OFFSET_LINE = 20;
  const OFFSET_LABEL = 36;
  const TAIL = 18;

  const sx = cx + outerRadius * Math.cos(-midAngle * RADIAN);
  const sy = cy + outerRadius * Math.sin(-midAngle * RADIAN);

  const mx = cx + (outerRadius + OFFSET_LINE) * Math.cos(-midAngle * RADIAN);
  const my = cy + (outerRadius + OFFSET_LINE) * Math.sin(-midAngle * RADIAN);

  const ex = mx + (mx > cx ? TAIL : -TAIL);
  const ey = my;

  const textAnchor = ex > cx ? 'start' : 'end';
  const shortName = getDeptShort(name);

  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#9bb0c8"
        fill="none"
        strokeWidth={1}
      />
      <circle cx={sx} cy={sy} r={2.5} fill="#7a9abb" />
      <text
        x={ex + (ex > cx ? 5 : -5)}
        y={ey - 5}
        textAnchor={textAnchor}
        dominantBaseline="central"
        className={styles.labelName}
      >
        {shortName}
      </text>
      <text
        x={ex + (ex > cx ? 5 : -5)}
        y={ey + 9}
        textAnchor={textAnchor}
        dominantBaseline="central"
        className={styles.labelPercent}
      >
        {share}%
      </text>
    </g>
  );
};

export const DepartmentPieChart = () => {
  const [yearIdx, setYearIdx] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const [sweepAngle, setSweepAngle] = useState(0);
  const rafRef = useRef(null);

  const yearData = placementDataTop[yearIdx];

  const runSweep = useCallback(() => {
    setSweepAngle(0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      setSweepAngle(ease * 360);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    runSweep();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [yearIdx, runSweep]);

  useEffect(() => {
    setAnimKey(k => k + 1);
  }, [yearIdx]);

  const handleToggle = useCallback((open) => {
    if (open) {
      setAnimKey(k => k + 1);
      runSweep();
    }
  }, [runSweep]);

  const chartData = useMemo(() => {
    const totalPlaced = yearData.totals.placed;
    return yearData.courses.map(c => ({
      name: c.course,
      placed: c.placed,
      eligible: c.eligibleStudents,
      sharePercent: ((c.placed / totalPlaced) * 100).toFixed(1),
      value: c.placed,
    }));
  }, [yearData]);

  const actions = (
    <div className={styles.yearToggle}>
      {placementDataTop.map((yd, i) => (
        <button
          key={yd.year}
          onClick={(e) => { e.stopPropagation(); setYearIdx(i); }}
          className={`${styles.yearBtn} ${yearIdx === i ? styles.yearBtnActive : ''}`}
        >
          {yd.year}
        </button>
      ))}
    </div>
  );

  return (
    <CollapsibleWrapper
      icon={PieChartIcon}
      title="Department-wise Placement Share"
      subtitle={`${yearData.year} · Placement distribution across departments`}
      defaultOpen
      actions={actions}
      onToggle={handleToggle}
    >
      <div className={styles.chartOuter}>
        <div className={styles.chartWrap}>
          {}
          <div className={styles.centerStat}>
            <div className={styles.centerNum}>{yearData.totals.placed}</div>
            <div className={styles.centerLabel}>Total Placed</div>
          </div>

          <ResponsiveContainer width="100%" height={380}>
            <PieChart>
              <defs>
                <filter id="pie3dShadow">
                  <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#7a9abb" floodOpacity="0.3" />
                </filter>
                {COLORS.map((color, i) => (
                  <linearGradient key={`grad-${i}`} id={`pieGrad${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={1} />
                    <stop offset="100%" stopColor={DEPTH_COLORS[i]} stopOpacity={1} />
                  </linearGradient>
                ))}
              </defs>

              {}
              <Pie
                data={chartData}
                cx="50%"
                cy="48%"
                innerRadius={68}
                outerRadius={118}
                paddingAngle={2}
                startAngle={90}
                endAngle={90 - sweepAngle}
                dataKey="value"
                isAnimationActive={false}
                stroke="none"
                label={false}
                labelLine={false}
              >
                {chartData.map((_, i) => (
                  <Cell key={`depth-${i}`} fill={DEPTH_COLORS[i % DEPTH_COLORS.length]} opacity={0.55} />
                ))}
              </Pie>

              {}
              <Pie
                key={animKey}
                data={chartData}
                cx="50%"
                cy="46%"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={2}
                startAngle={90}
                endAngle={90 - sweepAngle}
                dataKey="value"
                label={sweepAngle >= 359 ? renderLabel : false}
                labelLine={false}
                isAnimationActive={false}
                stroke="#ffffff"
                strokeWidth={2}
                style={{ filter: 'url(#pie3dShadow)' }}
              >
                {chartData.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={`url(#pieGrad${i})`} />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CollapsibleWrapper>
  );
};

export default DepartmentPieChart;
