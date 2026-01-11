import { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { Building2 } from "lucide-react";
import styles from "./departmentBarChart.module.css";
import { CollapsibleWrapper } from "./collapsableSection";

const CHART_COLORS = {
  primary: "#8b5cf6",
  secondary: "#f97316",
  success: "#10b981",
  info: "#3b82f6",
};

export const DepartmentBarChart = ({ courses }) => {
  const [activeBarIndex, setActiveBarIndex] = useState(null);
  const [chartHeight, setChartHeight] = useState(360);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 468) {
        setChartHeight(280);
        setIsMobile(true);
        setIsTablet(false);
      } else if (width <= 768) {
        setChartHeight(300);
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setChartHeight(360);
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartData = courses?.map(item => ({
    name: item.course.replace("B.Tech ", ""),
    placement: item.placementPercent,
    offers: item.offers,
    eligible: item.eligibleStudents,
    avgPackage: item.averagePackage,
    highPackage: item.highestPackage,
  })) || [];

  // Only apply minWidth if we have many bars that need scrolling, otherwise use 100%
  const minChartWidth = isMobile && chartData.length > 6 
    ? Math.min(chartData.length * 35, 250) 
    : "100%";

  const getBarColor = (value, isActive) => {
    const opacity = isActive ? 1 : 0.85;
    if (value >= 90) return `hsla(258, 90%, 66%, ${opacity})`;
    if (value >= 75) return `hsla(160, 84%, 39%, ${opacity})`;
    if (value >= 60) return `hsla(25, 95%, 55%, ${opacity})`;
    return `hsla(217, 91%, 60%, ${opacity})`;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className={styles.tooltip}>
          <p className={styles.tooltipTitle}>B.Tech {d.name}</p>
          <div className={styles.tooltipDivider} />
          <div className={styles.tooltipGrid}>
            <span className={styles.tooltipLabel}>Placement Rate</span>
            <span className={styles.tooltipValuePrimary}>{d.placement}%</span>
            
            <span className={styles.tooltipLabel}>Offers Made</span>
            <span className={styles.tooltipValueSec}>{d.offers} / {d.eligible}</span>
            
            <span className={styles.tooltipLabel}>Highest Package</span>
            <span className={styles.tooltipValueThi}>₹{d.highPackage} LPA</span>
            
            <span className={styles.tooltipLabel}>Average Package</span>
            <span className={styles.tooltipValueFor}>₹{d.avgPackage} LPA</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const Legend = () => (
    <div className={styles.legend}>
      <div className={styles.legendItem}>
        <span className={styles.legendDot} style={{ background: CHART_COLORS.primary }} />
        <span>≥90%</span>
      </div>
      <div className={styles.legendItem}>
        <span className={styles.legendDot} style={{ background: CHART_COLORS.success }} />
        <span>75-89%</span>
      </div>
      <div className={styles.legendItem}>
        <span className={styles.legendDot} style={{ background: CHART_COLORS.secondary }} />
        <span>60-74%</span>
      </div>
      <div className={styles.legendItem}>
        <span className={styles.legendDot} style={{ background: CHART_COLORS.info }} />
        <span>&lt;60%</span>
      </div>
    </div>
  );

  return (
    <CollapsibleWrapper
      icon={Building2}
      title="Department-wise Placement Rate"
      subtitle="Hover on bars for detailed insights"
      legend={<Legend />}
      defaultOpen={false}
    >
      <div className={styles.chartWrapper}>
        <div className={styles.chartContainer} style={{ minWidth: minChartWidth }}>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart 
              data={chartData} 
              margin={{ 
                top: 10, 
                right: isMobile ? 10 : 30, 
                left: isMobile ? -15 : 0, 
                bottom: isMobile ? 10 : isTablet ? 30 : 60 
              }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#e5e7eb" 
                vertical={false} 
              />
              <XAxis 
                dataKey="name" 
                angle={-60} 
                textAnchor="end" 
                tick={{ 
                  fontSize: isMobile ? 8 : isTablet ? 9 : 11, 
                  fill: "#6b7280", 
                  fontWeight: 500 
                }}
                height={isMobile ? 40 : 60}
                interval={0}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={false}
              />
              <YAxis 
                unit="%" 
                domain={[0, 100]} 
                tick={{ 
                  fontSize: isMobile ? 9 : isTablet ? 10 : 11, 
                  fill: "#6b7280" 
                }}
                width={isMobile ? 40 : 50}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={false}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ 
                  fill: "hsla(258, 90%, 66%, 0.15)", 
                  radius: 6,
                }}
              />
              <Bar 
                dataKey="placement" 
                radius={[isMobile ? 4 : 6, isMobile ? 4 : 6, 0, 0]}
                onMouseEnter={(_, index) => setActiveBarIndex(index)}
                onMouseLeave={() => setActiveBarIndex(null)}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={getBarColor(entry.placement, activeBarIndex === index)}
                    style={{ 
                      cursor: "pointer", 
                      transition: "all 0.3s",
                      filter: activeBarIndex === index ? "brightness(1.05)" : "none"
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CollapsibleWrapper>
  );
};
