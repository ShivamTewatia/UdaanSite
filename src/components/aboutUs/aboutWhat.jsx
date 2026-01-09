import { useState, useEffect, useRef } from "react";
import {
  Settings,
  Users,
  MonitorCheck,
  UserCircle,
  FileText,
  Headphones,
  FlaskConical,
  Megaphone,
  Calendar,
  Sparkles,
  Network,
  Palette,
  Video,
  Target,
  Pen,
} from "lucide-react";
import styles from "./aboutWhat.module.css";

const AboutWhat = () => {
  const [activeTeam, setActiveTeam] = useState(0);

  // 🔥 NEW: scroll animation trigger
  const sectionRef = useRef(null);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateIcons(true);   // 🔄 trigger animation
        } else {
          setAnimateIcons(false);  // 🔁 reset when user scrolls away
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teams = [
    {
      name: "Admin",
      roles: [
        {
          title: "Face of TPO",
          description:
            "The welcoming face of the TPO, ensuring smooth operations and a professional image",
          icon: UserCircle,
          color: "warm",
        },
        {
          title: "Coordination",
          description:
            "Coordinates placement drives, ensuring seamless execution and effective collaboration.",
          icon: Settings,
          color: "cool",
        },
        {
          title: "Communication",
          description:
            "Handles student and recruiter communication, scheduling interviews",
          icon: Users,
          color: "accent",
        },
        {
          title: "Monitoring",
          description:
            "Monitors events and oversees club activities, ensuring effective management",
          icon: MonitorCheck,
          color: "success",
        },
      ],
    },
    {
      name: "IT",
      roles: [
        {
          title: "Tech Nerds",
          description:
            "The backbone of our tech processes, builds seamless tech integration",
          icon: Settings,
          color: "warm",
        },
        {
          title: "Documentation",
          description:
            "Maintains records of student data, company details, and statistics",
          icon: FileText,
          color: "cool",
        },
        {
          title: "Tech Support",
          description:
            "Provides technical support during virtual interviews and assessments",
          icon: Headphones,
          color: "accent",
        },
        {
          title: "Conduct Tests",
          description:
            "Conducts aptitude and technical tests on platforms like HackerRank",
          icon: FlaskConical,
          color: "success",
        },
      ],
    },
    {
      name: "Outreach",
      roles: [
        {
          title: "Brand Ambassador",
          description:
            "Builds relationships with employers and invites them for campus placements",
          icon: Sparkles,
          color: "warm",
        },
        {
          title: "Networking",
          description:
            "Expands network by connecting with alumni and industry professionals",
          icon: Network,
          color: "cool",
        },
        {
          title: "Event Planning",
          description:
            "Organizes pre-placement talks, workshops, and networking events",
          icon: Calendar,
          color: "accent",
        },
        {
          title: "Promotion",
          description:
            "Promotes placement opportunities and encourages student participation",
          icon: Megaphone,
          color: "success",
        },
      ],
    },
    {
      name: "Design",
      roles: [
        {
          title: "Graphic Design",
          description:
            "Creates visually appealing promotional materials and brochures",
          icon: Palette,
          color: "warm",
        },
        {
          title: "Social Media Graphics",
          description:
            "Designs graphics for social media campaigns and opportunities",
          icon: Pen,
          color: "cool",
        },
        {
          title: "Visual Content",
          description:
            "Produces videos, infographics, and content highlighting statistics",
          icon: Video,
          color: "accent",
        },
        {
          title: "Tech Artists",
          description:
            "Combines technical and artistic skills for innovative digital experiences",
          icon: Target,
          color: "success",
        },
      ],
    },
  ];

  const getTeamColor = (index) => {
    const colors = ["warm", "cool", "accent", "success"];
    return colors[index];
  };

  return (
    // 🔥 UPDATED ROOT DIV
    <div
      ref={sectionRef}
      className={`${styles["teams-container"]} ${
        animateIcons ? styles.animate : ""
      }`}
    >
      <section className={styles["section-wrapper"]}>
        <div className={styles["content-container"]}>
          {/* header */}
          <div className={styles["header-section"]}>
            <h1 className={styles["main-title"]}>What We Do?</h1>
            <div className={styles["title-divider"]} />
            <p className={styles["header-description"]}>
              Our dedicated teams work together to deliver comprehensive placement
              support, ensuring every student gets the best opportunities.
            </p>
          </div>

          {/* tabs */}
          <div className={styles["tabs-container"]}>
            <div className={styles["tabs-wrapper"]}>
              {teams.map((team, index) => (
                <button
                  key={team.name}
                  onClick={() => setActiveTeam(index)}
                  className={`${styles["tab-button"]} ${
                    styles[`tab-${getTeamColor(index)}`]
                  } ${activeTeam === index ? styles.active : ""}`}
                >
                  <span className={styles["tab-text"]}>{team.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* content */}
          <div className={styles["team-content"]}>
            {teams.map((team, teamIndex) => (
              <div
                key={team.name}
                className={
                  activeTeam === teamIndex ? "" : styles["team-hidden"]
                }
              >
                <div
                  className={`${styles["team-header-card"]} ${
                    styles[`team-header-${getTeamColor(teamIndex)}`]
                  }`}
                >
                  <div className={styles["team-header-content"]}>
                    <div
                      className={`${styles["team-header-bar"]} ${
                        styles[`bar-${getTeamColor(teamIndex)}`]
                      }`}
                    />
                    <div className={styles["team-header-text"]}>
                      <h2>{team.name} Team</h2>
                      <p>Discover the key roles and responsibilities</p>
                    </div>
                  </div>
                </div>

                <div className={styles["roles-grid"]}>
                  {team.roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <div
                        key={role.title}
                        className={`${styles["role-card"]} ${
                          styles[`role-${role.color}`]
                        }`}
                      >
                        <div className={styles["role-bg-icon"]}>
                          <Icon size={120} strokeWidth={1.5} />
                        </div>

                        <div className={styles["role-content"]}>
                          <div className={styles["special"]}>
                            <div
                              className={`${styles["role-icon-wrapper"]} ${
                                styles[`icon-${role.color}`]
                              }`}
                            >
                              <Icon size={32} strokeWidth={2} />
                            </div>

                            <h3 className={styles["role-title"]}>
                              {role.title}
                            </h3>
                          </div>

                          <p className={styles["role-description"]}>
                            {role.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutWhat;

