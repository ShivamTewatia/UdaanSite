// import { Quote, Linkedin, Mail} from 'lucide-react';
// import styles from './aboutHead.module.css';
// import { useHashScroll } from "../hooks/useHashScroll"

// const AboutHead = () => {
//   useHashScroll();
//   return (
//     <section id='founder' className={styles['meet-founder-section']}>
//       <div className={styles['founder-container']}>
//         <div className={styles['founder-header']}>
//           <Quote size={48} className={styles['quote-icon']} />
//           <h2 className={styles['founder-title']}>Meet Our Head</h2>
//           <div className={styles['founder-underline']}></div>
//         </div>

//         <div className={styles['founder-content']}>
//           <div className={styles['founder-image-wrapper']}>
//             <div className={styles['founder-image-placeholder']}>
//               <div className={styles['image-overlay']}><img src="images/aboutUs/rajesh.png" alt="founder" /></div>
//             </div>
//           </div>
//           <div className={styles['founder-info']}>
//             <blockquote className={styles['founder-quote']}>
//               "Education is not just about imparting knowledge; it's about empowering dreams and transforming lives."
//             </blockquote>
//             <p className={styles['founder-name']}>- Prof. Rajesh Kumar Ahuja</p>
//             <div className={styles['founder-details']}>
//               <p className={styles['founder-bio']}>
//                 With a vision to bridge the gap between academic excellence and industry success, 
//                 our Training and Placement Cell was established to guide students from classroom 
//                 to corporate excellence. Our commitment to holistic development and career readiness 
//                 has transformed thousands of lives.
//               </p>
//               <div className={styles['founder-credentials']}>
//                 <p className={styles['founder-designation']}>Employment And Training Officer, JC Bose University</p>
//               </div>
//               <div className={styles['founder-social-links']}>
//                 <a
//                   href="https://www.linkedin.com/in/tpo-tpo-7773ba263"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`${styles['social-link']} ${styles['linkedin-link']}`}
//                   aria-label="LinkedIn Profile"
//                 >
//                   <Linkedin size={20} />
//                   <span>LinkedIn</span>
//                 </a>

//                 <a
//                   href="mailto:rajeshahuja@jcboseust.ac.in"
//                   className={`${styles['social-link']} ${styles['email-link']} ${styles['instagram-link']}`}
//                   aria-label="Send Email"
//                 >
//                   <Mail size={20} />
//                   <span>Email</span>
//                 </a>
//               </div>
//           </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHead;
import { Quote, Linkedin, Mail } from 'lucide-react';
import styles from './aboutHead.module.css';
import { useHashScroll } from "../hooks/useHashScroll";

const AboutHead = () => {
  useHashScroll();
  return (
    <section className={styles['meet-founder-section']}>
      <div className={styles['founder-container']}>

        <div className={styles['founder-header']}>
          <Quote size={32} className={styles['quote-icon']} />
          <h2 className={styles['founder-title']}>Meet Our Head</h2>
          <div className={styles['founder-underline']}></div>
        </div>

        <div className={styles['founder-content']}>

          <div className={styles['founder-image-wrapper']}>
            <div className={styles['founder-image-placeholder']}>
              <div className={styles['image-overlay']}>
                <img src="images/aboutUs/rajesh.png" alt="Prof. Rajesh Kumar Ahuja" />
              </div>
            </div>
          </div>

          <div className={styles['founder-info']}>
            <blockquote className={styles['founder-quote']}>
              "Education is not just about imparting knowledge; it's about empowering dreams and transforming lives."
            </blockquote>

            <p className={styles['founder-name']}>- Prof. Rajesh Kumar Ahuja</p>

            <div className={styles['founder-details']}>
              <p className={styles['founder-bio']}>
                With a vision to bridge the gap between academic excellence and industry success,
                our Training and Placement Cell was established to guide students from classroom
                to corporate excellence. Our commitment to holistic development and career readiness
                has transformed thousands of lives.
              </p>

              <div className={styles['founder-credentials']}>
                <p className={styles['founder-designation']}>
                  Employment And Training Officer, JC Bose University
                </p>
              </div>

              <div className={styles['founder-social-links']}>
                <a
                  href="https://www.linkedin.com/in/rajeshkumarahuja"
                  className={`${styles['social-link']} ${styles['linkedin-link']}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                  LinkedIn
                </a>
                <a
                  href="mailto:rajeshahuja@jcboseust.ac.in"
                  className={`${styles['social-link']} ${styles['email-link']}`}
                  aria-label="Send Email"
                >
                  <Mail />
                  Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHead;

