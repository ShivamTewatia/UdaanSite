import { BarChart3 } from "lucide-react";
import styles from "./heroSection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.badge}>PLACEMENT DATA</span>
        <h1 className={styles.title}>Placement Statistics</h1>
        <p className={styles.subtitle}>
          Comprehensive overview of campus placement performance, trends, and achievements across all departments
        </p>
      </div>
      <BarChart3 className={styles.iconLeft} />
      <BarChart3 className={styles.iconRight} />
    </section>
  );
};
