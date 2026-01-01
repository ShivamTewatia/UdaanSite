import { GraduationCap, Target, Award } from 'lucide-react';
import styles from './aboutWho.module.css';

const AboutWho = () => {
  const features = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Students First',
      description: 'The Training and Placement Cell at JC Bose YMCA University is committed to bridging the gap between academic excellence and professional success. We empower students to explore new opportunities across multiple fields.',
      color: '#6366F1',
    },
    {
      icon: <Target size={32} />,
      title: 'Industry Focus',
      description: 'Our comprehensive approach combines industry-aligned training programs, personality development workshops, and extensive placement support. We work closely with leading corporations across IT, consulting, and manufacturing.',
      color: '#14B8A6',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'With a proven track record of successful placements in top-tier companies, we focus on building long-term career success. We develop essential soft skills, technical expertise, and professional competencies.',
      color: '#F97316',
    }
  ];

  return (
    <section className={styles['who-we-are-section']}>
      <div className={styles['who-container']}>
        <div className={styles['who-header']}>
          <h2 className={styles['who-title']}>WHO WE ARE?</h2>
          <div className={styles['who-underline']}></div>
        </div>

        <div className={styles['features-grid']}>
          {features.map((feature, index) => (
            <div key={index} className={styles['feature-card']}>
              <div 
                className={styles['feature-icon-wrapper']}
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 
                className={styles['feature-title']}
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
              <p className={styles['feature-description']}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWho;
