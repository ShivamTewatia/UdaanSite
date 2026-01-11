import { useState } from "react";
import {
  ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import {
  Building
} from "lucide-react"
import { placementData, DEPT_COLORS } from "./placementData";
// import { ChartCard } from "./chartCard";
import styles from "./departmentTrendChart.module.css";
import {CollapsibleWrapper} from "./collapsableSection";

const departments = ["CE", "IT", "ECE", "EIC", "EL", "Mech."];

const getDeptTrends = () => {
  return departments.map(dept => {
    const yearlyData = placementData.map(year => {
      const courseData = year.courses.find(c => c.course.includes(dept));
      return {
        year: year.year,
        placementPercent: courseData?.placementPercent || 0,
      };
    });
    return { department: dept, data: yearlyData };
  });
};

export const DepartmentTrendChart = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const deptTrends = getDeptTrends();

  const chartData = deptTrends[0].data.map((_, index) => {
    const yearData = { year: deptTrends[0].data[index].year };
    deptTrends.forEach(dept => {
      yearData[dept.department] = dept.data[index].placementPercent;
    });
    return yearData;
  });

  return (
    <CollapsibleWrapper
      icon={Building}
      title="Department Performance Over Time"
      subtitle="Track each department's placement journey"
      defaultOpen:False
    >
      <div className={styles.chipContainer}>
        <button
          onClick={() => setSelectedDept(null)}
          className={`${styles.chip} ${selectedDept === null ? styles.chipActive : ""}`}
          style={selectedDept === null ? { background: "hsl(258 90% 66%)", color: "white" } : {}}
        >
          All Departments
        </button>
        {departments.map(dept => (
          <button
            key={dept}
            onClick={() => setSelectedDept(selectedDept === dept ? null : dept)}
            className={`${styles.chip} ${selectedDept === dept ? styles.chipActive : ""}`}
            style={selectedDept === dept ? { background: DEPT_COLORS[dept].primary, color: "white" } : {}}
          >
            {dept}
          </button>
        ))}
      </div>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={360}>
          <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="year" 
              tick={{ fontSize: 11, fill: "#6b7280" }}
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
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
              }}
            />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            {departments.map(dept => (
              <Line
                key={dept}
                type="monotone"
                dataKey={dept}
                name={`${dept} Placement`}
                stroke={DEPT_COLORS[dept].primary}
                strokeWidth={selectedDept === null || selectedDept === dept ? 2.5 : 1}
                dot={{ r: 4, fill: DEPT_COLORS[dept].primary }}
                activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
                opacity={selectedDept === null || selectedDept === dept ? 1 : 0.2}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </CollapsibleWrapper>
  );
};
