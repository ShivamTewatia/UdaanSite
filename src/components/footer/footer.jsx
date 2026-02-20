import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <div className={styles.logoContainer}>
              <div className={styles.logoCircle}>
                <img src="/images/home/clgLogo.png" alt="" />
              </div>
              <div className={styles.logoText}>
                <h2>ETO</h2>
                <p>Employment And Training Office</p>
              </div>
            </div>
            <p className={styles.address}>
              <MapPin size={18}/>
              <span>
                Employment & Training Office<br />
                J.C Bose University of Science and Technology, YMCA,<br />
                NH-2, Delhi-Mathura Road, Sector-6<br />
                Faridabad, Haryana-121006
              </span>
            </p>
            <div className={styles.contactLinks}>
              <a href="tel:+910129-2242141" className={styles.contactLink}>
                <Phone />
                <span>+91-0129-2242141 (Office)</span>
              </a>
              <a href="mailto:tpo@jcboseust.ac.in" className={styles.contactLink}>
                <Mail />
                <span>tpo@jcboseust.ac.in (For Placement)</span>
              </a>
              <a href="mailto:tnpcell@jcboseust.ac.in" className={styles.contactLink}>
                <Mail />
                <span>tnpcell@jcboseust.ac.in (For Internship)</span>
              </a>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Useful Links</h2>
            <ul className={styles.linkList}>
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/about#about">About Us</Link>
              </li>
              <li>
                <Link to="/about#mentor">Our Mentors</Link>
              </li>
              <li>
                <Link to="/team#team">Our Team</Link>
              </li>
              <li>
                <Link to="/placement?tab=rules-training">Placement Rules</Link>
              </li>
              <li>
                <Link to="/placement?tab=stats">Placement Stats</Link>
              </li>
              <li>
                <Link to="/placement?tab=procedure">Placement Process</Link>
              </li>
              <li>
                <Link to="/placement?tab=recruiters">Past Recruiters</Link>
              </li>
              <li>
                <Link to="/contact#contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us</h2>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.714667450316!2d77.3158949!3d28.3674749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA%20(Formerly%20YMCA%20UST)!5e0!3m2!1sen!2sin!4v1761387363066!5m2!1sen!2sin"
                width="100%"
                height="200"
                title="Location Map"
              ></iframe>
            </div>
            
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Connect With Us</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/udaan.jcboseust/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/tpoymca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} Employment And Training Office, J.C Bose University of Science and Technology, YMCA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
