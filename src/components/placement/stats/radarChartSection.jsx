import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip
} from "recharts";
import { CHART_COLORS } from "./placementData";
// import { ChartCard } from "./chartCard";
import styles from "./radarChartSection.module.css";
import { RadarIcon } from "lucide-react";
import {CollapsibleWrapper} from "./collapsableSection";

export const RadarChartSection = ({ courses }) => {
  const radarData = courses.map(item => ({
    department: item.course.replace("B.Tech ", ""),
    placement: item.placementPercent,
    packageScore: Math.min((item.averagePackage / 15) * 100, 100),
    efficiency: Math.min((item.offers / item.eligibleStudents) * 100, 100),
  }));

  return (
    <CollapsibleWrapper
      icon={RadarIcon}
      title="Department Performance Radar"
      subtitle="Multi-dimensional performance analysis"
      legend={
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.primary }} />
            <span>Placement %</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.info }} />
            <span>Package Score</span>
          </div>
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={360}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="department" 
            tick={{ fontSize: 11, fill: "#6b7280", fontWeight: 500 }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fontSize: 10, fill: "#9ca3af" }} 
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
            }}
            formatter={(value, name) => [
              `${Math.round(value)}%`,
              name === "placement" ? "Placement Rate" : "Package Score"
            ]}
          />
          <Radar
            name="Placement %"
            dataKey="placement"
            stroke={CHART_COLORS.primary}
            fill={CHART_COLORS.primary}
            fillOpacity={0.4}
            strokeWidth={2}
          />
          <Radar
            name="Package Score"
            dataKey="packageScore"
            stroke={CHART_COLORS.info}
            fill={CHART_COLORS.info}
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </CollapsibleWrapper>
  );
};

