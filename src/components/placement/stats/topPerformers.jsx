import { useState, useEffect } from "react";
import { Trophy, Sparkles, TrendingUp, Crown, Medal, Award, ChevronDown } from "lucide-react";
import { getTopPerformers } from "./placementData";
import styles from "./topPerformers.module.css";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 468 : true);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 468);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isDesktop;
};

const tabs = [
  { id: "placement", label: "Top Placement", icon: Trophy },
  { id: "package", label: "Highest Package", icon: Sparkles },
  { id: "average", label: "Best Average", icon: TrendingUp },
];

export const TopPerformers = ({ defaultOpen = false }) => {
  const isDesktop = useIsDesktop();
  const [isOpen, setIsOpen] = useState(isDesktop ? true : defaultOpen);
  const [activeTab, setActiveTab] = useState("placement");
  const { topByPlacement, topByPackage, topByAverage } = getTopPerformers();

  useEffect(() => {
    setIsOpen(isDesktop ? true : defaultOpen);
  }, [isDesktop, defaultOpen]);

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

  const TabButtons = () => (
    <>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab(tab.id);
          }}
          className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
        >
          <tab.icon size={14} />
          <span className={styles.tabLabel}>{tab.label}</span>
        </button>
      ))}
    </>
  );

  return (
    <div className={styles.collapsibleSection}>
      <button 
        className={`${styles.collapsibleHeader} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.collapsibleHeaderLeft}>
          <div className={styles.collapsibleIcon}>
            <Trophy size={28} strokeWidth={1.5} />
          </div>
          <div className={styles.titleWrapper}>
            <h3 className={styles.collapsibleTitle}>Top Performers</h3>
            <p className={styles.collapsibleSubtitle}>10 Year History</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.tabsWrapperDesktop}>
            <TabButtons />
          </div>
          <div className={`${styles.collapsibleArrow} ${isOpen ? styles.rotated : ''}`}>
            <ChevronDown size={20} strokeWidth={2} />
          </div>
        </div>
      </button>
      <div className={`${styles.collapsibleContent} ${isOpen ? styles.expanded : ''}`}>
        <div className={styles.mobileActionsBar}>
          <div className={styles.tabsWrapperMobile}>
            <TabButtons />
          </div>
        </div>
        <div className={styles.collapsibleContentInner}>
          <div className={styles.cardGlow} />
          <div className={styles.list}>
            {performers.map((item, index) => (
              <div 
                key={`${item.course}-${item.year}-${activeTab}`} 
                className={styles.item}
                data-rank={index}
                style={{ animationDelay: `${index * 10}ms` }}
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
      </div>
    </div>
  );
};

export default TopPerformers;