import React, { useEffect, useState, useRef } from 'react';
import styles from './Parralex.module.css';

const ScrollGallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  // תמונות עיצוב פנים באיכות הגבוהה ביותר עם טקסטים בעברית
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&q=100&auto=format&dpr=2',
      alt: 'Modern living room',
      title: 'מרחב מגורים מודרני',
      description: 'עיצוב סלון עכשווי המשלב קווים נקיים, גוונים נייטרליים ורהיטים מתוחכמים היוצרים איזון מושלם בין נוחות לסטייל.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&q=100&auto=format&dpr=2',
      alt: 'Scandinavian bedroom',
      title: 'שלווה סקנדינבית',
      description: 'עיצוב חדר שינה מינימליסטי בהשראת האסתטיקה הנורדית, המציג חומרים טבעיים, מרקמים רכים ופלטת צבעים מרגיעה לרגיעה מוחלטת.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&q=100&auto=format&dpr=2',
      alt: 'Modern kitchen',
      title: 'מצוינות קולינרית',
      description: 'עיצוב מטבח חדשני המשלב פונקציונליות עם אלגנטיות, כולל מכשירי חשמל איכותיים ופתרונות אחסון חדשניים לחיים מודרניים.'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&h=1080&fit=crop&q=100&auto=format&dpr=2',
      alt: 'Luxury bathroom',
      title: 'מפלט כמו ספא',
      description: 'מקלחת יוקרתית עם גימורים איכותיים, אביזרים אלגנטיים ותאורה מתוחכמת ההופכת את השגרה היומית לחוויית ספא.'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&q=100&auto=format&dpr=2',
      alt: 'Cozy reading corner',
      title: 'מקדש קריאה',
      description: 'פינת קריאה אינטימית המעוצבת לנוחות והשראה, כוללת ישיבה רכה, תאורה חמה ואלמנטי עיצוב נבחרים בקפידה.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // פונקציה לקבלת opacity של הטקסט - יופיע רק בשיא האיכות
  const getTextOpacity = (style) => {
    if (!style || !style.transform) return 0;
    
    const scaleMatch = style.transform.match(/scale\(([0-9.]+)\)/);
    if (!scaleMatch) return 0;
    
    const scale = parseFloat(scaleMatch[1]);
    
    // הטקסט יופיע רק כשהתמונה בגודל מעל 1.1 (כמעט בשיא)
    if (scale >= 1.1) {
      return 1; // שקיפות מלאה כשהתמונה בשיא
    } else if (scale >= 1.05) {
      return (scale - 1.05) / 0.05; // הדרגתי קצר בין 1.05 ל-1.1
    }
    
    return 0;
  };

  const getCrystalClearBubbleStyle = (index) => {
    const windowHeight = window.innerHeight;
    
    // כל תמונה מתחילה במרחק של 150vh אחת מהשנייה
    const imageStartPosition = windowHeight * (1.5 + index * 1.5);
    const imagePeakPosition = imageStartPosition + windowHeight * 0.75; // שיא התמונה
    const imageEndPosition = imageStartPosition + windowHeight * 1.5;
    
    // לפני שהתמונה מתחילה - לא מוצגת בכלל
    if (scrollY < imageStartPosition) {
      return {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0)',
        zIndex: 1,
        visibility: 'hidden',
        filter: 'blur(0px) brightness(1) contrast(1) saturate(1)',
        borderRadius: '50%',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
    
    // אחרי שהתמונה נגמרת
    if (scrollY > imageEndPosition) {
      return {
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.05)',
        zIndex: 1,
        visibility: 'hidden',
        filter: 'blur(0px) brightness(1) contrast(1) saturate(1)',
        borderRadius: '50%',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      };
    }
    
    // חישוב progress חלק עם easing
    const totalDuration = imageEndPosition - imageStartPosition;
    const currentProgress = (scrollY - imageStartPosition) / totalDuration;
    
    // שימוש ב-easing function לתנועה חלקה
    const easeInOutQuart = (t) => {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    };
    
    const smoothProgress = easeInOutQuart(Math.max(0, Math.min(1, currentProgress)));
    
    let scale, opacity, borderRadius, zIndex;
    
    if (currentProgress <= 0.5) {
      // שלב פתיחה - מבועה לתמונה גדולה אבל לא מלא המסך
      const openProgress = currentProgress / 0.5;
      const smoothOpenProgress = easeInOutQuart(openProgress);
      
      scale = 0.01 + (1.15 - 0.01) * smoothOpenProgress; // גודל יפה יותר - לא מלא המסך
      opacity = smoothOpenProgress;
      borderRadius = `${50 * (1 - smoothOpenProgress)}%`;
      zIndex = Math.floor(10 + smoothOpenProgress * 20);
    } else {
      // שלב סגירה - מתמונה גדולה לבועה
      const closeProgress = (currentProgress - 0.5) / 0.5;
      const smoothCloseProgress = easeInOutQuart(closeProgress);
      
      scale = 1.15 - (1.15 - 0.05) * smoothCloseProgress;
      opacity = 1 - (0.8 * smoothCloseProgress);
      borderRadius = `${smoothCloseProgress * 50}%`;
      zIndex = Math.floor(30 - smoothCloseProgress * 15);
    }
    
    return {
      opacity,
      transform: `translate(-50%, -50%) scale(${scale})`,
      zIndex,
      visibility: 'visible',
      filter: 'blur(0px) brightness(1) contrast(1) saturate(1)', // ללא פילטרים שמשפיעים על האיכות
      borderRadius,
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  return (
    <div className={styles.scrollContainer} ref={containerRef}>
      {/* Liquid glass background elements */}
      <div className={styles.liquidBg}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
        <div className={`${styles.blob} ${styles.blob4}`}></div>
      </div>

      <div className={styles.gallery}>
        {images.map((image, index) => {
          const imageStyle = getCrystalClearBubbleStyle(index);
          const textOpacity = getTextOpacity(imageStyle);
          
          return (
            <div
              key={image.id}
              className={styles.crystalBubbleWrapper}
              style={imageStyle}
            >
              <div className={styles.crystalBubbleContainer}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.crystalBubbleImage}
                  loading="lazy"
                />
                <div 
                  className={styles.crystalBubbleOverlay}
                  style={{ opacity: textOpacity }}
                >
                  <div className={styles.projectInfo}>
                    <h2 className={styles.projectTitle}>{image.title}</h2>
                    <p className={styles.projectDescription}>{image.description}</p>
                    <span className={styles.imageNumber}>{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.spacer}></div>
    </div>
  );
};

export default ScrollGallery;