import { useEffect, useRef, useState } from "react";
import { Building2, TrendingUp, Award } from "lucide-react";
import styles from "./top.module.css";

const companies = [
  { name: "Microsoft", logo: "/images/home/microsoft.png" },
  { name: "Accenture", logo: "/images/home/accenture.png" },
  { name: "Wipro", logo: "/images/home/wipro.png" },
  { name: "Google", logo: "/images/home/google.png" },
  { name: "IBM", logo: "/images/home/ibm.png" },
  { name: "Cognizant", logo: "/images/home/cognizant.png" },
  { name: "HCL", logo: "/images/home/hcl.png" },
  { name: "TCS", logo: "/images/home/tcs.png" },
  { name: "Flipkart", logo: "/images/home/flipkart.png" },
  { name: "Infosys", logo: "/images/home/infosys.png" },
  { name: "Adobe", logo: "/images/home/adobe.png" },
];

const stats = [
  { icon: Building2, title: "Fortune 500", subtitle: "Companies", color: "blue" },
  { icon: TrendingUp, title: "Startups", subtitle: "& Unicorns", color: "emerald" },
  { icon: Award, title: "MNCs", subtitle: "& Global Firms", color: "rose" },
];

const TopRecruiters = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [failedLogos, setFailedLogos] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused || !isVisible) return;

    let raf;
    let pos = el.scrollLeft;
    const speed = window.innerWidth < 768 ? 0.4 : 1;

    const scroll = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(scroll);
    };

    raf = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, isVisible]);

  const handleLogoError = (index) => {
    setFailedLogos((prev) => {
      const updated = new Set(prev);
      updated.add(index % companies.length);
      return updated;
    });
  };

  const allCompanies = [...companies, ...companies];

  return (
    <section className={styles.container}>
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Our Top <span className={styles.headingAccent}>Recruiters</span>
          </h2>
          <p className={styles.subheading}>
            Leading companies across the globe trust our graduates for their excellence and innovation
          </p>
        </div>

        <div className={styles.scrollWrapper}>
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />

          <div
            ref={scrollRef}
            className={styles.scrollContainer}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) setIsPaused(true);
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(hover: hover)").matches) setIsPaused(false);
            }}
          >
            <div className={styles.track}>
              {allCompanies.map((company, index) => (
                <div key={index} className={styles.companyCard}>
                  {!failedLogos.has(index % companies.length) && (
                    <div className={styles.logoContainer}>
                      <img
                        src={company.logo}
                        alt={company.name}
                        className={styles.logo}
                        onError={() => handleLogoError(index)}
                      />
                    </div>
                  )}
                  <span className={styles.companyName}>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.note}>And many more industry leaders...</p>

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
              <div className={`${styles.iconBox} ${styles[stat.color]}`}>
                <stat.icon size={20} />
              </div>
              <div className={styles.statTitle}>{stat.title}</div>
              <div className={styles.statSubtitle}>{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
