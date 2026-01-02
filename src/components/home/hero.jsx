import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import udnLogo from "/images/home/udnLogo.jpeg";
import clgGate from "/images/home/clg.png";
import styles from "./heroHome.module.css";
import { useHashScroll } from "../hooks/useHashScroll"

const Hero = () => {
  useHashScroll();
  const navigate = useNavigate();

  return (
    <header id="home" className={styles.heroContainer}>
      <div 
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${clgGate})` }}
      >
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <div className={styles.logoContainer}>
            <img 
              src={udnLogo} 
              alt="U.D.A.A.N Logo" 
              className={styles.logoImage}
            />
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.mainTitle}>
              Training And Placement Cell
            </h1>
            <h2 className={styles.subTitle}>
              JC BOSE UNIVERSITY, YMCA FARIDABAD
            </h2>
          </div>
        </div>

        <div className={styles.heroTagline}>
          <h3 className={styles.taglineText}>
            Empowering Students,
          </h3>
          <h3 className={styles.taglineGradient}>
            Connecting Futures
          </h3>
        </div>

        <p className={styles.heroDescription}>
          Training And Placement Cell - Guiding you from classroom to corporate excellence.
        </p>

        <div className={styles.heroButtons}>
          <button 
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => navigate("/placement")} 
            >
              Explore Placements
          </button>
          <button 
          className={`${styles.btn} ${styles.btnOutline}`}
          onClick={() => navigate("/about")} 
          >
            About Us
            <ChevronRight className={styles.btnIcon} />
          </button>
        </div>

        <div className={`${styles.floatingOrb} ${styles.orb1}`} />
        <div className={`${styles.floatingOrb} ${styles.orb2}`} />
        <div className={`${styles.floatingOrb} ${styles.orb3}`} />
      </div>

      <div className={styles.heroWave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
