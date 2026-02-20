import { IndianRupee, Users, Building, TrendingUp, Clock, Headphones } from "lucide-react";
import styles from "./placement.module.css";

const Placement = () => {
  const mainStats = [
    {
      icon: IndianRupee,
      value: "60 LPA",
      title: "Highest Package",
      description: "Record-breaking placement packages",
      gradient: "Orange",
    },
    {
      icon: IndianRupee,
      value: "9.53 LPA",
      title: "Average Package",
      description: "Strong average compensation",
      gradient: "Purple",
    },
    {
      icon: Users,
      value: "4500+",
      title: "Students Placed",
      description: "Successfully placed in this decade",
      gradient: "Cyan",
    },
    {
      icon: Building,
      value: "500+",
      title: "Company Visits",
      description: "Companies participated in recruitment",
      gradient: "Pink",
    },
  ];

  const highlights = [
    {
      icon: TrendingUp,
      value: "100%",
      description: "Eligible Students Get Opportunities",
    },
    {
      icon: Clock,
      value: "6 Months",
      description: "Pre-Placement Training",
    },
    {
      icon: Headphones,
      value: "24/7",
      description: "Career Guidance Support",
    },
  ];

  return (
    <div className={styles.placementContainer}>
      <div className={styles.placementContent}>
        <div className={styles.placementHeader}>
          <h2 className={styles.placementHeading}>
            Placement{" "}
            <span className={styles.headingAccent}>Statistics</span>
          </h2>
          <p className={styles.placementSubheading}>
            Our numbers speak for themselves — excellence in education leading to exceptional career outcomes
          </p>
        </div>

        <div className={styles.mainStatsGrid}>
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statCardMain} ${styles[`stat${stat.gradient}`]}`}
            >
              <div className={styles.statContent}>
                <div className={`${styles.statIconWrapper} ${styles[`icon${stat.gradient}`]}`}>
                  <stat.icon className={styles.statIcon} />
                </div>
                <p className={styles.statValue}>{stat.value}</p>
                <h3 className={styles.statTitle}>{stat.title}</h3>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((highlight, index) => (
            <div key={index} className={styles.highlightCard}>
              <div className={styles.highlightContent}>
                <highlight.icon className={styles.highlightIcon} />
                <p className={styles.highlightValue}>{highlight.value}</p>
                <p className={styles.highlightDescription}>{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.placementWave}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="#f1f5f9" />
        </svg>
      </div>
    </div>
  );
};

export default Placement;
