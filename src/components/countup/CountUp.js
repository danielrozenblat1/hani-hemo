import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const StatsComponent = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const stats = [
    { target: 400, description: 'מעל 400 לקוחות שעברו אצלי' },
    { target: 350, description: 'מעל 350 מלקוחותיי שהכשרתי' },
    { target: 35000, description: 'מעל 35 אלף עוקבים ברשתות' }
  ];

  const animateNumber = (index, targetNumber, duration = 2500) => {
    const startTime = performance.now();
    const startNumber = 0;
    
    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(startNumber + (targetNumber - startNumber) * easeOut);
      
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = currentNumber;
        return newCounts;
      });
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };
    
    requestAnimationFrame(updateNumber);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Start animations with different delays
            setTimeout(() => animateNumber(0, stats[0].target, 2500), 300);
            setTimeout(() => animateNumber(1, stats[1].target, 2300), 500);
            setTimeout(() => animateNumber(2, stats[2].target, 3000), 700);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const formatNumber = (num) => {
    return num >= 1000 ? num.toLocaleString('he-IL') : num.toString();
  };

  return (
    <div className={styles.statsWrapper} ref={containerRef}>
      <div className={styles.waveBackground}>
        <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill}></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill}></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill}></path>
        </svg>
      </div>
      
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statItem} ${isVisible ? styles.animate : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={styles.statNumber}>
              +{formatNumber(counts[index])}
            </div>
            <div className={styles.statDescription}>
              {stat.description}
            </div>
            <div className={styles.floatingParticles}>
              <div className={styles.particle}></div>
              <div className={styles.particle}></div>
              <div className={styles.particle}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.backgroundEffects}>
        <div className={`${styles.glowOrb} ${styles.glowOrb1}`}></div>
        <div className={`${styles.glowOrb} ${styles.glowOrb2}`}></div>
        <div className={`${styles.glowOrb} ${styles.glowOrb3}`}></div>
      </div>
    </div>
  );
};

export default StatsComponent;