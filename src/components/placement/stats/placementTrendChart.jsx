// import { useState, useEffect } from "react";
// import {
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
// } from "recharts";
// import { LineChart } from "lucide-react";
// import { getYearlyTrends, CHART_COLORS } from "./placementData";
// import { CollapsibleWrapper } from "./collapsableSection";
// import styles from "./placementTrendChart.module.css";

// export const PlacementTrendChart = () => {
//   const [showAvgLine, setShowAvgLine] = useState(false);
//   const [chartHeight, setChartHeight] = useState(360);
//   const trendData = getYearlyTrends();
//   const avgPlacement = trendData.reduce((sum, d) => sum + d.placementRate, 0) / trendData.length;

//   useEffect(() => {
//     const updateHeight = () => {
//       const width = window.innerWidth;
//       if (width <= 468) {
//         setChartHeight(220);
//       } else if (width <= 768) {
//         setChartHeight(280);
//       } else {
//         setChartHeight(360);
//       }
//     };

//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   return (
//     <CollapsibleWrapper
//       icon={LineChart}
//       title="Year-over-Year Placement Trends"
//       subtitle="10-year placement rate evolution"
//       actions={
//         <button 
//           className={styles.toggleBtn}
//           onClick={() => setShowAvgLine(!showAvgLine)}
//         >
//           {showAvgLine ? "Hide" : "Show"} Avg Line
//         </button>
//       }
//       defaultOpen={false}
//     >
//       <div className={styles.chartContainer}>
//         <ResponsiveContainer width="100%" height={chartHeight}>
//           <AreaChart 
//             data={trendData} 
//             margin={{ 
//               top: 10, 
//               right: window.innerWidth <= 468 ? 10 : 30, 
//               left: window.innerWidth <= 468 ? -15 : 0, 
//               bottom: 0 
//             }}
//           >
//             <defs>
//               <linearGradient id="colorPlacement" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.4} />
//                 <stop offset="50%" stopColor={CHART_COLORS.primary} stopOpacity={0.15} />
//                 <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
//             <XAxis 
//               dataKey="year" 
//               tick={{ fontSize: window.innerWidth <= 468 ? 9 : 11, fill: "#6b7280" }} 
//               axisLine={{ stroke: "#e5e7eb" }}
//               tickLine={false}
//               interval={window.innerWidth <= 468 ? 1 : 0}
//             />
//             <YAxis 
//               unit="%" 
//               domain={[40, 100]} 
//               tick={{ fontSize: window.innerWidth <= 468 ? 9 : 11, fill: "#6b7280" }}
//               axisLine={{ stroke: "#e5e7eb" }}
//               tickLine={false}
//               width={window.innerWidth <= 468 ? 35 : 45}
//             />
//             {showAvgLine && (
//               <ReferenceLine 
//                 y={avgPlacement} 
//                 stroke={CHART_COLORS.primary} 
//                 strokeDasharray="5 5"
//                 label={{ 
//                   value: `Avg: ${Math.round(avgPlacement)}%`, 
//                   position: "right", 
//                   fill: CHART_COLORS.primary, 
//                   fontSize: window.innerWidth <= 468 ? 9 : 11 
//                 }}
//               />
//             )}
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "rgba(255, 255, 255, 0.98)",
//                 border: "1px solid #e5e7eb",
//                 borderRadius: "12px",
//                 boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
//               }}
//               content={({ active, payload }) => {
//                 if (active && payload && payload.length) {
//                   const d = payload[0].payload;
//                   return (
//                     <div className={styles.tooltip}>
//                       <p className={styles.tooltipYear}>{d.year}</p>
//                       <div className={styles.tooltipGrid}>
//                         <span className={styles.tooltipLabel}>Placement:</span>
//                         <span className={styles.tooltipValuePrimary}>{d.placementRate}%</span>
//                         <span className={styles.tooltipLabel}>Offers:</span>
//                         <span className={styles.tooltipValue}>{d.totalOffers}</span>
//                         <span className={styles.tooltipLabel}>Max Package:</span>
//                         <span className={styles.tooltipValue}>₹{d.highestPackage} LPA</span>
//                       </div>
//                     </div>
//                   );
//                 }
//                 return null;
//               }}
//             />
//             <Area
//               type="monotone"
//               dataKey="placementRate"
//               stroke={CHART_COLORS.primary}
//               strokeWidth={window.innerWidth <= 468 ? 2 : 3}
//               fill="url(#colorPlacement)"
//               dot={{ 
//                 r: window.innerWidth <= 468 ? 3 : 5, 
//                 fill: CHART_COLORS.primary, 
//                 stroke: "white", 
//                 strokeWidth: 2 
//               }}
//               activeDot={{ 
//                 r: window.innerWidth <= 468 ? 5 : 8, 
//                 fill: CHART_COLORS.primary, 
//                 stroke: "white", 
//                 strokeWidth: window.innerWidth <= 468 ? 2 : 3 
//               }}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </CollapsibleWrapper>
//   );
// };
import { useState, useEffect } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from "recharts";
import { LineChart } from "lucide-react";
import { getYearlyTrends, CHART_COLORS } from "./placementData";
import { CollapsibleWrapper } from "./collapsableSection";
import styles from "./placementTrendChart.module.css";

export const PlacementTrendChart = () => {
  const [showAvgLine, setShowAvgLine] = useState(false);
  const [chartHeight, setChartHeight] = useState(360);
  const [isMobile, setIsMobile] = useState(false);

  const trendData = getYearlyTrends();
  const avgPlacement = trendData.reduce((sum, d) => sum + d.placementRate, 0) / trendData.length;

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width <= 468) {
        setChartHeight(220);
        setIsMobile(true);
      } else if (width <= 768) {
        setChartHeight(280);
        setIsMobile(false);
      } else {
        setChartHeight(360);
        setIsMobile(false);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <CollapsibleWrapper
      icon={LineChart}
      title="Year-over-Year Placement Trends"
      subtitle="10-year placement rate evolution"
      actions={
        <button 
          className={styles.toggleBtn}
          onClick={(e) => {
            e.stopPropagation();
            setShowAvgLine(!showAvgLine);
          }}
        >
          {showAvgLine ? "Hide" : "Show"} Avg Line
        </button>
      }
      defaultOpen={true}
    >
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={chartHeight}>
          <AreaChart 
            data={trendData} 
            margin={{ 
              top: 10, 
              right: isMobile ? 5 : 30, 
              left: isMobile ? -5 : 0, 
              bottom: 0 
            }}
          >
            <defs>
              <linearGradient id="colorPlacement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.4} />
                <stop offset="50%" stopColor={CHART_COLORS.primary} stopOpacity={0.15} />
                <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis 
              dataKey="year" 
              tick={{ fontSize: isMobile ? 9 : 11, fill: "#6b7280" }} 
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
              interval={isMobile ? 1 : 0}
            />
            <YAxis 
              unit="%" 
              domain={[40, 100]} 
              tick={{ fontSize: isMobile ? 9 : 11, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb" }}
              tickLine={false}
              width={isMobile ? 35 : 45}
            />
            {showAvgLine && (
              <ReferenceLine 
                y={avgPlacement} 
                stroke={CHART_COLORS.primary} 
                strokeDasharray="5 5"
                label={{ 
                  value: `Avg: ${Math.round(avgPlacement)}%`, 
                  position: "right", 
                  fill: CHART_COLORS.primary, 
                  fontSize: isMobile ? 9 : 11 
                }}
              />
            )}
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
                      <div className={styles.tooltipGrid}>
                        <span className={styles.tooltipLabel}>Placement:</span>
                        <span className={styles.tooltipValuePrimary}>{d.placementRate}%</span>
                        <span className={styles.tooltipLabel}>Offers:</span>
                        <span className={styles.tooltipValue}>{d.totalOffers}</span>
                        <span className={styles.tooltipLabel}>Max Package:</span>
                        <span className={styles.tooltipValue}>₹{d.highestPackage} LPA</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="placementRate"
              stroke={CHART_COLORS.primary}
              strokeWidth={isMobile ? 2 : 3}
              fill="url(#colorPlacement)"
              dot={{ 
                r: isMobile ? 3 : 5, 
                fill: CHART_COLORS.primary, 
                stroke: "white", 
                strokeWidth: 2 
              }}
              activeDot={{ 
                r: isMobile ? 5 : 8, 
                fill: CHART_COLORS.primary, 
                stroke: "white", 
                strokeWidth: isMobile ? 2 : 3 
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CollapsibleWrapper>
  );
};
