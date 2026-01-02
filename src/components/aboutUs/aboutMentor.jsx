import { useState } from "react";
import { Linkedin, Phone, Mail, Users, Sparkles } from "lucide-react";
import styles from "./aboutMentor.module.css";
import { useHashScroll } from "../hooks/useHashScroll"

const teamMembers = [
  {
    id: 1,
    name: "Prof. Rajesh Kr. Ahuja",
    pic: "rajesh.png",
    position: "Training & Placement Officer",
    role: "TPO",
    email: "rajeshahuja@jcboseust.ac.in",
    phone: "+91 9990477433",
    linkedin: "#",
  },
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
    email: "preetisethi@jcboseust.ac.in ",
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
  }
  
];

const roleLabels = {
  TPO: "Training & Placement Officer",
  DTPO: "Deputy TPO",
  ATPO: "Assistant TPO",
  PC: "Placement Coordinator"
};


function AboutMentor() {
  useHashScroll();
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const filteredMembers = selectedRole
    ? teamMembers.filter((member) => member.role === selectedRole)
    : teamMembers;


  return (
    <section id='mentor' className={styles['leadership-section']}>
      <div className={styles['leadership-container']}>
        <div className={styles['leadership-header']}>
          <div className={styles['badge-container']}>
            <div className={styles['team-badge']}>
              <Sparkles />
              <span>Our Leadership Team</span>
            </div>
          </div>
          <div className={styles['title-section']}>
            <h2 className={styles['main-title']}>MEET OUR MENTORS</h2>
            <div className={styles['title-decoration']}>
              <div className={styles['decoration-line']} />
              <Users />
              <div className={styles['decoration-line']} />
            </div>
            <p className={styles['subtitle']}>
              Our experienced leadership team is dedicated to guiding students towards
              successful careers and building strong industry partnerships.
            </p>
          </div>

          <div className={styles['filter-buttons']}>
            <button
              className={`${styles['filter-btn']} ${selectedRole === null ? styles.active : ""}`}
              onClick={() => setSelectedRole(null)}
            >
              <Users />
              All Team ({teamMembers.length})
            </button>
            {Object.entries(roleLabels).map(([key, label]) => {
              return (
                <button
                  key={key}
                  className={`${styles['filter-btn']} ${selectedRole === key ? styles.active : ""}`}
                  onClick={() => setSelectedRole(key)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles['team-grid']} onMouseLeave={() => setHoveredCard(null)}>
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className={`${styles['team-card']} ${
                hoveredCard !== null && hoveredCard !== member.id ? styles.blurred : ""
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
              onMouseEnter={() => setHoveredCard(member.id)}
            >
              <div className={styles['card-content']}>
                <div className={styles['card-inner']}>
                  <div className={styles['card-top']}>
                    <span className={`${styles['role-badge']} ${styles[member.role.toLowerCase()]}`}>
                      {member.role}
                    </span>

                    <button
                      className={styles['linkedin-btn']}
                      onClick={() => window.open(member.linkedin, "_blank")}
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin />
                    </button>
                  </div>

                  <div className={styles['avatar-section']}>
                    <div className={styles['avatar-container']}>
                      <div className={styles['avatar-glow']} />
                      <div className={styles.avatar}>
                        <img src={`/images/aboutUs/${member.pic}`} alt={member.name} />
                      </div>
                    </div>
                  </div>

                  
                  <div className={styles['member-info']}>
                    <h3 className={styles['member-name']}>{member.name}</h3>
                    <p className={styles['member-position']}>{member.position}</p>
                  </div>

                  
                  <div className={styles['contact-info']}>
                    <div className={styles['contact-item']}>
                      <div className={`${styles['contact-icon']} ${styles.phone}`}>
                        <Phone />
                      </div>
                      <span className={styles['contact-text']}>{member.phone}</span>
                    </div>

                    <div className={styles['contact-item']}>
                      <div className={`${styles['contact-icon']} ${styles.email}`}>
                        <Mail />
                      </div>
                      <span className={styles['contact-text']}>{member.email}</span>
                    </div>
                  </div>
                  <div className={styles['action-buttons']}>
                    <button
                      className={`${styles['action-btn']} ${styles.call}`}
                      onClick={() => (window.location.href = `tel:${member.phone}`)}
                    >
                      <Phone />
                      Call
                    </button>
                    <button
                      className={`${styles['action-btn']} ${styles.email}`}
                      onClick={() => (window.location.href = `mailto:${member.email}`)}
                    >
                      <Mail />
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutMentor
