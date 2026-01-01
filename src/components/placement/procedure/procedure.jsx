import styles from './procedure.module.css';
import { Mail, ClipboardList, Megaphone, UserCheck, Send, Calendar, GraduationCap, FileText, ScrollText, CheckCircle, Pin, CheckSquare, ClipboardCheck } from 'lucide-react';

const ProcedureGuidelines = () => {
  const steps = [
    {
      Icon: Mail,
      title: 'Initial Invitations',
      description: 'Companies receive invitations from T&P Cell to participate in campus recruitment'
    },
    {
      Icon: ClipboardList,
      title: 'Requirements Listing',
      description: 'Interested companies list their recruitment requirements and criteria'
    },
    {
      Icon: Megaphone,
      title: 'Student Communication',
      description: 'Requirements are communicated to students via POD, WhatsApp, and email'
    },
    {
      Icon: UserCheck,
      title: 'Registration on POD',
      description: 'Students register on POD platform if interested in the company'
    },
    {
      Icon: Send,
      title: 'Data Submission',
      description: 'Student data and resumes are submitted to companies'
    },
    {
      Icon: Calendar,
      title: 'Timeline Notices',
      description: 'Placement round timelines and schedules are issued to students'
    }
  ];

  const generalGuidelines = [
    'The placement policy is applicable to all students registered for campus placements and internships and is to be followed during the entire duration of the placement season',
    'Students not interested in placement are advised not to register for placement'
  ];

  const eligibility = [
    'All full time final year students of J.C. Bose University of Science & Technology, YMCA, Faridabad (University Teaching Departments) are eligible to participate in the recruitment process for placements through the Training and Placement Cell (T&P Cell)'
  ];

  const registrationProcess = [
    'Students are advised to share their personal information on online platform provided by T&P cell',
    'Personal information must contain updated CV (Calyxpod format), scanned copy of all certificates, Photograph and undertaking along with a signed declaration that student will abide by the rules and policy of T&P Cell',
    'Undertaking must be signed by all students that he/she wants to opt for either Placement from University or interested for Govt. Job or interested for higher studies',
    'Only those students, who have opted for placement, will be allowed to participate in recruitment process through T&P Cell',
    'Undertaking by students along with the parents has to be submitted that they have read & accept Training and Placement Policy (Form P01)',
    'The relevant details shared by company are electronically broadcasted to all the students along with the other additional information furnished by the company'
  ];

  const requirements = [
    {
      title: 'Grades & Eligibility',
      Icon: GraduationCap,
      items: [
        'Maintain optimum grades for on & off-campus placements',
        'Clear all backlogs before placement season',
        'CGPA will be a key selection criterion',
        'No dues certificate from institute required for placed students (on/off campus) unless signed offer letter submitted'
      ]
    },
    {
      title: 'Documentation',
      Icon: FileText,
      items: [
        'Photocopies of semester-wise DMCs',
        'Personal data form (fully completed)',
        'Undertaking signed by student and parents (Form P01)',
        'No dues certificate',
        'All certificates properly scanned and uploaded'
      ]
    },
    {
      title: 'Resume/CV',
      Icon: ScrollText,
      items: [
        'Follow Calyxpod format strictly',
        'Add all relevant skills and projects',
        'Ensure CV fits on a single page',
        'Keep it updated and professional',
        'Include accurate contact information',
        'Highlight relevant achievements'
      ]
    },
    {
      title: 'Consent & Communication',
      Icon: CheckCircle,
      items: [
        'Sign consent form for campus placement participation (2025-2026)',
        'Form P01 - Undertaking by student and parents mandatory',
        'Confirm acceptance of all T&P policies',
        'Submit before placement season begins',
        'Regularly check T&P notice board, online portal, WhatsApp group, and emails',
        'All applications to companies must go through T&P Cell only'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <span className={styles.badge}>Official Guidelines</span>
        <h1 className={styles.heroTitle}>Placement Procedure</h1>
        <p className={styles.heroSubtitle}>
          Step-by-step guide to campus recruitment process and important requirements for students
        </p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Steps Section */}
        <section className={styles.stepsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Placement Process Steps</h2>
            <p className={styles.sectionSubtitle}>Follow these steps for successful campus placement</p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => {
              const IconComponent = step.Icon;
              return (
                <div key={index} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepIcon}>
                    <IconComponent size={56} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* General Guidelines */}
        <section className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div className={styles.infoCardIcon}>
                <Pin size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.infoCardTitle}>General Guidelines</h3>
            </div>
            <ul className={styles.infoList}>
              {generalGuidelines.map((item, index) => (
                <li key={index} className={styles.infoItem}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div className={styles.infoCardIcon}>
                <CheckSquare size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.infoCardTitle}>Eligibility Criteria</h3>
            </div>
            <ul className={styles.infoList}>
              {eligibility.map((item, index) => (
                <li key={index} className={styles.infoItem}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Registration Process */}
        <section className={styles.processSection}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>
              <div className={styles.infoCardIcon}>
                <ClipboardCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.infoCardTitle}>Registration Process</h3>
            </div>
            <ul className={styles.processList}>
              {registrationProcess.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Important Requirements */}
        <section className={styles.requirementsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Important Requirements</h2>
            <p className={styles.sectionSubtitle}>Key requirements for successful placement participation</p>
          </div>
          <div className={styles.requirementsGrid}>
            {requirements.map((req, index) => {
              const IconComponent = req.Icon;
              return (
                <div key={index} className={styles.requirementCard}>
                  <div className={styles.reqHeader}>
                    <div className={styles.reqIcon}>
                      <IconComponent size={48} strokeWidth={1.5} />
                    </div>
                    <h4 className={styles.reqTitle}>{req.title}</h4>
                  </div>
                  <ul className={styles.reqList}>
                    {req.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProcedureGuidelines;
