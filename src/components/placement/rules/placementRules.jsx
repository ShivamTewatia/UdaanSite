import React, { useState, useEffect } from "react";
import styles from "./placementRules.module.css";
import { 
  AlertTriangle, 
  BookOpen, 
  Clock, 
  FileText, 
  ShieldAlert, 
  Users, 
  Bell, 
  UserCheck, 
  Briefcase, 
  Target, 
  Award,
  TrendingUp,
  FileCheck,
  Ban,
  XCircle,
  PhoneOff,
  Calendar,
  CheckCircle2,
  Info,
  ChevronDown
} from "lucide-react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 768 : true);
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isDesktop;
};

function Tabs({ value, onValueChange, children, className }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { _tabsValue: value, _tabsOnChange: onValueChange }) : child
      )}
    </div>
  );
}

function TabsList({ children, className, _tabsValue, _tabsOnChange }) {
  return (
    <div className={`${className || ""} ${styles.tabsList}`} role="tablist">
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { _tabsValue, _tabsOnChange }) : child
      )}
    </div>
  );
}

function TabsTrigger({ value, children, className, _tabsValue, _tabsOnChange }) {
  const active = _tabsValue === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => _tabsOnChange && _tabsOnChange(value)}
      className={`${styles.tabsTrigger} ${active ? styles.tabsTriggerActive : ""} ${className || ""}`}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children, className, _tabsValue }) {
  if (_tabsValue !== value) return null;
  return <div className={`${styles.tabContent} ${className || ""}`}>{children}</div>;
}

const Card = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`${styles.card} ${className}`} {...props}>
    {children}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`${styles.cardHeader} ${className}`} {...props}>
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <h3 ref={ref} className={`${styles.cardTitle} ${className}`} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <p ref={ref} className={`${styles.cardDescription} ${className}`} {...props}>
    {children}
  </p>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div ref={ref} className={`${styles.cardContent} ${className}`} {...props}>
    {children}
  </div>
));
CardContent.displayName = "CardContent";

function Badge({ variant = "default", className = "", children, ...props }) {
  const variantClass =
    variant === "destructive" ? styles.badgeDestructive : variant === "outline" ? styles.badgeOutline : styles.badgeDefault;
  return (
    <div className={`${styles.badgeBase} ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

function AccordionPair({ title, children, icon: Icon }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordionPair}>
      <button
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className={styles.accordionTriggerButton}
        type="button"
      >
        <span className={styles.accordionTriggerTitle}>
          {Icon && <Icon className={styles.accordionIcon} />}
          {title}
        </span>
        <svg
          className={`${styles.accordionChevron} ${open ? styles.accordionChevronOpen : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`${styles.accordionContentPanel} ${open ? styles.accordionContentOpen : ""}`}>{children}</div>
    </div>
  );
}

const CollapsibleSection = ({ icon: Icon, title, children, defaultOpen = false, isDesktop = false }) => {
  const [isOpen, setIsOpen] = useState(isDesktop ? true : defaultOpen);
  
  useEffect(() => {
    setIsOpen(isDesktop ? true : defaultOpen);
  }, [isDesktop, defaultOpen]);

  return (
    <div className={styles.collapsibleSection}>
      <button 
        className={`${styles.collapsibleHeader} ${isOpen ? styles.collapsibleHeaderActive : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.collapsibleHeaderLeft}>
          <div className={styles.collapsibleIcon}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <h3 className={styles.collapsibleTitle}>{title}</h3>
        </div>
        <div className={`${styles.collapsibleArrow} ${isOpen ? styles.collapsibleArrowRotated : ''}`}>
          <ChevronDown size={20} strokeWidth={2} />
        </div>
      </button>
      <div className={`${styles.collapsibleContent} ${isOpen ? styles.collapsibleContentExpanded : ''}`}>
        <div className={styles.collapsibleContentInner}>
          {children}
        </div>
      </div>
    </div>
  );
};

const RulesTraining = () => {
  const [activeTab, setActiveTab] = useState("placement");
  const isDesktop = useIsDesktop();

  const onCampusRules = [
    {
      id: "notification",
      title: "Notification & Communication",
      icon: Bell,
      points: [
        "T&P cell notifies recruitment requests through group mail, online portal, WhatsApp group and Placement Notice Board",
        "All relevant details shared by company are electronically broadcasted along with additional information",
        "It is duty of every student to regularly check messages, mails, online portal & Placement Notice Board",
        "Compliance must be done through CRs (Class Representatives)"
      ]
    },
    {
      id: "attendance",
      title: "Attendance Requirements",
      icon: UserCheck,
      points: [
        "100% attendance required in pre-placement talks/presentation",
        "Students absent in placement talks will NOT be allowed to participate in future placements",
        "Students are responsible for their attendance during any activity",
        "CRs may be given attendance for placement activities on TPO recommendation"
      ]
    },
    {
      id: "interview",
      title: "Interview Attendance - MANDATORY",
      icon: Briefcase,
      points: [
        "ALL short-listed students MUST appear for selection process/interview",
        "Any withdrawal or no-show will debar/blacklist from placement assistance",
        "Show cause notice issued against such students",
        "Students must come with parents to T&P Cell after show cause notice"
      ]
    },
    {
      id: "internship",
      title: "Internship Rules",
      icon: Award,
      points: [
        "If student selected as intern, NOT allowed to take part in any other company as intern irrespective of stipend",
        "If student has one offer for Internship with Stipend < ₹5000, then allowed to take part in Internship+FTE drive ONLY if:",
        "  - New company offers Internship > ₹10,000 AND",
        "  - FTE ≥ 6L/annum"
      ]
    },
    {
      id: "offers",
      title: "Job Offers Limit",
      icon: Target,
      points: [
        "One student allowed to secure only TWO jobs: Dream Job / Non-Dream Job",
        "Border line between Dream and Non-Dream is salary package of 5 lakhs",
        "Difference of at least 1 lakh must be there in two jobs",
        "Example: If first offer is 4.8 LPA, next offer should be more than 5.8 LPA"
      ]
    },
    {
      id: "attempts",
      title: "Maximum Attempts",
      icon: TrendingUp,
      points: [
        "FIFTEEN (15) maximum attempts given to participate in campus drives",
        "If not selected after 15 attempts, student will NOT be able to participate/apply in further campus drives"
      ]
    },
    {
      id: "shortlisting",
      title: "Resume Shortlisting",
      icon: FileCheck,
      points: [
        "For large response exceeding recruiter requirements, selection based on:",
        "- CGPA",
        "- Employability Assessment rating/grade",
        "- Attendance in pre-placement talks",
        "- Attendance in personality development & preparatory classes (including mock interviews)",
        "- Any other criteria decided by T&P cell",
        "Decision of T&P cell is final and binding on all students"
      ]
    },
    {
      id: "application",
      title: "Application Process",
      icon: FileText,
      points: [
        "All applications must go through T&P Cell in coordination with respective CRs",
        "If student doesn't apply through proper system, he/she will NOT be allowed to participate",
        "Applications can only be withdrawn if last date of application is NOT over",
        "No withdrawals after deadline - all rules including absenteeism penalty will apply",
        "Decision to apply or not by eligible students is purely their own"
      ]
    },
    {
      id: "declining",
      title: "Offer Declining Rules",
      icon: XCircle,
      points: [
        "If student gets placement offer from internship company after being selected in another company through campus placement:",
        "Student allowed to decline lower package offer ONLY when minimum difference is 5 LPA",
        "Students must join company who declares result first, irrespective of package or number of interviews given"
      ]
    },
    {
      id: "bond",
      title: "Bond/Agreement Policy",
      icon: FileCheck,
      points: [
        "If student selected in any company having bond/agreement, then CANNOT apply in any other company irrespective of salary (Dream/Non-Dream)",
        "If company doesn't have bond but wants selected students not to apply elsewhere, students must follow company rules/regulations"
      ]
    },
    {
      id: "pending",
      title: "Pending Results",
      icon: Clock,
      points: [
        "If company doesn't give final selection list on same day of campus visit, students allowed to appear in other companies on subsequent days till finally selected",
        "Students advised NOT to sign offer letters under company pressure before consulting T&P office"
      ]
    },
    {
      id: "commitment",
      title: "Commitment Policy",
      icon: CheckCircle2,
      points: [
        "Once student accepts offer, it is duty to remain committed - NO change allowed after that",
        "All students advised to take decision after proper discussion with parents/family members"
      ]
    }
  ];

  const offCampusRules = [
    "Students strictly PROHIBITED from making contact with organizations that are likely to visit or have visited campus for placement in past 3 years",
    "Students promoting or applying to companies identified as non-on-campus by T&P Cell would be debarred from applying through T&P Cell and may face strict disciplinary action",
    "If student appears/gets selected for off-campus WITHOUT informing and tries on-campus, student shall NOT be issued/provided any NOC",
    "Provisional certificates issued by COE office through T&P Cell only",
    "COE office will mention company name for which provisional certificate is issued"
  ];

  const disciplineRules = [
    {
      title: "Absenteeism",
      penalty: "₹5,000 Fine + Debarred from Placements",
      icon: Ban,
      details: [
        "First Absence: Submit logical reason to T&P cell. If not suitable, warning letter may be issued. Student must come with parents to justify reason",
        "Second Absence: Student will be fined ₹5,000 AND debarred from on-campus/off-campus placement organized by University",
        "If student withdraws nomination in middle of recruitment process, immediately de-registered from T&P office"
      ]
    },
    {
      title: "Declining Offers On-Campus",
      penalty: "Certificate Hold for 1 Year + Disciplinary Action",
      icon: XCircle,
      details: [
        "If student declines offer after getting selected through campus recruitment, his/her certificate put on hold for ONE YEAR",
        "Case forwarded to disciplinary committee for further action"
      ]
    },
    {
      title: "Malpractice & Impersonation",
      penalty: "Immediate De-registration + Disciplinary Action",
      icon: AlertTriangle,
      details: [
        "Impersonation in tests or any kind of malpractice is SERIOUS OFFENCE",
        "Such students immediately de-registered and referred to concerned authorities for disciplinary action"
      ]
    },
    {
      title: "Contacting Company Personnel",
      penalty: "De-registration + Disciplinary Action",
      icon: PhoneOff,
      details: [
        "Students must refrain from contacting company personnel when on-campus",
        "Violation attracts de-registration and suitable disciplinary action",
        "Communication with company officials ONLY through T&P Cell",
        "If student takes decision without informing T&P cell, blacklisted with immediate effect",
        "Once blacklisted: NOT allowed in ANY T&P activity and certificates on hold for at least one year"
      ]
    }
  ];

  const studentGuidelines = [
    "Continually check T&P notice board, online portal, mails, WhatsApp group and any other medium identified by T&P cell",
    "Strict action against students supplying wrong information",
    "Submit applications within CR deadline - late submissions may not be entertained",
    "Apply to organization ONLY if eligible and interested in taking up job",
    "Go through company website to judge suitability - clarify queries during company presentation only",
    "Report in time for ppt, written test and interview - late entry may not be allowed",
    "Must carry I-cards at all times - no one allowed without I-card",
    "Must carry certificate file with passport photos and resume copies (Calyxpod format)",
    "Follow FORMAL DRESS CODE - failing to follow may result in not being allowed to appear further",
    "Every student appearing for written test must compulsorily sign attendance sheet",
    "During interview, only shortlisted students and CRs on duty allowed in T&P cell",
    "Any indiscipline during placement may result in debarment from future placements",
    "Maintain silence in and around T&P cell",
    "Should not disturb functioning of various university offices",
    "Should NOT argue with company officials - any complaint taken very seriously",
    "Date/time/venue subject to changes at short notice - keep well informed by visiting T&P cell"
  ];

  const trainingDurations = [
    {
      program: "B.Tech (Mechanical, Electrical, Electronics Engg.)",
      duration: "6-7 months internship during seventh semester",
      period: "1st June to 31st December every year"
    },
    {
      program: "B.Tech (Computer Engineering, Information Technology) & MCA",
      duration: "Six months project training during eighth/sixth semester",
      period: "1st January to 30th June every year"
    },
    {
      program: "MBA",
      duration: "Six weeks project training",
      period: "June-July every year"
    },
    {
      program: "M.Sc Environmental Sciences",
      duration: "Industrial Training (4-6 weeks) at end of IInd Semester and Industrial Training/Project Work (10-12 weeks) during IVth semester",
      period: "Summer vacations & February onwards"
    }
  ];

  const requiredDocuments = [
    "Training letter issued by T & P Cell",
    "Training offer letter issued by the industry",
    "No dues certificate",
    "Photocopies of semester wise DMC",
    "Photocopies of Matriculation and Senior Secondary school certificate",
    "Personal data form",
    "CV (Calyxpod format)",
    "Formal dress Passport size photo (5 Nos.)",
    "Feedback Form",
    "Undertaking regarding training",
    "Format of Report to be submitted at the end of Training",
    "Soft Copy (pdf file) of all above documents (submit through prescribed emails)"
  ];

  const generalRules = [
    "Internships are permitted in industry, research laboratories involved in research, development and/or technology transfer",
    "Training in any institute or academy is not allowed",
    "Paid trainings where a student is paying any amount, is not allowed",
    "All internships must be approved by the T&P cell in advance",
    "All applications to the companies for training are to be made only through T&P Cell",
    "If a student does not apply through proper system, he/she will not be allowed to do training even after his/her selection",
    "In case any student does not qualify training interview and he/she is not able to arrange training then he/she will complete his/her training in the University"
  ];

  const selectionRules = [
    "There will be one person - one offer policy, irrespective of status of company",
    "If a student secures his/her training, he/she would be automatically deregistered from that day onwards for any further on campus drive for internship",
    "It will be mandatory for all short-listed students to appear for the selection process/interview. Any withdrawal/no-show will lead to debar/blacklist from placement assistance",
    "In case a company does not give its final selection list on the same day it visits the campus, then the students will be allowed to appear in other companies visiting on subsequent days till they finally get selected",
    "Students are advised not to sign offer letters under any company's pressure before consulting the T&P cell",
    "Once student accept offer of any company then it will be duty of the student to remain committed with their decision. Any change in the decision is not allowed after that",
    "Any communication with company officials is to be done through T&P Cell only. If student takes any decision without informing T&P cell then student will be blacklisted for training with immediate effect"
  ];

  const switchingRules = [
    "A trainee can switch from one company to another during his/her training only after having prior permission from T&P cell during first month of the training",
    "This is allowed only in case of any logical reason which must be discussed in T&P cell personally",
    "Required documents before start of second training: No Objection Certificate, Training Completion certificate, Assessment from Mentor, Attendance from Mentor"
  ];

  const assessmentRules = [
    "Every trainee may be attached to the project manager of the company",
    "Minimum 75% attendance is required for a student to appear for end term examination",
    "During training the students will be governed by the leave rules of company",
    "Faculty members will be deputed to assess the progress of Trainee during tenure of training",
    "Every student is required to maintain a diary of records for the work being completed in the company",
    "All students are required to submit training completion certificate and training report in prescribed format before proceeding for Training Viva",
    "If student is found absent all the times during faculty visit then he or she will not be considered for the evaluation at the end of semester"
  ];

  const marksBreakdown = [
    { category: "Assessment by Mentor (MA)", weightage: "30%" },
    { category: "Assessment by Faculty member (FA)", weightage: "40%" },
    { category: "Attendance marks (AM)", weightage: "15%" },
    { category: "Marks from T&P cell (MTPO)", weightage: "15%" }
  ];

  const attendanceMarks = [
    { range: "90% - 100%", status: "Outstanding", marks: "100% of AM" },
    { range: "80% - 89%", status: "Excellent", marks: "85% of AM" },
    { range: "75% - 79%", status: "Good", marks: "75% of AM" },
    { range: "Below 75%", status: "Average", marks: "0" }
  ];

  return (
    <div id="rules" className={styles.rulesTraining}>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <span className={styles.badge}>Official Guidelines</span>
            <h1 className={styles.heroTitle}>Rules, Training & Placement</h1>
            <p className={styles.heroSubtitle}>
              Complete policy governing campus placements and internship programs at J.C. Bose University
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className={styles.tabs}>
            <TabsList className={styles.tabsList}>
              <TabsTrigger value="placement" className={styles.tabsTrigger}>
                <ShieldAlert className={styles.iconSmall} />
                <span>Placement Rules</span>
              </TabsTrigger>
              <TabsTrigger value="training" className={styles.tabsTrigger}>
                <BookOpen className={styles.iconSmall} />
                <span>Training Programs</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="placement" className={styles.tabContent}>
              <CollapsibleSection icon={ShieldAlert} title="On-Campus Placement Rules" defaultOpen={true} isDesktop={isDesktop}>
                <p className={styles.cardDescription}>Essential policies for campus recruitment</p>
                <div className={styles.twoColumnGrid}>
                  <div>
                    {onCampusRules.slice(0, 6).map((rule) => (
                      <AccordionPair key={rule.id} title={rule.title} icon={rule.icon}>
                        <ul className={styles.ruleList}>
                          {rule.points.map((point, idx) => (
                            <li key={idx} className={styles.rulePoint}>
                              <span className={styles.bullet}>•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionPair>
                    ))}
                  </div>
                  <div>
                    {onCampusRules.slice(6, 12).map((rule) => (
                      <AccordionPair key={rule.id} title={rule.title} icon={rule.icon}>
                        <ul className={styles.ruleList}>
                          {rule.points.map((point, idx) => (
                            <li key={idx} className={styles.rulePoint}>
                              <span className={styles.bullet}>•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionPair>
                    ))}
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection icon={AlertTriangle} title="Off-Campus Placement Rules" defaultOpen={false} isDesktop={isDesktop}>
                <p className={styles.cardDescription}>Important restrictions and policies</p>
                <ul className={styles.offCampusList}>
                  {offCampusRules.map((rule, idx) => (
                    <li key={idx} className={styles.offCampusItem}>
                      <span className={styles.offCampusWarning}>⚠</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.nocBox}>
                  <p className={styles.nocText}>
                    <strong className={styles.important}>NOC Policy:</strong> NOC for off-campus will only be provided if NOT placed in on-campus
                  </p>
                </div>
              </CollapsibleSection>

              <CollapsibleSection icon={ShieldAlert} title="Discipline & Penalties" defaultOpen={false} isDesktop={isDesktop}>
                <p className={styles.cardDescription}>Violations and consequences</p>
                <div className={styles.twoColumnGrid}>
                  {disciplineRules.map((rule, idx) => {
                    const IconComponent = rule.icon;
                    return (
                      <div key={idx} className={styles.disciplineBlock}>
                        <div className={styles.disciplineHeader}>
                          <IconComponent className={styles.disciplineIcon} />
                          <div className={styles.disciplineText}>
                            <h4 className={styles.disciplineTitle}>{rule.title}</h4>
                            <Badge variant="destructive" className={styles.badgeDestructive}>
                              {rule.penalty}
                            </Badge>
                          </div>
                        </div>
                        <ul className={styles.disciplineList}>
                          {rule.details.map((detail, dIdx) => (
                            <li key={dIdx} className={styles.disciplineDetail}>
                              <span className={styles.disciplineBullet}>▸</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </CollapsibleSection>

              <CollapsibleSection icon={Users} title="Guidelines for Students" defaultOpen={false} isDesktop={isDesktop}>
                <p className={styles.cardDescription}>Important instructions to follow</p>
                <div className={styles.twoColumnGrid}>
                  <ul className={styles.guidelinesList}>
                    {studentGuidelines.slice(0, 8).map((g, idx) => (
                      <li key={idx} className={styles.guidelineItem}>
                        <span className={styles.guidelineTick}>✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.guidelinesList}>
                    {studentGuidelines.slice(8, 16).map((g, idx) => (
                      <li key={idx} className={styles.guidelineItem}>
                        <span className={styles.guidelineTick}>✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapsibleSection>
            </TabsContent>

            <TabsContent value="training" className={styles.tabContent}>
              <Card className={`${styles.card} ${styles.blueCard}`}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitleWithIcon}>
                    <Info className={styles.alertIcon} />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <p className={styles.smallText}>
                    All full time final year students of J.C. Bose University of Science & Technology, YMCA,
                    Faridabad are eligible to go for internship of six to seven months as a part of their
                    curriculum through the Training and Placement (T&P) Cell.
                  </p>
                </CardContent>
              </Card>

              <CollapsibleSection icon={Calendar} title="Training Duration & Programs" defaultOpen={true} isDesktop={isDesktop}>
                <p className={styles.cardDescription}>Program-wise internship schedules</p>
                <div className={styles.twoColumnGrid}>
                  {trainingDurations.map((prog, idx) => (
                    <div key={idx} className={styles.programBlock}>
                      <h4 className={styles.programTitle}>{prog.program}</h4>
                      <div className={styles.programMeta}>
                        <div className={styles.metaRow}>
                          <Clock className={styles.iconSmall} />
                          <span>{prog.duration}</span>
                        </div>
                        <div className={styles.metaRow}>
                          <FileText className={styles.iconSmall} />
                          <span>{prog.period}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleSection>

              <CollapsibleSection icon={FileCheck} title="Required Documents Before Training" defaultOpen={false} isDesktop={isDesktop}>
                <p className={styles.cardDescription}>Student must submit training file with following documents</p>
                <div className={styles.twoColumnGrid}>
                  <ul className={styles.docsList}>
                    {requiredDocuments.slice(0, 6).map((doc, idx) => (
                      <li key={idx} className={styles.docItem}>
                        <span className={styles.docIcon}>📄</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.docsList}>
                    {requiredDocuments.slice(6, 12).map((doc, idx) => (
                      <li key={idx} className={styles.docItem}>
                        <span className={styles.docIcon}>📄</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CollapsibleSection>

              <CollapsibleSection icon={ShieldAlert} title="General Rules for Training" defaultOpen={false} isDesktop={isDesktop}>
                <ul className={styles.generalList}>
                  {generalRules.map((r, idx) => (
                    <li key={idx} className={styles.generalItem}>
                      <span className={styles.generalIndex}>{idx + 1}.</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <CollapsibleSection icon={Target} title="Selection Process & Reporting Rules" defaultOpen={false} isDesktop={isDesktop}>
                <ul className={styles.selectionList}>
                  {selectionRules.map((r, idx) => (
                    <li key={idx} className={styles.selectionItem}>
                      <span className={styles.selectionBullet}>▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <CollapsibleSection icon={TrendingUp} title="Switching from One Organization to Another" defaultOpen={false} isDesktop={isDesktop}>
                <ul className={styles.switchList}>
                  {switchingRules.map((r, idx) => (
                    <li key={idx} className={styles.switchItem}>
                      <span className={styles.switchBullet}>▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <CollapsibleSection icon={Award} title="Attendance, Monitoring & Assessment" defaultOpen={false} isDesktop={isDesktop}>
                <ul className={styles.assessmentList}>
                  {assessmentRules.map((r, idx) => (
                    <li key={idx} className={styles.assessmentItem}>
                      <span className={styles.assessmentBullet}>▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <Card className={`${styles.card} ${styles.blueCard}`}>
                <CardHeader className={styles.cardHeader}>
                  <CardTitle className={styles.cardTitleWithIcon}>
                    <Award className={styles.alertIcon} />
                    Training Marks Calculation
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.marksSection}>
                    <h4 className={styles.sectionHeading}>Sessional Marks Breakdown</h4>
                    <div className={styles.marksGrid}>
                      {marksBreakdown.map((item, idx) => (
                        <div key={idx} className={styles.marksCard}>
                          <div className={styles.marksWeight}>{item.weightage}</div>
                          <div className={styles.marksLabel}>{item.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.attendanceSection}>
                    <h4 className={styles.sectionHeading}>Attendance Marks Criteria</h4>
                    <div className={styles.attendanceTableWrapper}>
                      <table className={styles.attendanceTable}>
                        <thead>
                          <tr className={styles.tableHeader}>
                            <th className={styles.th}>Attendance Range</th>
                            <th className={styles.th}>Status</th>
                            <th className={styles.th}>Marks Given</th>
                          </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                          {attendanceMarks.map((am, idx) => (
                            <tr key={idx} className={styles.tr}>
                              <td className={styles.td}>{am.range}</td>
                              <td className={styles.td}>
                                <Badge variant="outline" className={styles.badgeInline}>
                                  {am.status}
                                </Badge>
                              </td>
                              <td className={`${styles.td} ${styles.bold}`}>{am.marks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className={styles.formulaBox}>
                    <h4 className={styles.sectionHeading}>Final Calculation Formulas</h4>
                    <div className={styles.formulaList}>
                      <div className={styles.formulaRow}>
                        <strong className={styles.formulaLabel}>Sessional Marks =</strong> 30% (MA) + 40% (FA) + 15% (AM) + 15% (MTPO)
                      </div>
                      <div className={styles.formulaRow}>
                        <strong className={styles.formulaLabel}>Practical Marks =</strong> 50% (Project File & its contents) + 50% (Presentation & communication)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${styles.card} ${styles.offCampusCard}`}>
                <CardContent className={styles.cardContent}>
                  <div className={styles.noticeRow}>
                    <AlertTriangle className={styles.alertIconLarge} />
                    <div>
                      <h4 className={styles.noticeTitle}>⚠️ Important Notice</h4>
                      <p className={styles.smallText}>
                        <span className={styles.important}>T&P cell will not forward training marks</span> of students who do not submit their training
                        completion certificate. All communications must be done at prescribed email IDs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RulesTraining;
