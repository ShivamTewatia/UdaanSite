import { useState, useMemo } from "react";
import { Shield, Users, Briefcase, TrendingUp, TrendingDown, Award, Target, GraduationCap, Zap, Calendar , BarChart3, Building2} from "lucide-react";
import { placementData, getYearlyTrends, getDecadeStats, CHART_COLORS } from "./placementData.js";
import { placementDataTop } from "./placementDataTop.js";
import { HeroSection } from "./heroSection.jsx";
import { HighlightCard } from "./highlightCard.jsx";
import { InsightCard } from "./insightCard.jsx";
import { StatCard } from "./statCard.jsx";
import { YearSelector } from "./yearSelector.jsx";
import { OverallDonut3D } from "./Donut.jsx";
// import { PlacementTrendChart } from "./placementTrendChart.jsx";
import { DepartmentPieChart } from "./departmentPieChart.jsx";
import { DepartmentBarChart } from "./departmentBarChart.jsx";
import { FunnelChart3D } from "./radarChartSection.jsx";
import { PlacementChart3D } from "./departmentTrendChart.jsx";
import { PlacementTable } from "./placementTable.jsx";
import styles from "./zstats.module.css";
import { useHashScroll } from "../../hooks/useHashScroll.js"
import CollapsibleWrapper from "./collapsableSection.jsx";
// import { AnimatedNumber } from "./animatedDigit.jsx";

const Statistics = () => {
  useHashScroll(); 

  const years = placementData.map(d => d.year);
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
  const currentYearData = placementData.find(d => d.year === selectedYear);
  const [startYear, endYear] = selectedYear.split("-");

  const trendData = getYearlyTrends();
  const decadeStats = getDecadeStats();

  const insights = useMemo(() => {
    const first = trendData[0];
    const last = trendData[trendData.length - 1];
    const placementChange = last.placementRate - first.placementRate;
    const packageChange = ((last.averagePackage - first.averagePackage) / first.averagePackage) * 100;
    const bestYear = trendData.reduce((a, b) => a.placementRate > b.placementRate ? a : b);
    const worstYear = trendData.reduce((a, b) => a.placementRate < b.placementRate ? a : b);
    return { placementChange, packageChange, bestYear, worstYear };
  }, [trendData]);

   const highlightCards = [
    { icon: Building2, title: "Total Placements", value: "1200+", subtitle: "Over 2 years", variant: "info" },
    { icon: Award, title: "Highest Package", value: "₹62 LPA", subtitle: "Peak achievement", variant: "info" },
    { icon: Users, title: "Median Package", value: "₹10.25", subtitle: "Highest Median packing", variant: "info" },
    { icon: Target, title: "Avg. Placement Rate", value: "92%", subtitle: "2 Year average", variant: "info" },
    
  ];
  

  return (
    <div className={styles.container} id="stats-top">
      <HeroSection />
      <div className={styles.content}>
        <CollapsibleWrapper
          icon={BarChart3}
          title="2-Year Overview"
          defaultOpen={true}
        >
            <section className={styles.sectionTop}>
            <div className={styles.highlightGrid}>
              {highlightCards.map((card, index) => (
                <HighlightCard key={card.title} {...card} delay={index * 50} />
              ))}
            </div>

            <div className={styles.insightsGrid}>
              <InsightCard
                icon={Shield}
                label="Placement Stability"
                value="90%+"
                subValue={`Placement Rate`}
                variant="info"
              />
              <InsightCard
                icon={Zap}
                label="Placement Rate"
                value={`+2.55%`}
                subValue={`Year on Year`}
                variant="info"
              />
              <InsightCard
                icon={Building2}
                label="Recruiter Retention"
                value={`85%+`}
                subValue={`Returned`}
                variant="info"
              />
              <InsightCard
                icon={Building2}
                label="Recruiting Companies"
                value="500+"
                subValue="Across 2 Years"
                variant="info"
              />
            </div>
          </section>
        </CollapsibleWrapper> 
        
        <div className={styles.chartsGrid}>
          {/* <PlacementTrendChart /> */}
          <DepartmentPieChart/>
          <OverallDonut3D />
        </div>

        <div className={styles.chartsGrid}>
          
          <PlacementChart3D />
        </div>

        <YearSelector years={years} selectedYear={selectedYear} onYearChange={setSelectedYear} />
        <CollapsibleWrapper
          icon={BarChart3}
          title={
            <div>
              Placement Data Of Session{" "}
                {startYear}-{endYear}
            </div>
          }
          defaultOpen={true}
        >
        <section className={styles.sectionBot}>
          <h2 className={styles.sectionTitle}> </h2>
          
          <div className={styles.statsGrid}>
         
          <StatCard
            icon={Users}
            title="Total Students"
            value={currentYearData.totals.eligibleStudents}
            description="Eligible for placement"
            variant="info" 
            color={CHART_COLORS.info}
          />
          

          <StatCard
            icon={Briefcase}
            title="Placed Students"
            value={currentYearData.totals.placed}
            description="Received offers"
            variant="info"  
            color={CHART_COLORS.info}
          />
          

          <StatCard
            icon={Target}
            title="Placement Rate"
            value={currentYearData.totals.placementPercent}
            suffix="%"
            description="Overall success rate"
            variant="info" 
            color={CHART_COLORS.info}
          />

          <StatCard
            icon={Award}
            title="Highest Package"
            value={`₹${currentYearData.totals.highestPackage}`}
            suffix="LPA"
            description="Best offer received"
            variant="info"  
            color={CHART_COLORS.info}
          />
          
          
          <StatCard
            icon={TrendingUp}
            title="Average Package"
            value={`₹${currentYearData.totals.averagePackage}`}
            suffix="LPA"
            description="Mean compensation"
            variant="info"  
            color={CHART_COLORS.info}
          />
          
          
          <StatCard
            icon={GraduationCap}
            title="Departments"
            value={currentYearData.courses.length}
            description="Active departments"
            variant="info"  
            color={CHART_COLORS.info}
          />
        </div>
        </section>
        </CollapsibleWrapper>
        
        <div className={styles.chartsGrid}>
          <DepartmentBarChart courses={currentYearData.courses} year={currentYearData.year} />
          <FunnelChart3D courses={currentYearData.courses} year={currentYearData.year}/>
        </div>

        <PlacementTable  courses={currentYearData.courses} year={currentYearData.year}/>
      </div>
    </div>
  );
};

export default Statistics;
