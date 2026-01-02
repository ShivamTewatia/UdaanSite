import styles from './placementHero.module.css';
import { TrendingUp, DollarSign, Target, Building2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeroSection = ({ onShowStats }) => {
  
  const navigate = useNavigate();

  const handleExplorePlacements = () => {
    if (typeof onShowStats === "function") {
      onShowStats();
    }
  };

  const stats = [
    { icon: TrendingUp, number: '91%', label: 'Placement Rate', color: 'blue' },
    { icon: DollarSign, number: '47 LPA', label: 'Highest Package', color: 'pink' },
    { icon: Target, number: '780+', label: 'Offers Made', color: 'purple' },
    { icon: Building2, number: '500+', label: 'Top Recruiters', color: 'orange' }
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroPattern}></div>
        <div className={styles.heroGradient}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>🎓</span>
            <span>Training & Placement Cell</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Shaping Futures Through
            <span className={styles.titleHighlight}> Excellence</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            J.C. Bose University of Science and Technology, YMCA, Faridabad
          </p>
          
          <p className={styles.heroDescription}>
            Empowering students with industry-ready skills and connecting them with 
            world-class opportunities to build successful careers
          </p>
          
          <div className={styles.heroButtons}>
            <button 
            className={styles.primaryButton}
            onClick={onShowStats}
            >
              Explore Placements
            </button>
            <button 
            className={styles.secondaryButton}
            onClick={() => navigate("/about")} 
            >
              About Us
              <span className={styles.arrowIcon}>→</span>
            </button>
          </div>

          {/* <div className={styles.heroStats}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
                  <div className={styles.statIcon}>
                    <IconComponent size={40} strokeWidth={2.5} />
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>

      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
