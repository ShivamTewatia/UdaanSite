import { School, Building2, Briefcase, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import styles from "./about.module.css";

const About = () => {
  const features = [
    { icon: School, title: "Academic Excellence", description: "NAAC A+ accredited institution with world-class faculty and cutting-edge curriculum", color: "Purple" },
    { icon: Building2, title: "Modern Infrastructure", description: "State of the art facilities, labs, and learning resources for comprehensive education", color: "Cyan" },
    { icon: Briefcase, title: "Industry Connect", description: "Strong partnerships with leading companies ensuring maximum placement opportunities", color: "Orange" },
    { icon: TrendingUp, title: "Proven Track Record", description: "25+ years of excellence in education with thousands of successful alumni worldwide", color: "Pink" },
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "15000+", label: "Alumni Network" },
    { number: "100+", label: "Faculty Members" },
    { number: "50+", label: "Specialized Labs" },
  ];

  const reasons = [
    { icon: Users, title: "500+ Recruiters", description: "Top companies from various industries recruit our students", color: "Purple" },
    { icon: TrendingUp, title: "87% Placement Record", description: "Exceptional placement success rate year after year", color: "Cyan" },
    { icon: Award, title: "Highest Package: 60 LPA", description: "Outstanding packages secured by our talented students", color: "Orange" },
    { icon: Briefcase, title: "Industry Collaborations", description: "Partnerships with leading companies and organisations", color: "Green" },
    { icon: School, title: "NAAC A+ Accredited", description: "Recognized for academic excellence and quality education", color: "Pink" },
  ];

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        {/* Hero Section */}
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutHeading}>
              About <span>JC Bose University</span> of Science & Technology
            </h2>

            <p className={styles.Paragraph}>
              A Haryana State Government University <br />
              (Established by Haryana State Legislative Act No. 21 of 2009 & Recognized by UGC Act 1956 u/s 22 to Confer Degrees) <br />
              Accredited <strong>A+</strong> Grade by NAAC
            </p>

            <p className={styles.aboutParagraph}>
              Established with a vision to provide world-class technical education, JC Bose University of Science & Technology, Faridabad stands as a beacon of excellence in higher education. Our commitment to academic rigor, industry relevance, and holistic development has made us a preferred destination for aspiring engineers and technologists.
            </p>

            <p className={styles.aboutParagraph}>
              With a strong focus on placements and career development, our Training & Placement Cell works tirelessly to bridge the gap between academia and industry, ensuring that every student gets the opportunity to build a successful career with leading organizations worldwide.
            </p>
            <button
              className={styles.btnGradient}
              onClick={() => window.open("https://jcboseust.ac.in", "_blank")}
            >
              Learn More About The University
              <ArrowRight className={styles.btnArrow} />
            </button>
          </div>

          {/* Feature Cards */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${styles[`feature${feature.color}`]}`}
              >
                <div className={styles.featureOverlay} />
                <div className={`${styles.featureIconWrapper} ${styles[`icon${feature.color}`]}`}>
                  <feature.icon className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className={styles.reasonsSection}>
          <div className={styles.reasonsHeader}>
            <h2 className={styles.reasonsHeading}>Why Choose JC Bose University?</h2>
            <p className={styles.reasonsSubheading}>
              Discover what makes us the preferred choice for aspiring professionals
            </p>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`${styles.reasonCard} ${styles[`reason${reason.color}`]}`}
              >
                <div className={styles.reasonGlow} />
                <div className={styles.reasonContent}>
                  <div className={`${styles.reasonIconWrapper} ${styles[`icon${reason.color}`]}`}>
                    <reason.icon className={styles.reasonIcon} />
                  </div>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDescription}>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
