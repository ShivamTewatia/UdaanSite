import styles from './aboutHero.module.css';
import {Sparkles } from "lucide-react";
import { useHashScroll } from "../hooks/useHashScroll"

const AboutHero = () => {
  useHashScroll(); 

  return (
    <section id='about' className={styles['hero-section']}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-content']}>
          <div className={styles['badge-container']}>
              <div className={styles['team-badge']}>
                <Sparkles />
                <span>About Udaan</span>
              </div>
          </div>
          <h1 className={styles['hero-title']}>
            <span className={styles['title-highlight']}>UDAAN</span>
          </h1>
          <p className={styles['hero-subtitle']}>The Training and Placement Cell</p>
          <p className={styles['hero-description']}>
            Bridging the gap between academic excellence and industry success, 
            empowering students to soar to new heights in their careers
          </p>
        </div>
      </div>
      
      <div className={styles['wave-divider']}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
