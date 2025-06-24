import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import hani from "../../images/חני חמו תדמית ללא רקע.png"

const AboutMe = () => {
  const containerRef = useRef(null);
  
  const handleButtonClick = () => {
    const phoneNumber = "+972525553141";
    const message = "היי חני הגעתי מהדף שלך ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  
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
              <strong>עוד כילדה, כל יומיים עיצבתי מחדש את החדר שלי.</strong> אמא שלי אמרה שאני לא יכולה לשבת במקום - תמיד הזזתי ריהוט, החלפתי וילונות, וחיפשתי דרכים לשפר את הנראות. היום אני מבינה שזה לא היה עניין של חוסר מנוחה - זו תמיד הייתה השליחות שלי.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              כשקניתי את הבית הראשון שלי, התהליך פתח לי את העיניים. <strong>ראיתי איך זוגות מתחילים במחשבה שהם יודעים מה הם רוצים,</strong> ואז נתקעים באמצע. הם מגלים שיש הבדל עצום בין הרעיון שבראש לבין הביצוע במציאות. בדיוק שם הבנתי מה הייעוד שלי.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              <strong>אני מאמינה שכל זוג מגיע אליי עם חלום.</strong> הבעיה היא שלעיתים קרובות הם מפחדים שזה יצא יקר מדי, יימשך יותר מדי, או שבסוף זה לא יעבוד. אני כאן כדי לוודא שהחלום הזה יתממש - בלי לפוצץ תקציב, בלי לאבד חודשים יקרים, ובטח בלי להתפשר על מה שחשוב לכם באמת.
            </p>
            <div className={styles.divider}></div>
         
            
            <p className={styles.finalText}>
              אני כאן כדי  לגגרום לכם להתאהב מחדש בלחזור הביתה
            </p>
          </div>
          
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            <span className={styles.buttonIcon}>💫</span>
            בואו נדבר על בית החלומות שלכם
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;