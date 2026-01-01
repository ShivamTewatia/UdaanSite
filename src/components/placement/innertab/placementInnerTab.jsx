import styles from './placementInnerTab.module.css';
import { FileText, BookOpen, Users, BarChart3, Building } from 'lucide-react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { 
      id: 'procedure', 
      icon: FileText, 
      title: 'Procedure', 
      subtitle: 'Guidelines & Process' 
    },
    { 
      id: 'rules-training', 
      icon: BookOpen, 
      title: 'Rules & Training', 
      subtitle: 'Policies & Internship' 
    },
    { 
      id: 'duties', 
      icon: Users, 
      title: 'Duties', 
      subtitle: 'Roles & Committees' 
    },
    { 
      id: 'stats', 
      icon: BarChart3, 
      title: 'Statistics', 
      subtitle: 'Placement Data' 
    },
    { 
      id: 'recruiters', 
      icon: Building, 
      title: 'Recruiters', 
      subtitle: 'Our Partners' 
    },
  ];

  return (
    <nav className={styles.tabNavigation}>
      <div className={styles.tabContainer}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <div className={styles.tabIcon}>
                <IconComponent size={28} strokeWidth={2.5} />
              </div>
              <div className={styles.tabText}>
                <div className={styles.tabTitle}>{tab.title}</div>
                <div className={styles.tabSubtitle}>{tab.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TabNavigation;
