import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock, 
  Building2,
  TrainFront, 
  RailSymbol,
  Users, 
  Briefcase, 
  Calendar, 
  MessageSquare, 
  HelpCircle, 
  Shield, 
  Sparkles, 
  BusFront
} from "lucide-react";
import styles from './contact.module.css';

const Contact = () => {
  const staffMembers = [
    {
      name: "Mr. Sanjeev Kumar",
      designation: "Clerk cum DEO",
      email: "sanjeev.kumar@jcboseust.ac.in",
      contact: "+91-8076494649",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      bestFor: "Office Records related quaries",
    },
    {
      name: "Mr. Yogesh Kumar Tewatia",
      designation: "Clerk cum DEO",
      email: "yogesh.tewatia@jcboseust.ac.in",
      contact: "+91-9873021220",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      bestFor: "Internship related quaries",
    },
    {
      name: "Ms. Bitto",
      designation: "Clerk cum DEO",
      email: "bitto@jcboseust.ac.in",
      contact: "+91-8447111419",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      bestFor: "Placement round related quaries",
    }
  ];

  const quickStats = [
    { icon: Users, label: "Students Placed Annually", value: "2500+" },
    { icon: Briefcase, label: "Recruiting Companies", value: "500+" },
    { icon: Calendar, label: "Years of Excellence", value: "25+" },
    { icon: MessageSquare, label: "Avg Response Time", value: "24 hrs" }
  ];

  const faqs = [
    {
      question: "What are the placement office timings?",
      answer: "The Training & Placement Office is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays. For urgent matters outside office hours, you can email us and we'll respond within 24 hours.",
      category: "General"
    },
    {
      question: "How can I get information about upcoming placement drives?",
      answer: "All placement drive information is communicated via official email and posted on our placement portal. Make sure to check your university email regularly and keep your portal profile updated. You can also follow our official social media channels for real-time updates.",
      category: "Placements"
    },
    {
      question: "Who should I contact for internship opportunities?",
      answer: "For all internship-related queries, please contact Mr. Yogesh Kumar Tewatia at +91-9873021220 or email tnpcell@jcboseust.ac.in. He coordinates all internship programs and can guide you through the application process.",
      category: "Internships"
    },
    {
      question: "How do I schedule an appointment with TPO staff?",
      answer: "You can schedule appointments by calling our office at +91-0129-2242141 or by sending an email to tpo@jcboseust.ac.in with your preferred date and time. We recommend booking at least 2 days in advance.",
      category: "Appointments"
    },
    {
      question: "What documents do I need for placement registration?",
      answer: "You'll need your updated resume, academic transcripts, photo ID, and any relevant certifications. Digital copies should be uploaded to the placement portal, and physical copies may be required during interviews.",
      category: "Documentation"
    },
    {
      question: "Can I apply for both placements and internships simultaneously?",
      answer: "Yes, you can apply for both. However, ensure you manage your schedule effectively and inform both coordinators if you receive offers that may overlap.",
      category: "Applications"
    }
  ];

  const locationCards = [
    {
      icon: BusFront,
      title: "Nearest Intracity Bus Stand",
      description: "Nearest Intracity Bus Stand: Ballabgarh bus stand. Take cab or auto to ymca chowk 15-20 minute journey",
    },
    {
      icon: TrainFront,
      title: "Nearest Metro Station",
      description: "Nearest Metro Station: Escorts Mujesar. Take a walk of 90-100 meters from exit gate 2 .",
    },
    {
      icon: RailSymbol,
      title: "Nearest Railway Station",
      description: "Nearest Railway Station: Old Faridabad Station. Take cab/auto or metro to escorts mujesar 15-20 minute journey",
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerPattern}></div>
        
        <div className={styles.headerContent}>
          <div className={styles.headerBadge}>
            <Shield size={16} />
            <span>We're Here to Help</span>
          </div>
          <h1 className={styles.headerTitle}>Contact Us</h1>
          <p className={styles.headerDescription}>
            Get in touch with our Training and Placement Office team for placements, internships, and career guidance
          </p>
        </div>

        <div className={styles.headerWave}>
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.1"/>
          </svg>
        </div>
      </header>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <IconComponent size={28} />
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <main className={styles.mainContent}>
        <section>
          <div className={styles.officeCard}>
            <div className={styles.officeGrid}>
              <div className={styles.officeLeft}>
                <div>
                  <h2 className={styles.officeTitle}>Training and Placement Office</h2>
                  <p className={styles.officeDescription}>
                    Your gateway to successful career opportunities and professional development
                  </p>
                </div>

                <div className={styles.officeDetails}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <MapPin size={24} />
                    </div>
                    <div className={styles.detailText}>
                      <h3 className={styles.detailTitle}>Campus Address</h3>
                      <p className={styles.detailContent}>
                        Employment & Training Office<br />
                        J.C Bose University of Science and Technology, YMCA<br />
                        NH-2, Delhi-Mathura Road, Sector-6<br />
                        Faridabad, Haryana-121006
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <Phone size={24} />
                    </div>
                    <div className={styles.detailText}>
                      <h3 className={styles.detailTitle}>Phone Numbers</h3>
                      <a href="tel:+910129-2242141" className={styles.phoneLink}>
                        +91-0129-2242141
                      </a>
                      <p className={styles.phoneDescription}>Main Office Line</p>
                    </div>
                  </div>
                  
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <Mail size={24} />
                    </div>
                    <div className={styles.detailText}>
                      <h3 className={styles.detailTitle}>Email Addresses</h3>
                      <div className={styles.emailList}>
                        <div>
                          <a href="mailto:tpo@jcboseust.ac.in" className={styles.emailLink}>
                            tpo@jcboseust.ac.in
                          </a>
                          <span className={styles.emailBadge}>Placements</span>
                        </div>
                        <div>
                          <a href="mailto:tnpcell@jcboseust.ac.in" className={styles.emailLink}>
                            tnpcell@jcboseust.ac.in
                          </a>
                          <span className={styles.emailBadge}>Internships</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.officeRight}>
                <div className={styles.hoursCard}>
                  <div className={styles.hoursHeader}>
                    <Clock size={32} />
                    <h3 className={styles.hoursTitle}>Office Hours</h3>
                  </div>
                  <div className={styles.hoursList}>
                    <div className={styles.hoursItem}>
                      <span>Monday - Friday</span>
                      <span className={styles.hoursTime}>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className={styles.hoursItem}>
                      <span>Saturday</span>
                      <span className={styles.hoursTime}>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className={styles.hoursItem}>
                      <span>Sunday</span>
                      <span className={styles.hoursClosed}>Closed</span>
                    </div>
                  </div>
                </div>

                <div className={styles.responseCard}>
                  <h4 className={styles.responseTitle}>
                    <MessageSquare size={20} />
                    Quick Response Times
                  </h4>
                  <ul className={styles.responseList}>
                    <li><strong>Email queries:</strong> Within 24 hours</li>
                    <li><strong>Phone calls:</strong> Immediate assistance</li>
                    <li><strong>Walk-in:</strong> No appointment needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <Users size={16} />
              <span>Clerical Staff </span>
            </div>
            <h2 className={styles.sectionTitle}>Meet Our Dedicated Staff</h2>
            <p className={styles.sectionDescription}>
              Experienced professionals committed to guiding your career journey from campus to corporate success
            </p>
          </div>

          <div className={styles.staffGrid}>
            {staffMembers.map((staff, index) => (
              <div key={index} className={styles.staffCard}>
                <div className={styles.staffHeader}>
                  <div className={styles.staffAvatar}>
                    <Sparkles size={40} />
                  </div>
                  <div className={styles.staffName}>{staff.name}</div>
                  <div className={styles.staffDesignation}>{staff.designation}</div>
                </div>

                <div className={styles.staffContent}>

                  <div className={styles.bestForCard}>
                    <div className={styles.bestForLabel}>Best For</div>
                    <p className={styles.bestForText}>{staff.bestFor}</p>
                  </div>

                  <div className={styles.contactInfo}>
                    <a href={`mailto:${staff.email}`} className={styles.contactLink}>
                      <Mail size={20} />
                      <span>{staff.email}</span>
                    </a>
                    
                    <a href={`tel:${staff.contact}`} className={styles.contactLink}>
                      <Phone size={20} />
                      <span>{staff.contact}</span>
                    </a>

                    <div className={styles.availability}>
                      <Clock size={16} />
                      <span>{staff.availability}</span>
                    </div>
                  </div>

                  <button className={styles.contactButton}>
                    <Phone size={16} />
                    Contact Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <HelpCircle size={16} />
              <span>FAQ</span>
            </div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionDescription}>Quick answers to common queries</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqCard}>
                <div className={styles.faqIcon}>
                  <HelpCircle size={20} />
                </div>
                <div className={styles.faqCategory}>{faq.category}</div>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <MapPin size={16} />
              <span>Location</span>
            </div>
            <h2 className={styles.sectionTitle}>Visit Our Campus</h2>
            <p className={styles.sectionDescription}>J.C Bose University of Science and Technology, YMCA</p>
          </div>

          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.714667450316!2d77.3158949!3d28.3674749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA%20(Formerly%20YMCA%20UST)!5e0!3m2!1sen!2sin!4v1761387363066!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location Map"
            />
          </div>

          <div className={styles.locationGrid}>
            {locationCards.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className={styles.locationCard}>
                  <div className={styles.locationIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.locationTitle}>{item.title}</h3>
                  <p className={styles.locationDescription}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBackground}></div>
            
            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>
                <Shield size={16} />
                <span>Ready to Connect?</span>
              </div>
              
              <h2 className={styles.ctaTitle}>Have Questions?</h2>
              <p className={styles.ctaDescription}>
                Our team is here to help you with placements, internships, and career guidance. Reach out to us today!
              </p>
              
              <div className={styles.ctaButtons}>
                <button 
                  className={styles.ctaButton}
                  onClick={() => window.location.href = 'mailto:tpo@jcboseust.ac.in'}
                >
                  <Mail size={16} />
                  Email for Placement
                </button>
                <button 
                  className={styles.ctaButton}
                  onClick={() => window.location.href = 'mailto:tnpcell@jcboseust.ac.in'}
                >
                  <Mail size={16} />
                  Email for Internship
                </button>
                <button 
                  className={styles.ctaButton}
                  onClick={() => window.location.href = 'tel:+910129-2242141'}
                >
                  <Phone size={16} />
                  Call Office
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
