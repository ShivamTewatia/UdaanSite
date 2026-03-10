import { useState, useRef, useEffect } from "react";
import { Linkedin, Phone, Mail, Users, Sparkles } from "lucide-react";
import styles from "./AboutMentor.module.css";

const teamMembers = [
  {
    id: 2,
    name: "Dr. Sheilza Jain",
    pic: "sheilza.png",
    position: "Deputy Training & Placement Officer",
    role: "DTPO",
    email: "sheilzajain@gmail.com",
    phone: "+91 9818886957",
    linkedin: "https://www.linkedin.com/in/sheilza-jain-b0234a91/",
  },
  {
    id: 3,
    name: "Dr. Somvir Bajar",
    pic: "somvir.png",
    position: "Deputy Training & Placement Officer",
    role: "DTPO",
    email: "somvirbajar@jcboseust.ac.in",
    phone: "+91 8950000270",
    linkedin: "https://www.linkedin.com/in/dr-somvir-bajar-8a79b034/",
  },
  {
    id: 4,
    name: "Dr. Ashima Sharma",
    pic: "ashima.png",
    position: "Assistant Training & Placement Officer",
    role: "ATPO",
    email: "ashimasharma@jcboseust.ac.in",
    phone: "+91 8510979727",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Dr. Neha Goyal",
    pic: "neha.png",
    position: "Assistant Training & Placement Officer",
    role: "ATPO",
    email: "nehayal@jcboseust.ac.in",
    phone: "+91 9718999040",
    linkedin: "https://www.linkedin.com/in/neha-goyal-96aa014/",
  },
  {
    id: 6,
    name: "Dr. Preeti Sethi",
    pic: "preeti.png",
    position: "Assistant Training & Placement Officer",
    role: "ATPO",
    email: "preetisethi@jcboseust.ac.in",
    phone: "+91 9810374948",
    linkedin: "https://www.linkedin.com/in/preeti-sethi-2826a7352/",
  },
  {
    id: 7,
    name: "Dr. Rajeev Sindhwani",
    pic: "rajeev.png",
    position: "Assistant Training & Placement Officer",
    role: "ATPO",
    email: "rajiv_sindwani@jcboseust.ac.in",
    phone: "+91 9810432422",
    linkedin: "https://in.linkedin.com/in/dr-rajiv-sindwani-82b99224",
  },
  {
    id: 8,
    name: "Dr. Shivi Garg",
    pic: "shivi.png",
    position: "Assistant Training & Placement Officer",
    role: "ATPO",
    email: "shivigarg@jcboseust.ac.in",
    phone: "+91 9968681034",
    linkedin: "https://www.linkedin.com/in/dr-shivi-garg-ph-d-a51b2a1b/",
  },
  {
    id: 9,
    name: "Aryan Singh",
    pic: "aryan.png",
    position: "Placement Coordinator",
    role: "PC",
    email: "singh322aryan@gmail.com",
    phone: "+91 8278292185",
    linkedin: "https://www.linkedin.com/in/aryan-singh-b470342b6/",
  },
];

const roleLabels = {
  DTPO: "Deputy TPO",
  ATPO: "Assistant TPO",
  PC: "Placement Coordinator",
};

const roleCounts = {
  DTPO: teamMembers.filter((m) => m.role === "DTPO").length,
  ATPO: teamMembers.filter((m) => m.role === "ATPO").length,
  PC: teamMembers.filter((m) => m.role === "PC").length,
};

function AboutMentor() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [selectedRole, setSelectedRole] = useState(
    window.innerWidth <= 480 ? "DTPO" : null
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 480;
      setIsMobile(mobile);
      if (mobile && !selectedRole) {
        setSelectedRole("DTPO");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedRole]);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const filteredMembers = selectedRole
    ? teamMembers.filter((member) => member.role === selectedRole)
    : teamMembers;

  useEffect(() => {
    setCurrentSlide(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
    }
  }, [selectedRole]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth * 0.85;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(Math.min(newSlide, filteredMembers.length - 1));
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [filteredMembers]);

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cardWidth = carousel.offsetWidth * 0.85;
    carousel.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <section className={styles["leadership-section"]}>
      <div className={styles["leadership-container"]}>
        <div className={styles["leadership-header"]}>
          <div className={styles["badge-container"]}>
            <div className={styles["team-badge"]}>
              <Users size={14} />
              Our Leadership Team
            </div>
          </div>

          <div className={styles["title-section"]}>
            <h2 className={styles["main-title"]}>MEET OUR MENTORS</h2>
            <div className={styles["title-decoration"]}>
              <div className={styles["decoration-line"]} />
              <Sparkles size={16} className={styles["decoration-icon"]} />
              <div className={styles["decoration-line"]} />
            </div>
            <p className={styles.subtitle}>
              Our experienced leadership team is dedicated to guiding students
              towards successful careers and building strong industry partnerships.
            </p>
          </div>

          <div className={styles["filter-buttons"]}>
            <button
              className={`${styles["filter-btn"]} ${styles["whole-team-btn"]} ${
                !selectedRole ? styles.active : ""
              }`}
              onClick={() => setSelectedRole(null)}
            >
              <Users size={14} />
              Whole Team
              <span className={styles["member-count"]}>({teamMembers.length})</span>
            </button>
            {Object.entries(roleLabels).map(([key, label]) => (
              <button
                key={key}
                className={`${styles["filter-btn"]} ${
                  selectedRole === key ? styles.active : ""
                }`}
                onClick={() => setSelectedRole(key)}
              >
                {label}
                <span className={styles["member-count"]}>({roleCounts[key]})</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className={styles["team-grid"]}
          ref={carouselRef}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className={`${styles["team-card"]} ${
                hoveredCard && hoveredCard !== member.id ? styles.blurred : ""
              }`}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles["card-content"]}>
                <div className={styles["card-inner"]}>
                  {/* Top row: role badge + linkedin */}
                  <div className={styles["card-top"]}>
                    <span
                      className={`${styles["role-badge"]} ${
                        styles[member.role.toLowerCase()]
                      }`}
                    >
                      {member.role}
                    </span>
                    <button
                      className={styles["linkedin-btn"]}
                      onClick={() => window.open(member.linkedin, "_blank")}
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={16} />
                    </button>
                  </div>

                  {/* Avatar */}
                  <div className={styles["avatar-section"]}>
                    <div className={styles["avatar-container"]}>
                      <div className={styles["avatar-glow"]} />
                      <div className={styles.avatar}>
                        <img
                          src={`images/aboutUs/${member.pic}`}
                          alt={member.name}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name & Position */}
                  <div className={styles["member-info"]}>
                    <h3 className={styles["member-name"]}>{member.name}</h3>
                    <p className={styles["member-position"]}>{member.position}</p>
                  </div>

                  {/* Divider */}
                  <div className={styles["card-divider"]} />

                  {/* Contact Info */}
                  <div className={styles["contact-info"]}>
                    <div className={styles["contact-item"]}>
                      <div className={`${styles["contact-icon"]} ${styles.phone}`}>
                        <Phone size={14} />
                      </div>
                      <span className={styles["contact-text"]}>{member.phone}</span>
                    </div>
                    <div className={styles["contact-item"]}>
                      <div className={`${styles["contact-icon"]} ${styles.email}`}>
                        <Mail size={14} />
                      </div>
                      <span className={styles["contact-text"]}>{member.email}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={styles["action-buttons"]}>
                    <button
                      className={`${styles["action-btn"]} ${styles.call}`}
                      onClick={() => (window.location.href = `tel:${member.phone}`)}
                    >
                      <Phone size={14} />
                      CALL
                    </button>
                    <button
                      className={`${styles["action-btn"]} ${styles["email-btn"]}`}
                      onClick={() =>
                        (window.location.href = `mailto:${member.email}`)
                      }
                    >
                      <Mail size={14} />
                      EMAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["carousel-dots"]}>
          {filteredMembers.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles["dot-active"] : ""
              }`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMentor;
