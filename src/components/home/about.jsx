
import { School, Building2, Briefcase, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import styles from "./about.module.css";

const About = () => {
  const features = [
    { icon: School, title: "Academic Excellence", description: "NAAC A+ accredited institution with world-class faculty and cutting-edge curriculum", color: "purple" },
    { icon: Building2, title: "Modern Infrastructure", description: "State of the art facilities, labs, and learning resources for comprehensive education", color: "cyan" },
    { icon: Briefcase, title: "Industry Connect", description: "Strong partnerships with leading companies ensuring maximum placement opportunities", color: "orange" },
    { icon: TrendingUp, title: "Proven Track Record", description: "25+ years of excellence in education with thousands of successful alumni worldwide", color: "pink" }
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "15000+", label: "Alumni Network" },
    { number: "100+", label: "Faculty Members" },
    { number: "50+", label: "Specialized Labs" }
  ];

  const reasons = [
    { icon: Users, title: "500+ Recruiters", description: "Top companies from various industries recruit our students", color: "purple" },
    { icon: TrendingUp, title: "87% Placement Record", description: "Exceptional placement success rate year after year", color: "cyan" },
    { icon: Award, title: "Highest Package: 60 LPA", description: "Outstanding packages secured by our talented students", color: "orange" },
    { icon: Briefcase, title: "Industry Collaborations", description: "Partnerships with leading companies and organisations", color: "green" },
    { icon: School, title: "NAAC A+ Accredited", description: "Recognized for academic excellence and quality education", color: "pink" }
  ];

  return (
    <article className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <div className={styles["about-grid"]}>
          <div className={styles["about-text"]}>
            <h2 className={styles["about-heading"]}>
              About JC Bose University of Science & Technology
            </h2>
            <p className={styles["about-paragraph"]}>
              Established with a vision to provide world-class technical education, JC Bose University of Science & Technology, Faridabad stands as a beacon of excellence in higher education. Our commitment to academic rigor, industry relevance, and holistic development has made us a preferred destination for aspiring engineers and technologists.
            </p>
            <p className={styles["about-paragraph"]}>
              With a strong focus on placements and career development, our Training & Placement Cell works tirelessly to bridge the gap between academia and industry, ensuring that every student gets the opportunity to build a successful career with leading organization worldwide.
            </p>
            <button 
            className={styles["btn-gradient"]}
            onClick={() => window.open("https://jcboseust.ac.in", "_blank")}
            >
              Learn More About The University
              <ArrowRight className={styles["btn-arrow"]} />
            </button>
          </div>

          <div className={styles["features-grid"]}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles["feature-card"]} ${styles[`feature-${feature.color}`]}`}
              >
                <div className={styles["feature-overlay"]} />
                <div className={`${styles["feature-icon-wrapper"]} ${styles[`icon-${feature.color}`]}`}>
                  <feature.icon className={styles["feature-icon"]} />
                </div>
                <h3 className={styles["feature-title"]}>
                  {feature.title}
                </h3>
                <p className={styles["feature-description"]}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["stats-grid"]}>
          {stats.map((stat, index) => (
            <div key={index} className={styles["stat-card"]}>
              <p className={styles["stat-number"]}>
                {stat.number}
              </p>
              <p className={styles["stat-label"]}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className={styles["reasons-section"]}>
          <div className={styles["reasons-header"]}>
            <h1 className={styles["reasons-heading"]}>
              Why Choose JC Bose University?
            </h1>
            <p className={styles["reasons-subheading"]}>
              Discover what makes us the preferred choice...
            </p>
          </div>

          <div className={styles["reasons-grid"]}>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`${styles["reason-card"]} ${styles[`reason-${reason.color}`]}`}
              >
                <div className={styles["reason-glow"]} />
                <div className={styles["reason-content"]}>
                  <div className={`${styles["reason-icon-wrapper"]} ${styles[`icon-${reason.color}`]}`}>
                    <reason.icon className={styles["reason-icon"]} />
                  </div>
                  <h3 className={styles["reason-title"]}>
                    {reason.title}
                  </h3>
                  <p className={styles["reason-description"]}>
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
