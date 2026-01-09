import { IndianRupee, Users, Building, TrendingUp, Clock, Headphones } from "lucide-react";
import styles from "./placement.module.css";

const Placement = () => {
  const mainStats = [
    {
      icon: IndianRupee,
      value: "60 LPA",
      title: "Highest Package",
      description: "Record-breaking placement packages",
      gradient: "Orange"
    },
    {
      icon: IndianRupee,
      value: "9.53 LPA",
      title: "Average Package",
      description: "Strong average compensation",
      gradient: "Purple"
    },
    {
      icon: Users,
      value: "4500+",
      title: "Students Placed",
      description: "Successfully placed in this decade",
      gradient: "Cyan"
    },
    {
      icon: Building,
      value: "500+",
      title: "Company Visits",
      description: "Companies participated in recruitment",
      gradient: "Pink"
    }
  ];

  const highlights = [
    {
      icon: TrendingUp,
      value: "100%",
      description: "Eligible Students Get Opportunities",
      gradient: "emerald"
    },
    {
      icon: Clock,
      value: "6 Months",
      description: "Pre-Placement Training",
      gradient: "violet"
    },
    {
      icon: Headphones,
      value: "24/7",
      description: "Career Guidance Support",
      gradient: "amber"
    }
  ];

  return (
    <section className={styles.placementContainer}>
      <div className={`${styles.placementOrb} ${styles.orb1}`} />
      <div className={`${styles.placementOrb} ${styles.orb2}`} />
      
      <div className={styles.placementContent}>
        <div className={styles.placementHeader}>
          <h2 className={styles.placementHeading}>
            Placement Statistics
          </h2>
          <p className={styles.placementSubheading}>
            Our numbers speak for themselves - excellence in education leading to exceptional career outcomes
          </p>
        </div>

        <div className={styles.mainStatsGrid}>
          {mainStats.map((stat, index) => (
            <div key={index} className={`${styles.statCardMain} ${styles[`stat${stat.gradient}`]}`}>
              <div className={styles.statOverlay} />
              
              <div className={styles.statContent}>
                <div className={`${styles.statIconWrapper} ${styles[`icon${stat.gradient}`]}`}>
                  <stat.icon className={styles.statIcon} />
                </div>
                
                <h2 className={styles.statValue}>
                  {stat.value}
                </h2>
                
                <h3 className={styles.statTitle}>
                  {stat.title}
                </h3>
                
                <p className={styles.statDescription}>
                  {stat.description}
                </p>
              </div>

              <div className={styles.statGlow} />
            </div>
          ))}
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.highlightCard}>
              <div className={styles.highlightContent}>
                <highlight.icon className={styles.highlightIcon} />
                
                <div>
                  <h3 className={styles.highlightValue}>
                    {highlight.value}
                  </h3>
                  
                  <p className={styles.highlightDescription}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.placementWave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Placement;


