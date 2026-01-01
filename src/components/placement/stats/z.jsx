import styles from './placementStats.module.css';

const PlacementStats = () => {
  const highlights = [
    { icon: '📈', label: 'Placement Rate', value: '91%', color: 'blue' },
    { icon: '💰', label: 'Highest Package', value: '47 LPA', color: 'gold' },
    { icon: '🎯', label: 'Total Offers', value: '780+', color: 'purple' },
    { icon: '🏢', label: 'Companies Visited', value: '150+', color: 'green' },
  ];

  const tips = [
    {
      icon: '💪',
      title: 'Build a Strong Profile',
      description: 'Focus on academics, projects, and extracurricular activities'
    },
    {
      icon: '🔍',
      title: 'Research Job/Company',
      description: 'Understand company culture, values, and requirements thoroughly'
    },
    {
      icon: '⏰',
      title: 'Be Punctual',
      description: '100% attendance mandatory in pre-placement talks'
    },
    {
      icon: '🤝',
      title: 'Network with Alumni',
      description: 'Connect with alumni for insights and guidance'
    },
    {
      icon: '😊',
      title: 'Be Confident',
      description: 'Stay positive and believe in yourself throughout the process'
    },
    {
      icon: '✨',
      title: 'Believe in Yourself',
      description: 'Your preparation and hard work will pay off'
    }
  ];

  const faqs = [
    {
      question: 'Number of resumes sent?',
      answer: 'Determined by CGPA, skills, and employability assessment'
    },
    {
      question: 'Internship eligibility?',
      answer: 'Interns from on-campus placements are ineligible for future intern positions, irrespective of stipend'
    },
    {
      question: 'Can I go back to a company?',
      answer: 'Starting at a company means you can\'t go back'
    },
    {
      question: 'Core branch requirements?',
      answer: 'Must intern in related companies off-campus; on-campus can intern in any company'
    },
    {
      question: 'Work from home policy?',
      answer: 'Will not be considered as industrial training'
    },
    {
      question: 'Placement talk attendance?',
      answer: 'Students absent from talks are barred from future participation'
    },
    {
      question: 'Same-day results?',
      answer: 'If unavailable, candidates can participate in successive drives until final results'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Placement Statistics & Tips</h2>
        <p className={styles.subtitle}>Key metrics and success strategies</p>
      </div>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsGrid}>
          {highlights.map((item, index) => (
            <div key={index} className={`${styles.highlightCard} ${styles[item.color]}`}>
              <div className={styles.highlightIcon}>{item.icon}</div>
              <div className={styles.highlightValue}>{item.value}</div>
              <div className={styles.highlightLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tipsSection}>
        <h3 className={styles.sectionTitle}>Placement Tips for Success</h3>
        <div className={styles.tipsGrid}>
          {tips.map((tip, index) => (
            <div key={index} className={styles.tipCard}>
              <div className={styles.tipIcon}>{tip.icon}</div>
              <h4 className={styles.tipTitle}>{tip.title}</h4>
              <p className={styles.tipDescription}>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqCard}>
              <div className={styles.faqQuestion}>
                <span className={styles.faqIcon}>❓</span>
                {faq.question}
              </div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.noteSection}>
        <div className={styles.noteCard}>
          <div className={styles.noteIcon}>📝</div>
          <div className={styles.noteContent}>
            <h4>Important Note</h4>
            <p>"Letters of recommendation can be provided without limit, but the final NOC will always be issued just once."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementStats;
