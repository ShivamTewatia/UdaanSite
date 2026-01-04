import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { CHART_COLORS } from "./placementData";
import { ChartCard } from "./chartCard";
import styles from "./departmentBarChart.module.css";
import { Building2 } from "lucide-react";


export const DepartmentBarChart = ({ courses }) => {
  const [activeBarIndex, setActiveBarIndex] = useState(null);

  const chartData = courses.map(item => ({
    name: item.course.replace("B.Tech ", ""),
    placement: item.placementPercent,
    offers: item.offers,
    eligible: item.eligibleStudents,
    avgPackage: item.averagePackage,
    highPackage: item.highestPackage,
  }));

  const getBarColor = (value, isActive) => {
    const opacity = isActive ? 1 : 0.85;
    if (value >= 90) return `hsla(258, 90%, 66%, ${opacity})`;
    if (value >= 75) return `hsla(160, 84%, 39%, ${opacity})`;
    if (value >= 60) return `hsla(25, 95%, 55%, ${opacity})`;
    return `hsla(217, 91%, 60%, ${opacity})`;
  };

  return (
    <ChartCard
      icon={<Building2 size={42} />}
      title="Department-wise Placement Rate"
      subtitle="Click on bars for detailed insights"
      legend={
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.primary }} />
            <span>≥90%</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.success }} />
            <span>75-89%</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.secondary }} />
            <span>60-74%</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.info }} />
            <span>&lt;60%</span>
          </div>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            tick={{ fontSize: 11, fill: "#6b7280", fontWeight: 500 }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
          />
          <YAxis 
            unit="%" 
            domain={[0, 100]} 
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12)"
            }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const d = payload[0].payload;
                return (
                  <div className={styles.tooltip}>
                    <p className={styles.tooltipTitle}>B.Tech {d.name}</p>
                    <div className={styles.tooltipGrid}>
                      <span className={styles.tooltipLabel}>Placement:</span>
                      <span className={styles.tooltipValuePrimary}>{d.placement}%</span>
                      <span className={styles.tooltipLabel}>Offers:</span>
                      <span className={styles.tooltipValue}>{d.offers} / {d.eligible}</span>
                      <span className={styles.tooltipLabel}>Highest:</span>
                      <span className={styles.tooltipValue}>₹{d.highPackage} LPA</span>
                      <span className={styles.tooltipLabel}>Average:</span>
                      <span className={styles.tooltipValue}>₹{d.avgPackage} LPA</span>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="placement" 
            radius={[8, 8, 0, 0]}
            onMouseEnter={(_, index) => setActiveBarIndex(index)}
            onMouseLeave={() => setActiveBarIndex(null)}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getBarColor(entry.placement, activeBarIndex === index)}
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

