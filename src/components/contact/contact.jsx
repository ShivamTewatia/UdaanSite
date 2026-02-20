// import React, { useState, useRef, useEffect } from "react";
// import { 
//   Mail, 
//   Phone, 
//   MapPin,
//   Clock, 
//   Building2,
//   TrainFront, 
//   RailSymbol,
//   Users, 
//   Briefcase, 
//   Calendar, 
//   MessageSquare, 
//   HelpCircle, 
//   Shield, 
//   Sparkles, 
//   BusFront,
//   ChevronDown,
//   ChevronUp
// } from "lucide-react";
// import styles from './contact.module.css';
// import { useHashScroll } from "../hooks/useHashScroll";

// const Contact = () => {
//   useHashScroll();
//   const [activeStaffIndex, setActiveStaffIndex] = useState(0);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const staffScrollRef = useRef(null);

//   const staffMembers = [
//     {
//       name: "Mr. Sanjeev Kumar",
//       designation: "Clerk cum DEO",
//       email: "tpo@jcboseust.ac.in",
//       contact: "+91-8076494649",
//       availability: "Mon-Fri: 9:00 AM - 5:00 PM",
//       bestFor: "Office Records related queries",
//     },
//     {
//       name: "Mr. Yogesh Kumar Tewatia",
//       designation: "Clerk cum DEO",
//       email: "tnpcell@jcboseust.ac.in",
//       contact: "+91-9873021220",
//       availability: "Mon-Fri: 9:00 AM - 5:00 PM",
//       bestFor: "Internship related queries",
//     },
//     {
//       name: "Ms. Bitto",
//       designation: "Clerk cum DEO",
//       email: "tpo@jcboseust.ac.in",
//       contact: "+91-8447111419",
//       availability: "Mon-Fri: 9:00 AM - 5:00 PM",
//       bestFor: "Placement round related queries",
//     }
//   ];

//   const quickStats = [
//     { icon: Users, label: "Students Placed This Decade", value: "4500+" },
//     { icon: Briefcase, label: "Recruiting Companies", value: "500+" },
//     { icon: Calendar, label: "Years of Excellence", value: "25+" },
//     { icon: MessageSquare, label: "Avg Response Time", value: "24 hrs" }
//   ];

//   const faqs = [
//     {
//       question: "What are the placement office timings?",
//       answer: "The Training & Placement Office is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays. For urgent matters outside office hours, you can email us and we'll respond within 24 hours.",
//       category: "General"
//     },
//     {
//       question: "How can I get information about upcoming placement drives?",
//       answer: "All placement drive information is communicated via official email and posted on our placement portal. Make sure to check your university email regularly and keep your portal profile updated. You can also follow our official social media channels for real-time updates.",
//       category: "Placements"
//     },
//     {
//       question: "Who should I contact for internship opportunities?",
//       answer: "For all internship-related queries, please contact Mr. Yogesh Kumar Tewatia at +91-9873021220 or email tnpcell@jcboseust.ac.in. He coordinates all internship programs and can guide you through the application process.",
//       category: "Internships"
//     },
//     {
//       question: "How do I schedule an appointment with TPO staff?",
//       answer: "You can schedule appointments by calling our office at +91-0129-2242141 or by sending an email to tpo@jcboseust.ac.in with your preferred date and time. We recommend booking at least 2 days in advance.",
//       category: "Appointments"
//     },
//     {
//       question: "What documents do I need for placement registration?",
//       answer: "You'll need your updated resume, academic transcripts, photo ID, and any relevant certifications. Digital copies should be uploaded to the placement portal, and physical copies may be required during interviews.",
//       category: "Documentation"
//     },
//     {
//       question: "Can I apply for both placements and internships simultaneously?",
//       answer: "Yes, you can apply for both. However, ensure you manage your schedule effectively and inform both coordinators if you receive offers that may overlap.",
//       category: "Applications"
//     }
//   ];

//   const locationCards = [
//     {
//       icon: BusFront,
//       title: "Nearest Bus Stand",
//       description: "Ballabgarh bus stand. Take cab or auto to YMCA chowk (15-20 min)",
//     },
//     {
//       icon: TrainFront,
//       title: "Nearest Metro",
//       description: "Escorts Mujesar. Walk 90-100m from exit gate 2.",
//     },
//     {
//       icon: RailSymbol,
//       title: "Nearest Railway",
//       description: "Old Faridabad Station. Take cab/auto or metro (15-20 min)",
//     }
//   ];

//   const handleStaffScroll = () => {
//     if (staffScrollRef.current) {
//       const scrollLeft = staffScrollRef.current.scrollLeft;
//       const cardWidth = staffScrollRef.current.offsetWidth;
//       const index = Math.round(scrollLeft / cardWidth);
//       setActiveStaffIndex(index);
//     }
//   };

//   const scrollToStaff = (index) => {
//     if (staffScrollRef.current) {
//       const cardWidth = staffScrollRef.current.offsetWidth;
//       staffScrollRef.current.scrollTo({
//         left: index * cardWidth,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const scrollContainer = staffScrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleStaffScroll);
//       return () => scrollContainer.removeEventListener('scroll', handleStaffScroll);
//     }
//   }, []);

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <div className={styles.headerPattern}></div>
//         <div className={styles.headerContent}>
//           <div className={styles.headerBadge}>
//             <Sparkles size={16} />
//             We're Here to Help
//           </div>
//           <h1 className={styles.headerTitle}>Contact Us</h1>
//           <p className={styles.headerDescription}>
//             Get in touch with our Training and Placement Office team for placements, internships, and career guidance
//           </p>
//         </div>
//         <div className={styles.headerWave}>
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f0f9ff"/>
//           </svg>
//         </div>
//       </header>

//       <section className={styles.statsSection}>
//         <div className={styles.statsGrid}>
//           {quickStats.map((stat, index) => {
//             const IconComponent = stat.icon;
//             return (
//               <div key={index} className={styles.statCard}>
//                 <div className={styles.statIcon}>
//                   <IconComponent size={28} />
//                 </div>
//                 <div className={styles.statValue}>{stat.value}</div>
//                 <div className={styles.statLabel}>{stat.label}</div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       <main className={styles.mainContent}>
//         <section>
//           <div className={styles.officeCard}>
//             <div className={styles.officeGrid}>
//               <div className={styles.officeLeft}>
//                 <div>
//                   <h2 className={styles.officeTitle}>Training and Placement Office</h2>
//                   <p className={styles.officeDescription}>
//                     Your gateway to successful career opportunities and professional development
//                   </p>
//                 </div>

//                 <div className={styles.officeDetails}>
//                   <div className={styles.detailCard}>
//                     <div className={styles.detailIcon}>
//                       <MapPin size={24} />
//                     </div>
//                     <div className={styles.detailText}>
//                       <h3 className={styles.detailTitle}>Campus Address</h3>
//                       <p className={styles.detailContent}>
//                         Employment & Training Office<br />
//                         J.C Bose University of Science and Technology, YMCA<br />
//                         NH-2, Delhi-Mathura Road, Sector-6<br />
//                         Faridabad, Haryana-121006
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className={styles.detailCard}>
//                     <div className={styles.detailIcon}>
//                       <Phone size={24} />
//                     </div>
//                     <div className={styles.detailText}>
//                       <h3 className={styles.detailTitle}>Phone Numbers</h3>
//                       <a href="tel:+910129-2242141" className={styles.phoneLink}>
//                         +91-0129-2242141
//                       </a>
//                       <p className={styles.phoneDescription}>Main Office Line</p>
//                     </div>
//                   </div>
                  
//                   <div className={styles.detailCard}>
//                     <div className={styles.detailIcon}>
//                       <Mail size={24} />
//                     </div>
//                     <div className={styles.detailText}>
//                       <h3 className={styles.detailTitle}>Email Addresses</h3>
//                       <div className={styles.emailList}>
//                         <div>
//                           <a href="mailto:tpo@jcboseust.ac.in" className={styles.emailLink}>
//                             tpo@jcboseust.ac.in
//                           </a>
//                           <span className={styles.emailBadge}>Placements</span>
//                         </div>
//                         <div>
//                           <a href="mailto:tnpcell@jcboseust.ac.in" className={styles.emailLink}>
//                             tnpcell@jcboseust.ac.in
//                           </a>
//                           <span className={styles.emailBadge}>Internships</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className={styles.officeRight}>
//                 <div className={styles.hoursCard}>
//                   <div className={styles.hoursHeader}>
//                     <Clock size={24} />
//                     <h3 className={styles.hoursTitle}>Office Hours</h3>
//                   </div>
//                   <div className={styles.hoursList}>
//                     <div className={styles.hoursItem}>
//                       <span>Monday - Friday</span>
//                       <span className={styles.hoursTime}>09:00 AM - 05:00 PM</span>
//                     </div>
//                     <div className={styles.hoursItem}>
//                       <span>Lunch Break</span>
//                       <span className={styles.hoursBreak}>12:30 PM - 01:30 PM</span>
//                     </div>
//                     <div className={styles.hoursItem}>
//                       <span>Saturday & Sunday</span>
//                       <span className={styles.hoursClosed}>Closed</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={styles.responseCard}>
//                   <div className={styles.responseTitle}>
//                     <Sparkles size={18} />
//                     Quick Response Times
//                   </div>
//                   <ul className={styles.responseList}>
//                     <li>Email queries: Within 24 hours</li>
//                     <li>Phone calls: Immediate assistance</li>
//                     <li>Walk-in: No appointment needed</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <div className={styles.sectionHeader}>
//             <div className={styles.sectionBadge}>
//               <Building2 size={16} />
//               Clerical Staff 
//             </div>
//             <h2 className={styles.sectionTitle}>Meet Our Dedicated Staff</h2>
//             <p className={styles.sectionDescription}>
//               Experienced professionals committed to guiding your career journey
//             </p>
//           </div>

//           <div className={styles.staffGrid} ref={staffScrollRef}>
//             {staffMembers.map((staff, index) => (
//               <div key={index} className={styles.staffCard}>
//                 <div className={styles.staffHeader}>
//                   <div className={styles.staffAvatar}>
//                     <Users size={32} />
//                   </div>
//                   <h3 className={styles.staffName}>{staff.name}</h3>
//                   <p className={styles.staffDesignation}>{staff.designation}</p>
//                 </div>

//                 <div className={styles.staffContent}>
//                   <div className={styles.bestForCard}>
//                     <div className={styles.bestForLabel}>Best For</div>
//                     <p className={styles.bestForText}>{staff.bestFor}</p>
//                   </div>

//                   <div className={styles.contactInfo}>
//                     <a href={`mailto:${staff.email}`} className={styles.contactLink}>
//                       <Mail size={16} />
//                       {staff.email}
//                     </a>
                    
//                     <a href={`tel:${staff.contact}`} className={styles.contactLink}>
//                       <Phone size={16} />
//                       {staff.contact}
//                     </a>

//                     <div className={styles.availability}>
//                       <Clock size={14} />
//                       {staff.availability}
//                     </div>
//                   </div>

//                   <button onClick={() => window.location.href = `tel:${staff.contact}`} className={styles.contactButton}>
//                     <Phone size={16} />
//                     Contact Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.staffDots}>
//             {staffMembers.map((_, index) => (
//               <button
//                 key={index}
//                 className={`${styles.staffDot} ${activeStaffIndex === index ? styles.staffDotActive : ''}`}
//                 onClick={() => scrollToStaff(index)}
//                 aria-label={`Go to staff ${index + 1}`}
//               />
//             ))}
//           </div>
//         </section>

//         <section>
//           <div className={styles.sectionHeader}>
//             <div className={styles.sectionBadge}>
//               <HelpCircle size={16} />
//               FAQ
//             </div>
//             <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
//             <p className={styles.sectionDescription}>Quick answers to common queries</p>
//           </div>

//           <div className={styles.faqGrid}>
//             {faqs.map((faq, index) => (
//               <div 
//                 key={index} 
//                 className={`${styles.faqCard} ${expandedFaq === index ? styles.faqCardExpanded : ''}`}
//                 onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//               >
//                 <div className={styles.faqHeader}>
//                   <div className={styles.faqIcon}>
//                     <HelpCircle size={18} />
//                   </div>
//                   <div className={styles.faqHeaderContent}>
//                     <span className={styles.faqCategory}>{faq.category}</span>
//                     <h3 className={styles.faqQuestion}>{faq.question}</h3>
//                   </div>
//                   <div className={styles.faqChevron}>
//                     {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                   </div>
//                 </div>
//                 <div className={`${styles.faqAnswerWrapper} ${expandedFaq === index ? styles.faqAnswerOpen : ''}`}>
//                   <p className={styles.faqAnswer}>{faq.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <div className={styles.sectionHeader}>
//             <div className={styles.sectionBadge}>
//               <MapPin size={16} />
//               Location
//             </div>
//             <h2 className={styles.sectionTitle}>Visit Our Campus</h2>
//             <p className={styles.sectionDescription}>J.C Bose University of Science and Technology, YMCA</p>
//           </div>

//           <div className={styles.mapCard}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.714667450316!2d77.3158949!3d28.3674749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA%20(Formerly%20YMCA%20UST)!5e0!3m2!1sen!2sin!4v1761387363066!5m2!1sen!2sin"
//               width="100%"
//               height="300"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="University Location"
//             />
//           </div>

//           <div className={styles.locationGrid}>
//             {locationCards.map((item, idx) => {
//               const IconComponent = item.icon;
//               return (
//                 <div key={idx} className={styles.locationCard}>
//                   <div className={styles.locationIcon}>
//                     <IconComponent size={24} />
//                   </div>
//                   <h3 className={styles.locationTitle}>{item.title}</h3>
//                   <p className={styles.locationDescription}>{item.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         <section>
//           <div className={styles.ctaCard}>
//             <div className={styles.ctaBackground}></div>
            
//             <div className={styles.ctaContent}>
//               <div className={styles.ctaBadge}>
//                 <Shield size={16} />
//                 <span>Ready to Connect?</span>
//               </div>
              
//               <h2 className={styles.ctaTitle}>Have Questions?</h2>
//               <p className={styles.ctaDescription}>
//                 Our team is here to help you with placements, internships, and career guidance. Reach out to us today!
//               </p>
              
//               <div className={styles.ctaButtons}>
//                 <button 
//                   className={styles.ctaButton}
//                   onClick={() => window.location.href = 'mailto:tpo@jcboseust.ac.in'}
//                 >
//                   <Mail size={16} />
//                   Email for Placement
//                 </button>
//                 <button 
//                   className={styles.ctaButton}
//                   onClick={() => window.location.href = 'mailto:tnpcell@jcboseust.ac.in'}
//                 >
//                   <Mail size={16} />
//                   Email for Internship
//                 </button>
//                 <button 
//                   className={styles.ctaButton}
//                   onClick={() => window.location.href = 'tel:+910129-2242141'}
//                 >
//                   <Phone size={16} />
//                   Call Office
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Contact;
import React, { useState, useRef, useEffect } from "react";
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
  BusFront,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import styles from "./contact.module.css";

const Contact = () => {
  const [activeStaffIndex, setActiveStaffIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const staffScrollRef = useRef(null);

  const staffMembers = [
    {
      name: "Mr. Sanjeev Kumar",
      designation: "Clerk cum DEO",
      email: "tpo@jcboseust.ac.in",
      contact: "+91-8076494649",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      bestFor: "Office Records related queries",
    },
    {
      name: "Mr. Yogesh Kumar Tewatia",
      designation: "Clerk cum DEO",
      email: "tnpcell@jcboseust.ac.in",
      contact: "+91-9873021220",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      bestFor: "Internship related queries",
    },
    {
      name: "Ms. Bitto",
      designation: "Clerk cum DEO",
      email: "tpo@jcboseust.ac.in",
      contact: "+91-8447111419",
      availability: "Mon-Fri: 9:00 AM - 5:00 PM",
      bestFor: "Placement round related queries",
    },
  ];

  const quickStats = [
    { icon: Users, label: "Students Placed This Decade", value: "4500+" },
    { icon: Briefcase, label: "Recruiting Companies", value: "500+" },
    { icon: Calendar, label: "Years of Excellence", value: "25+" },
    { icon: MessageSquare, label: "Avg Response Time", value: "24 hrs" },
  ];

  const faqs = [
    {
      question: "What are the placement office timings?",
      answer:
        "The Training & Placement Office is open Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays. For urgent matters outside office hours, you can email us and we'll respond within 24 hours.",
      category: "General",
    },
    {
      question: "How can I get information about upcoming placement drives?",
      answer:
        "All placement drive information is communicated via official email and posted on our placement portal. Make sure to check your university email regularly and keep your portal profile updated.",
      category: "Placements",
    },
    {
      question: "Who should I contact for internship opportunities?",
      answer:
        "For all internship-related queries, please contact Mr. Yogesh Kumar Tewatia at +91-9873021220 or email tnpcell@jcboseust.ac.in.",
      category: "Internships",
    },
    {
      question: "How do I schedule an appointment with TPO staff?",
      answer:
        "You can schedule appointments by calling our office at +91-0129-2242141 or by sending an email to tpo@jcboseust.ac.in with your preferred date and time. We recommend booking at least 2 days in advance.",
      category: "Appointments",
    },
    {
      question: "What documents do I need for placement registration?",
      answer:
        "You'll need your updated resume, academic transcripts, photo ID, and any relevant certifications. Digital copies should be uploaded to the placement portal.",
      category: "Documentation",
    },
    {
      question: "Can I apply for both placements and internships simultaneously?",
      answer:
        "Yes, you can apply for both. However, ensure you manage your schedule effectively and inform both coordinators if you receive offers that may overlap.",
      category: "Applications",
    },
  ];

  const locationCards = [
    {
      icon: BusFront,
      title: "Nearest Bus Stand",
      description:
        "Ballabgarh bus stand. Take cab or auto to YMCA chowk (15-20 min)",
    },
    {
      icon: TrainFront,
      title: "Nearest Metro",
      description: "Escorts Mujesar Metro Station. Walk 90-100m from exit gate 2.",
    },
    {
      icon: RailSymbol,
      title: "Nearest Railway",
      description:
        "Ballabgarh Railway Station. Take cab/auto or metro (10-15 min)",
    },
  ];

  const handleStaffScroll = () => {
    if (staffScrollRef.current) {
      const scrollLeft = staffScrollRef.current.scrollLeft;
      const cardWidth = staffScrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveStaffIndex(index);
    }
  };

  const scrollToStaff = (index) => {
    if (staffScrollRef.current) {
      const cardWidth = staffScrollRef.current.offsetWidth;
      staffScrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = staffScrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleStaffScroll);
      return () =>
        scrollContainer.removeEventListener("scroll", handleStaffScroll);
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerBadge}>
            <Sparkles size={13} />
            We're Here to Help
          </div>
          <h1 className={styles.headerTitle}>Contact Us</h1>
          <p className={styles.headerDescription}>
            Get in touch with our Training and Placement Office team for
            placements, internships, and career guidance
          </p>
        </div>
      </header>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  <IconComponent size={20} />
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Office Info */}
        <section>
          <div className={styles.officeCard}>
            <div className={styles.officeGrid}>
              <div className={styles.officeLeft}>
                <div className={styles.officeHeader}>
                  <h2 className={styles.officeTitle}>
                    Training and Placement Office
                  </h2>
                  <p className={styles.officeDescription}>
                    Your gateway to successful career opportunities and
                    professional development
                  </p>
                </div>

                <div className={styles.officeDetails}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <MapPin size={18} />
                    </div>
                    <div className={styles.detailText}>
                      <div className={styles.detailTitle}>Campus Address</div>
                      <div className={styles.detailContent}>
                        Employment &amp; Training Office
                        <br />
                        J.C Bose University of Science and Technology, YMCA
                        <br />
                        NH-2, Delhi-Mathura Road, Sector-6
                        <br />
                        Faridabad, Haryana-121006
                      </div>
                    </div>
                  </div>

                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <Phone size={18} />
                    </div>
                    <div className={styles.detailText}>
                      <div className={styles.detailTitle}>Phone Numbers</div>
                      <a href="tel:+910129-2242141" className={styles.phoneLink}>
                        +91-0129-2242141
                      </a>
                      <span className={styles.phoneDescription}>
                        Main Office Line
                      </span>
                    </div>
                  </div>

                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <Mail size={18} />
                    </div>
                    <div className={styles.detailText}>
                      <div className={styles.detailTitle}>Email Addresses</div>
                      <div className={styles.emailList}>
                        <div>
                          <a
                            href="mailto:tpo@jcboseust.ac.in"
                            className={styles.emailLink}
                          >
                            tpo@jcboseust.ac.in
                          </a>
                          <span className={styles.emailBadge}>Placements</span>
                        </div>
                        <div>
                          <a
                            href="mailto:tnpcell@jcboseust.ac.in"
                            className={styles.emailLink}
                          >
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
                    <Clock size={18} />
                    <span className={styles.hoursTitle}>Office Hours</span>
                  </div>
                  <div className={styles.hoursList}>
                    <div className={styles.hoursItem}>
                      <span>Monday - Friday</span>
                      <span className={styles.hoursTime}>
                        09:00 AM - 05:00 PM
                      </span>
                    </div>
                    <div className={styles.hoursItem}>
                      <span>Lunch Break</span>
                      <span className={styles.hoursBreak}>
                        12:30 PM - 01:30 PM
                      </span>
                    </div>
                    <div className={styles.hoursItem}>
                      <span>Saturday &amp; Sunday</span>
                      <span className={styles.hoursClosed}>Closed</span>
                    </div>
                  </div>
                </div>

                <div className={styles.responseCard}>
                  <div className={styles.responseTitle}>
                    <Shield size={14} />
                    Quick Response Times
                  </div>
                  <ul className={styles.responseList}>
                    <li>Email queries: Within 24 hours</li>
                    <li>Phone calls: Immediate assistance</li>
                    <li>Walk-in: No appointment needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <Building2 size={13} />
              Clerical Staff
            </div>
            <h2 className={styles.sectionTitle}>Meet Our Dedicated Staff</h2>
            <p className={styles.sectionDescription}>
              Experienced professionals committed to guiding your career journey
            </p>
          </div>

          <div className={styles.staffGrid} ref={staffScrollRef}>
            {staffMembers.map((staff, index) => (
              <div key={index} className={styles.staffCard}>
                <div className={styles.staffHeader}>
                  <div className={styles.staffAvatar}>
                    <Users size={22} />
                  </div>
                  <div className={styles.staffName}>{staff.name}</div>
                  <div className={styles.staffDesignation}>
                    {staff.designation}
                  </div>
                </div>

                <div className={styles.staffContent}>
                  <div className={styles.bestForCard}>
                    <div className={styles.bestForLabel}>Best For</div>
                    <div className={styles.bestForText}>{staff.bestFor}</div>
                  </div>

                  <div className={styles.contactInfo}>
                    <a href={`mailto:${staff.email}`} className={styles.contactLink}>
                      <Mail size={14} />
                      {staff.email}
                    </a>
                    <a href={`tel:${staff.contact}`} className={styles.contactLink}>
                      <Phone size={14} />
                      {staff.contact}
                    </a>
                    <div className={styles.availability}>
                      <Clock size={14} />
                      {staff.availability}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      (window.location.href = `tel:${staff.contact}`)
                    }
                    className={styles.contactButton}
                  >
                    <Phone size={14} />
                    Contact Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.staffDots}>
            {staffMembers.map((_, index) => (
              <button
                key={index}
                className={`${styles.staffDot} ${
                  activeStaffIndex === index ? styles.staffDotActive : ""
                }`}
                onClick={() => scrollToStaff(index)}
                aria-label={`Go to staff ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <HelpCircle size={13} />
              FAQ
            </div>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionDescription}>
              Quick answers to common queries
            </p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={styles.faqCard}
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
              >
                <div className={styles.faqHeader}>
                  <div className={styles.faqIcon}>
                    <HelpCircle size={16} />
                  </div>
                  <div className={styles.faqHeaderContent}>
                    <span className={styles.faqCategory}>{faq.category}</span>
                    <div className={styles.faqQuestion}>{faq.question}</div>
                  </div>
                  <div className={styles.faqChevron}>
                    {expandedFaq === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </div>
                <div
                  className={styles.faqAnswerWrapper}
                  style={{
                    maxHeight: expandedFaq === index ? "300px" : "0px",
                    marginTop: expandedFaq === index ? "12px" : "0px",
                  }}
                >
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <MapPin size={13} />
              Location
            </div>
            <h2 className={styles.sectionTitle}>Visit Our Campus</h2>
            <p className={styles.sectionDescription}>
              J.C Bose University of Science and Technology, YMCA
            </p>
          </div>

          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.714667450316!2d77.3158949!3d28.3674749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc71f6e9f557%3A0xeb301eec9ff18517!2sJ.C.%20Bose%20University%20of%20Science%20and%20Technology%2C%20YMCA%20(Formerly%20YMCA%20UST)!5e0!3m2!1sen!2sin!4v1761387363066!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            />
          </div>

          <div className={styles.locationGrid}>
            {locationCards.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className={styles.locationCard}>
                  <div className={styles.locationIcon}>
                    <IconComponent size={20} />
                  </div>
                  <div className={styles.locationTitle}>{item.title}</div>
                  <div className={styles.locationDescription}>
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBackground} />
            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>
                <Sparkles size={13} />
                Ready to Connect?
              </div>
              <h2 className={styles.ctaTitle}>Have Questions?</h2>
              <p className={styles.ctaDescription}>
                Our team is here to help you with placements, internships, and
                career guidance. Reach out to us today!
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaButton}
                  onClick={() =>
                    (window.location.href = "mailto:tpo@jcboseust.ac.in")
                  }
                >
                  <Mail size={14} />
                  Email for Placement
                </button>
                <button
                  className={styles.ctaButton}
                  onClick={() =>
                    (window.location.href = "mailto:tnpcell@jcboseust.ac.in")
                  }
                >
                  <Mail size={14} />
                  Email for Internship
                </button>
                <button
                  className={styles.ctaButton}
                  onClick={() =>
                    (window.location.href = "tel:+910129-2242141")
                  }
                >
                  <Phone size={14} />
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

