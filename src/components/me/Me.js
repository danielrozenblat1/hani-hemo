import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import hani from "../../images/חני חמו תדמית ללא רקע.png"

const AboutMe = () => {
  const containerRef = useRef(null);
  
  // ScrollReveal configuration
  useEffect(() => {
    if (containerRef.current) {
      // Since ScrollReveal is not available in this environment, 
      // we'll use a simple intersection observer for the reveal effect
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        },
        { threshold: 0.2 }
      );

      const revealElements = containerRef.current.querySelectorAll(`.${styles.revealItem}`);
      revealElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.section} id="מי-אני">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={hani} alt="חני חמו" className={styles.image} />
        </div>
        
        <div className={`${styles.content} ${styles.revealItem}`}>
          <h2 className={styles.mainTitle}>נעים להכיר, חני חמו</h2>
          
          <div className={styles.quoteContainer}>
            <p className={styles.quote}>
              "כל פרויקט הוא כמו חליפה שתפורה במיוחד עבורכם"
            </p>
          </div>
          
          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              <strong>אחרי שנים של עבודה עם זוגות שרוצים בית שבאמת משקף אותם,</strong> אני יודעת בדיוק איך להפוך את החזון שלכם למציאות. כהנדסאית אדריכלות ועיצוב פנים מצטיינת, אני מתמחה בלקחת בתים שמרגישים "לא בדיוק נכון" ולהפוך אותם למקום שאתם אוהבים לחזור אליו כל יום.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              מה שמייחד אותי? אני לא רק מעצבת - אני השותפה שלכם לתהליך. בעוד שאחרים נותנים לכם רעיונות ומשאירים אתכם לבד, אני כאן לכל התהליך: מהרגע שאנחנו מתכננים ועד הרגע שאתם מקבלים את המפתח לבית המושלם שלכם.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              <strong>למה זוגות בוחרים בי?</strong> כי אני מבינה שזה לא רק עיצוב - זה הבית שלכם, המקום שבו תבנו את החיים שלכם. אני מקשיבה לחלומות שלכם, מבינה את האתגרים שלכם, ומוודאת שכל פרט יעבוד בשבילכם בעוד שנים.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              <strong>התוצאות מדברות בעצמן:</strong> הופעתי במגזיני עיצוב מובילים, הפכתי לעוסק מורשה תוך חצי שנה, ורוב הלקוחות שלי מגיעים בהמלצות. הוזמנתי למפעלים בחו"ל ולתערוכות מקצועיות - אבל הכי חשוב לי זה לראות את הפנים שלכם כשאתם נכנסים לבית החדש.
            </p>
            
            <p className={styles.finalText}>
              מוכנים להפוך את הבית שלכם למקום שתמיד חלמתם עליו?
            </p>
          </div>
          
          <button className={styles.ctaButton}>
            <span className={styles.buttonIcon}>🏠</span>
            בואו נעצב יחד את הבית של החלומות שלכם
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;