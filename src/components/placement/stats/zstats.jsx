import { useState, useMemo } from "react";
import { Users, Briefcase, TrendingUp, TrendingDown, Award, Target, GraduationCap, Zap, Calendar , BarChart3, Building2} from "lucide-react";
import { placementData, getYearlyTrends, getDecadeStats, CHART_COLORS } from "./placementData.js";
import { HeroSection } from "./heroSection.jsx";
import { HighlightCard } from "./highlightCard.jsx";
import { InsightCard } from "./insightCard.jsx";
import { StatCard } from "./statCard.jsx";
import { YearSelector } from "./yearSelector.jsx";
import { TopPerformers } from "./topPerformers.jsx";
import { PlacementTrendChart } from "./placementTrendChart.jsx";
import { PackageTrendChart } from "./packageTrendChart.jsx";
import { DepartmentBarChart } from "./departmentBarChart.jsx";
import { RadarChartSection } from "./radarChartSection.jsx";
import { DepartmentTrendChart } from "./departmentTrendChart.jsx";
import { PlacementTable } from "./placementTable.jsx";
import styles from "./zstats.module.css";
import { useHashScroll } from "../../hooks/useHashScroll.js"

const Statistics = () => {
  useHashScroll(); 

  const years = placementData.map(d => d.year);
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
  const currentYearData = placementData.find(d => d.year === selectedYear);
  
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
    { icon: Building2, title: "Total Placements", value: "3,180", subtitle: "Over 10 years", variant: "primary" },
    { icon: Award, title: "Highest Package", value: "₹60 LPA", subtitle: "Peak achievement", variant: "secondary" },
    { icon: Target, title: "Avg. Placement Rate", value: "75%", subtitle: "Decade average", variant: "success" },
    { icon: Users, title: "Students Trained", value: "4,221", subtitle: "Career-ready graduates", variant: "info" },
  ];

  return (
    <div className={styles.container} id="stats-top">
      <HeroSection />


      <div className={styles.content}>
        <div className={styles.extra}>
            <section className={styles.section}>
            <div className={styles.heading}>
              <span className={styles.icon}>
                <BarChart3 size={32} strokeWidth={2} />
              </span>
              <h1 className={styles.sectionTitle}>
                10-Year Overview
                
              </h1>
              
            </div>
            <div className={styles.highlightGrid}>
              {highlightCards.map((card, index) => (
                <HighlightCard key={card.title} {...card} delay={index * 100} />
              ))}
            </div>

            <div className={styles.insightsGrid}>
              <InsightCard
                icon={insights.placementChange >= 0 ? TrendingUp : TrendingDown}
                label="Placement Change"
                value={`${insights.placementChange >= 0 ? '+' : ''}${insights.placementChange}%`}
                variant="positive"
              />
              <InsightCard
                icon={Zap}
                label="Package Growth"
                value={`${insights.packageChange >= 0 ? '+' : ''}${Math.round(insights.packageChange)}%`}
                variant="negative"
              />
              <InsightCard
                icon={Calendar}
                label="Best Year"
                value={insights.bestYear.year}
                subValue={`${insights.bestYear.placementRate}% placed`}
                variant="neutral"
              />
              <InsightCard
                icon={Calendar}
                label="Challenging Year"
                value={insights.worstYear.year}
                subValue={`${insights.worstYear.placementRate}% placed`}
                variant="info"
              />
            </div>
          </section>
        </div>
        
        <div className={styles.chartsGrid}>
          <PlacementTrendChart />
          <PackageTrendChart />
        </div>

        <div className={styles.chartsGrid}>
          <TopPerformers />
          <DepartmentTrendChart />
        </div>

        <YearSelector years={years} selectedYear={selectedYear} onYearChange={setSelectedYear} />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Placement Data Of Session {selectedYear} </h2>
          
          <div className={styles.statsGrid}>
         
          <StatCard
            icon={Users}
            title="Total Students"
            value={currentYearData.totals.eligibleStudents}
            description="Eligible for placement"
            variant="accent" 
            color={CHART_COLORS.primary}
            delay={0}
          />
          

          <StatCard
            icon={Briefcase}
            title="Placed Students"
            value={currentYearData.totals.offers}
            description="Received offers"
            variant="info"  
            color={CHART_COLORS.info}
            delay={100}
          />
          

          <StatCard
            icon={Target}
            title="Placement Rate"
            value={currentYearData.totals.placementPercent}
            suffix="%"
            description="Overall success rate"
            variant="success" 
            color={CHART_COLORS.success}
            delay={200}
          />

          <StatCard
            icon={Award}
            title="Highest Package"
            value={`₹${currentYearData.totals.highestPackage}`}
            suffix="LPA"
            description="Best offer received"
            variant="secondary"  
            color={CHART_COLORS.secondary}
            delay={300}
          />
          
          
          <StatCard
            icon={TrendingUp}
            title="Average Package"
            value={`₹${currentYearData.totals.averagePackage}`}
            suffix="LPA"
            description="Mean compensation"
            variant="primary"  
            color={CHART_COLORS.accent}
            delay={400}
          />
          
          
          <StatCard
            icon={GraduationCap}
            title="Departments"
            value={currentYearData.courses.length}
            description="Active departments"
            variant="info"  
            color={CHART_COLORS.info}
            delay={500}
          />
        </div>
        </section>

        <div className={styles.chartsGrid}>
          <DepartmentBarChart courses={currentYearData.courses} />
          <RadarChartSection courses={currentYearData.courses} />
        </div>

        <PlacementTable courses={currentYearData.courses} />
      </div>
    </div>
  );
};

export default Statistics;
