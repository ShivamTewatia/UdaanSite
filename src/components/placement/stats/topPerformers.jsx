import { useState } from "react";
import { Trophy, Sparkles, TrendingUp, Crown, Medal, Award } from "lucide-react";
import { getTopPerformers } from "./placementData";
import styles from "./topPerformers.module.css";

const tabs = [
  { id: "placement", label: "Top Placement", icon: Trophy },
  { id: "package", label: "Highest Package", icon: Sparkles },
  { id: "average", label: "Best Average", icon: TrendingUp },
];

export const TopPerformers = () => {
  const [activeTab, setActiveTab] = useState("placement");
  const { topByPlacement, topByPackage, topByAverage } = getTopPerformers();

  const performers = activeTab === "placement" ? topByPlacement : activeTab === "package" ? topByPackage : topByAverage;

  const getValue = (item) => {
    switch (activeTab) {
      case "placement": return `${item.placementPercent}%`;
      case "package": return `₹${item.highestPackage} LPA`;
      case "average": return `₹${item.averagePackage} LPA`;
    }
  };

  const getMedalIcon = (index) => {
    switch (index) {
      case 0: return <Crown size={20} />;
      case 1: return <Medal size={20} />;
      case 2: return <Award size={20} />;
      default: return <span className={styles.rankNum}>#{index + 1}</span>;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardGlow} />
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.iconBadge}>
            <Trophy size={42} strokeWidth={1.8} />
          </div>
          <div>
            <h3 className={styles.title}>Top Performers</h3>
            <p className={styles.subtitle}>10 Year History</p>
          </div>
        </div>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
            >
              <tab.icon size={14} />
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.list}>
        {performers.map((item, index) => (
          <div 
            key={`${item.course}-${item.year}-${activeTab}`} 
            className={styles.item}
            data-rank={index}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className={styles.itemInner}>
              <div className={`${styles.medal} ${styles[`medal${index}`]}`}>
                {getMedalIcon(index)}
              </div>
              <div className={styles.info}>
                <p className={styles.courseName}>{item.course}</p>
                <p className={styles.year}>{item.year}</p>
              </div>
              <div className={`${styles.valueBadge} ${styles[`value${index}`]}`}>
                <span className={styles.valueText}>{getValue(item)}</span>
              </div>
            </div>
            <div className={styles.itemHoverBg} />
          </div>
        ))}
      </div>
    </div>
  );
};

