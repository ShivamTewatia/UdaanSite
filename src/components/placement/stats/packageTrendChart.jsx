import { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend
} from "recharts";
import { IndianRupee } from "lucide-react";
import { getYearlyTrends, CHART_COLORS } from "./placementData";
import styles from "./packageTrendChart.module.css";
import { CollapsibleWrapper } from "./collapsableSection";

export const PackageTrendChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [chartHeight, setChartHeight] = useState(360);
  const trendData = getYearlyTrends();
  const avgHighest = trendData.reduce((sum, d) => sum + d.highestPackage, 0) / trendData.length;
  const avgMean = trendData.reduce((sum, d) => sum + d.averagePackage, 0) / trendData.length;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 468) {
        setChartHeight(240);
      } else if (width <= 768) {
        setChartHeight(300);
      } else {
        setChartHeight(360);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = window.innerWidth <= 468;
  const isTablet = window.innerWidth <= 768;

  return (
    <CollapsibleWrapper
      icon={IndianRupee}
      title="Package Trends Over Decade"
      subtitle="Highest and average package evolution"
      legend={
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.primary }} />
            <span>Avg Highest: ₹{avgHighest.toFixed(1)} LPA</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: CHART_COLORS.info }} />
            <span>Avg Mean: ₹{avgMean.toFixed(1)} LPA</span>
          </div>
        </div>
      }
      defaultOpen={false}
    >
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart 
          data={trendData} 
          margin={{ 
            top: 10, 
            right: isMobile ? 10 : 30, 
            left: isMobile ? -15 : 0, 
            bottom: isMobile ? 10 : 20 
          }}
        >
          <defs>
            <linearGradient id="highestGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={1} />
              <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0.7} />
            </linearGradient>
            <linearGradient id="avgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART_COLORS.info} stopOpacity={1} />
              <stop offset="100%" stopColor={CHART_COLORS.info} stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fontSize: isMobile ? 8 : 10, fill: "#6b7280" }}
            angle={-45}
            textAnchor="end"
            height={isMobile ? 40 : 60}
            interval={isMobile ? 1 : 0}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
          />
          <YAxis
            unit=" LPA"
            tick={{ fontSize: isMobile ? 9 : 11, fill: "#6b7280" }}
            width={isMobile ? 50 : 60}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
            }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const d = payload[0].payload;
                return (
                  <div className={styles.tooltip}>
                    <p className={styles.tooltipYear}>{d.year}</p>
                    <div className={styles.tooltipContent}>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Highest Package:</span>
                        <span className={styles.tooltipValuePurple}>₹{d.highestPackage} LPA</span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Average Package:</span>
                        <span className={styles.tooltipValueBlue}>₹{d.averagePackage} LPA</span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Gap:</span>
                        <span className={styles.tooltipValue}>₹{(d.highestPackage - d.averagePackage).toFixed(1)} LPA</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend wrapperStyle={{ paddingTop: isMobile ? 10 : 20, fontSize: isMobile ? 10 : 12 }} />
          <Bar
            dataKey="highestPackage"
            name="Highest Package"
            fill="url(#highestGrad)"
            radius={[isMobile ? 4 : 6, isMobile ? 4 : 6, 0, 0]}
            onMouseEnter={(data) => setHoveredBar({ year: data.year, type: 'highest' })}
            onMouseLeave={() => setHoveredBar(null)}
          >
            {trendData.map((entry, index) => (
              <Cell
                key={`cell-highest-${index}`}
                opacity={hoveredBar === null || (hoveredBar.year === entry.year && hoveredBar.type === 'highest') ? 1 : 0.6}
                style={{ cursor: "pointer", transition: "all 0.3s" }}
              />
            ))}
          </Bar>
          <Bar
            dataKey="averagePackage"
            name="Average Package"
            fill="url(#avgGrad)"
            radius={[isMobile ? 4 : 6, isMobile ? 4 : 6, 0, 0]}
            onMouseEnter={(data) => setHoveredBar({ year: data.year, type: 'average' })}
            onMouseLeave={() => setHoveredBar(null)}
          >
            {trendData.map((entry, index) => (
              <Cell
                key={`cell-avg-${index}`}
                opacity={hoveredBar === null || (hoveredBar.year === entry.year && hoveredBar.type === 'average') ? 1 : 0.6}
                style={{ cursor: "pointer", transition: "all 0.3s" }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CollapsibleWrapper>
  );
};
