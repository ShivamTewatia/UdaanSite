import { Quote, Linkedin, Instagram } from 'lucide-react';
import styles from './aboutFounder.module.css';
import { useHashScroll } from "../hooks/useHashScroll"

const AboutFounder = () => {
  useHashScroll();
  return (
    <section id='founder' className={styles['meet-founder-section']}>
      <div className={styles['founder-container']}>
        <div className={styles['founder-header']}>
          <Quote size={48} className={styles['quote-icon']} />
          <h2 className={styles['founder-title']}>Meet Our Founder</h2>
          <div className={styles['founder-underline']}></div>
        </div>

        <div className={styles['founder-content']}>
          <div className={styles['founder-image-wrapper']}>
            <div className={styles['founder-image-placeholder']}>
              <div className={styles['image-overlay']}><img src="/images/aboutUs/founder.jpeg" alt="founder" /></div>
            </div>
          </div>
          <div className={styles['founder-info']}>
            <blockquote className={styles['founder-quote']}>
              "Education is not just about imparting knowledge; it's about empowering dreams and transforming lives."
            </blockquote>
            <p className={styles['founder-name']}>- Pankaj Bhargava</p>
            <div className={styles['founder-details']}>
              <p className={styles['founder-bio']}>
                With a vision to bridge the gap between academic excellence and industry success, 
                our Training and Placement Cell was established to guide students from classroom 
                to corporate excellence. Our commitment to holistic development and career readiness 
                has transformed thousands of lives.
              </p>
              <div className={styles['founder-credentials']}>
                <p className={styles['founder-designation']}>Software Developement Engineer, Yamaha Motors(robotics division)</p>
              </div>
              <div className={styles['founder-social-links']}>
                <a href="https://www.instagram.com/pankajbhargv" className={`${styles['social-link']} ${styles['linkedin-link']}`} aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.linkedin.com/in/pankajbhargv/" className={`${styles['social-link']} ${styles['instagram-link']}`} aria-label="Instagram Profile">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

