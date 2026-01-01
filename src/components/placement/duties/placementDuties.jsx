import styles from './placementDuties.module.css';
import { Users, GraduationCap, UserCheck, Target, Scale, FileText } from 'lucide-react';

const DutiesCommittees = () => {
  const crDuties = [
    'To educate 3rd year and final year students about rules and regulations governing training and placement process',
    'To help in preparing student database of final year students for training/placement purpose',
    'To create final year group for quick information spread related to training and placement activities',
    'To suggest companies to which invitation needs to be sent for training and placement purpose',
    'To take good care of company officials by arranging boarding and lodging facility in the University',
    'Do venue management for PPT/online test/written test/GD/interview',
    'To ensure attendance of all the registered/shortlisted students in PPT, test, GD and interview',
    'To provide list of students appearing for placement for a company to T&P cell for attendance benefit',
    'To ensure smooth conduct of PPTs, online/written tests',
    'To ensure that the students come in formal dress on day of company visit',
    'To maintain decorum in and around T&P cell and Report matters of indiscipline to T&P cell',
    'Any deviation by CR from the process and policies governing training and placement shall invite strict disciplinary action'
  ];

  const facultyCoordinatorDuties = [
    'To coordinate for all Training & Placement activities',
    'To arrange data of new companies through reference or personal network',
    'To motivate students for active participation in all activities initiated by T&P cell',
    'To coordinate for CR selection process for respective departments',
    'To ensure timely availability as per duties assigned during campus drive, till the time it gets over',
    'To inform in advance in case of non-availability for any reasons and to provide substitute in coordination with Department chairman\'s approval',
    'To maintain the discipline of students during pre-placement talks/GD/interview etc.'
  ];

  const teacherDuties = [
    'To ensure availability as per schedule / circular issued from T&P cell',
    'All teachers have to mark attendance of students in prescribed format during campus drive (Form P03)',
    'To prepare hard copy of attendance of all the registered/short listed students in PPT, test, GD and interview with the help of CRs',
    'To ensure smooth conduct of PPTs, online/written tests, GD and Interview',
    'To maintain decorum in and around PPT Room, online/written test rooms and T&P Cell, and Report matters of indiscipline to TPO if any',
    'To be on duty even before or after working hours till company officials are present in the campus',
    'If you may want to leave in between due to any reasons, permission to be taken from TPO',
    'To mark in time and out time in the attendance register at T&P cell for records'
  ];

  const studentCommitteeDuties = [
    'The student placement committee needs to ensure that they continuously work in tandem with the Training and Placement office',
    'Providing the right launch-pad for the TPO activities which directly/indirectly impact the placement working',
    'This team needs to drive the allied activities for the TPO that have direct/indirect impact on the TPO working',
    'Activities may include conducting alumni/leadership talks, social media outreach, physical outreach, admin activities',
    'Continuous website improvement and any other activity that can impact TPO drives'
  ];

  const disciplinaryCommittee = [
    'Dean Student Welfare',
    'Dean Academic Affairs',
    'Controller of Examination',
    'Proctor',
    'T&P Officer'
  ];

  const disciplinaryDuties = [
    'To provide solution in cases where any student is breaking rules',
    'Handle cases where students get selected through on campus drives but accept other offer off campus',
    'Take action if student hides any important information',
    'Address situations where student takes any decision which may affect image of university',
    'Any case or situation of a student(s) or company(s) that needs consideration can be forwarded to this committee by the T&P cell'
  ];

  const grievanceCommittee = [
    'Placement Officer',
    'Assistant Training & Placement Officer',
    'Respective Departmental Faculty Placement Coordinator'
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <div className={styles.heroHeader}>
          <div className={styles.heroSection}>
            <span className={styles.badge}>Official Guidelines</span>
            <h1 className={styles.heroTitle}>Duties & Committees</h1>
            <p className={styles.heroSubtitle}>
              Roles, responsibilities, and organizational structure of T&P Cell
            </p>
          </div>
        </div>

        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Users className={styles.sectionIcon} />
            <div className={styles.sectionHeaderContent}>
              <h2 className={styles.sectionTitle}>Duties of CR (Class Representative)</h2>
              <p className={styles.sectionNote}>
                Each class must have four CRs (two boys and two girls). These CRs are nominated/elected 
                by class students on the basis of voting.
              </p>
            </div>
          </div>
          <div className={styles.dutiesGrid}>
            {crDuties.map((duty, index) => (
              <div key={index} className={styles.dutyCard}>
                <span className={styles.dutyNumber}>{index + 1}</span>
                <p className={styles.dutyText}>{duty}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <GraduationCap className={styles.sectionIcon} />
            <div className={styles.sectionHeaderContent}>
              <h2 className={styles.sectionTitle}>Duties of Departmental Faculty Placement Coordinators</h2>
              <p className={styles.sectionNote}>
                Nominated by Chairperson of all Departments and appointed in T&P Cell after approval 
                of Hon'ble Vice Chancellor.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <ul className={styles.dutyList}>
              {facultyCoordinatorDuties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
        </section>

        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <UserCheck className={styles.sectionIcon} />
            <div className={styles.sectionHeaderContent}>
              <h2 className={styles.sectionTitle}>Duties of Teachers During Campus Drive</h2>
              <p className={styles.sectionNote}>
                Names of Teachers for duty for campus drives are nominated by Chairperson of Departments.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <ul className={styles.dutyList}>
              {teacherDuties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
        </section>

        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Target className={styles.sectionIcon} />
            <div className={styles.sectionHeaderContent}>
              <h2 className={styles.sectionTitle}>Student Placement Committee</h2>
              <p className={styles.sectionNote}>
                Roles and Responsibilities of the Student Placement Committee
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <ul className={styles.dutyList}>
              {studentCommitteeDuties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
        </section>

        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Scale className={styles.sectionIcon} />
            <div className={styles.sectionHeaderContent}>
              <h2 className={styles.sectionTitle}>Disciplinary Committee</h2>
              <p className={styles.sectionNote}>
                Committee members and their responsibilities
              </p>
            </div>
          </div>
          
          <div className={styles.committeeSection}>
            <div className={styles.committeeBadge}>Committee Members</div>
            <div className={styles.membersGrid}>
              {disciplinaryCommittee.map((member, index) => (
                <div key={index} className={styles.memberCard}>
                  <div className={styles.memberIndex}>{index + 1}</div>
                  <div className={styles.memberRole}>{member}</div>
                </div>
              ))}
            </div>

            <div className={styles.dutiesSubsection}>
              <div className={styles.committeeBadge}>Committee Duties</div>
            <div className={styles.card}>
              <ul className={styles.dutyList}>
                {disciplinaryDuties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </section>

        
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <FileText className={styles.sectionIcon} />
            <div className={styles.sectionHeaderContent}>
              <h2 className={styles.sectionTitle}>Grievance Committee (T&P Cell)</h2>
              <p className={styles.sectionNote}>
                To handle problems of students related to placement
              </p>
            </div>
          </div>
          
          <div className={styles.committeeSection}>
            <div className={styles.committeeBadge}>Committee Members</div>
            <div className={styles.membersGrid}>
              {grievanceCommittee.map((member, index) => (
                <div key={index} className={styles.memberCard}>
                  <div className={styles.memberIndex}>{index + 1}</div>
                  <div className={styles.memberRole}>{member}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      <div className={styles.importantNote}>
        <FileText className={styles.noteIcon} />
        <div className={styles.noteContent}>
            <h3 className={styles.noteTitle}>Important Notice</h3>
            <p className={styles.noteText}>
              All communications must be done on prescribed email IDs. Any deviation from the processes 
              and policies shall invite strict disciplinary action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutiesCommittees;

