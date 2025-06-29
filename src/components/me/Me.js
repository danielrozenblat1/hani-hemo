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
  
  useEffect(() => {
    if (containerRef.current) {
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
          <h2 className={styles.mainTitle}>נעים מאוד, חני חמו</h2>
        
          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              עוד לפני שהבנתי מה זה אומר "עיצוב פנים", הבנתי דבר אחד - אין כמו התחושה של בית שהוא באמת שלך. לא רק קירות, אלא מקום מדויק לצרכים שלך, לחלומות שלך, לאורח החיים שלך.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              כנראה שזה לא מפתיע שמגיל צעיר מצאתי את עצמי מזיזה רהיטים, משנה וילונות ומדמיינת איך אפשר לשדרג כל חלל. בהמשך, זה הפך למקצוע. סיימתי את לימודיי כהנדסאית אדריכלות ועיצוב פנים בהצטיינות, ועברתי לעבוד במשרדי אדריכלות מובילים.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              אחרי שצברתי ניסיון, הבנתי שליווי אישי וצמוד זה לא מותרות – זו הדרך היחידה להפוך את התהליך למהנה, מדויק ובעיקר - כזה שמונע טעויות יקרות. כך נולד <strong>סטודיו חני חמו לעיצוב פנים</strong>. מאז, עשרות בתים עברו תחת הידיים שלי - מדירות קבלן, דרך בתים פרטיים ועד משרדים.
            </p>
            <div className={styles.divider}></div>
            
            <p className={styles.paragraph}>
              היום, מעבר לתכנון ועיצוב פנים, אני מתמחה במציאת פתרונות יצירתיים לתקלות תכנוניות, ליווי מקיף של שיפוצים, הום סטיילינג, והגשת תוכניות לשינויי דיירים בדירות קבלן. כל פרויקט מתחיל מהבנה עמוקה של האנשים שמאחורי הבית – אין נוסחאות קבועות, אין עיצובים גנריים – הכל מותאם אישית, כמו חליפה שתפורה בדיוק עבורכם.
            </p>
            <div className={styles.divider}></div>
         
            <p className={styles.finalText}>
              המטרה שלי פשוטה: שתכנסו הביתה בכל פעם מחדש ותרגישו – זה שלי.
            </p>
          </div>
          
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            <span className={styles.buttonIcon}>💫</span>
            בואו נדבר על הבית שלכם
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
