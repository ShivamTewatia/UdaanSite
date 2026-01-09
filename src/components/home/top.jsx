import { useEffect, useRef, useState } from "react";
import { Building, Sparkles, Award } from "lucide-react";
import styles from "./top.module.css";


const TopRecruiters = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const companies = [
    { name: "Microsoft", logo: "/images/home/microsoft.png", color: "blue" },
    { name: "Accenture", logo: "/images/home/accenture.png", color: "purple" },
    { name: "Wipro", logo: "/images/home/wipro.png", color: "orange" },
    { name: "Google", logo: "/images/home/google.png", color: "multi" },
    { name: "IBM", logo: "/images/home/ibm.png", color: "darkblue" },
    { name: "Cognizant", logo: "/images/home/cognizant.png", color: "cyan" },
    { name: "HCL", logo: "/images/home/hcl.png", color: "lightblue" },
    { name: "TCS", logo: "/images/home/tcs.png", color: "indigo" },
    { name: "Flipkart", logo: "/images/home/flipkart.png", color: "yellow" },
    { name: "Infosys", logo: "/images/home/infosys.png", color: "blue2" },
    { name: "Adobe", logo: "/images/home/adobe.png", color: "red" }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused || !isVisible) return;

    let animationFrameId;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = window.innerWidth < 768 ? 0.25 : 0.5;


    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isVisible]);


  const stats = [
    { icon: Building, title: "Fortune 500", subtitle: "Companies" },
    { icon: Sparkles, title: "Startups", subtitle: "& Unicorns" },
    { icon: Award, title: "MNCs", subtitle: "& Global Firms" }
  ];

  return (
    <section className={styles.recruitersContainer}>
      <div className={`${styles.recruitersOrb} ${styles.orbLeft}`} />
      <div className={`${styles.recruitersOrb} ${styles.orbRight}`} />

      <div className={styles.recruitersContent}>
        <div className={styles.recruitersHeader}>
          <h1 className={styles.recruitersHeading}>
            Our Top Recruiters
          </h1>
          <p className={styles.recruitersSubheading}>
            Leading companies across the globe trust our graduates for their excellence and innovation
          </p>
        </div>

        <div
            className={styles.recruitersScrollWrapper}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) {
                setIsPaused(true);
              }
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(hover: hover)").matches) {
                setIsPaused(false);
              }
            }}
          >

          <div className={styles.recruitersScrollContainer}>
            <div ref={scrollRef} className={styles.recruitersScroll}>
              <div className={styles.recruitersTrack}>
                {[...companies, ...companies].map((company, index) => (
                  <div key={`${company.name}-${index}`} className={styles.companyCard}>
                    <div className={styles.companyLogoContainer}>
                      <img
                        src={company.logo}
                        alt={company.name}
                        className={styles.companyLogo}
                        onError={(e) => {
                          const target = e.target;
                          target.style.display = "none";

                          const fallback =
                            target.parentElement?.querySelector(
                              `.${styles.companyNameFallback}`
                            );
                          if (fallback) fallback.style.display = "block";
                        }}
                      />
                      <div className={styles.companyNameFallback}>
                        {company.name}
                      </div>
                    </div>

                    <span className={styles.companyName}>
                      {company.name}
                    </span>

                    <div className={styles.companyHoverEffect} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.scrollFade} ${styles.fadeLeft}`} />
          <div className={`${styles.scrollFade} ${styles.fadeRight}`} />
        </div>

        <p className={styles.recruitersNote}>
          And many more industry leaders...
        </p>

        <div className={styles.recruitersStats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statItemContent}>
                <h3 className={styles.statItemTitle}>
                  {stat.title}
                </h3>
                <p className={styles.statItemSubtitle}>
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
