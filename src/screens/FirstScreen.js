import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import image1 from "../images/חני חמו תמונת תצוגה 1.png"
import image2 from "../images/חני חמו תמונת תצוגה 2.png"
import image3 from "../images/חני חמו תמונת תצוגה 3.png"
import image4 from "../images/חני חמו תמונת תצוגה 4.png"
import image5 from "../images/חני חמו תמונת תצוגה 5.png"
import image6 from "../images/חני חמו תמונת תצוגה 6.png"
import LoadingEffect from '../components/loader/Loader';
import logo from "../images/חני חמו לוגו.png"

// תמונות עבור הצדדים - תוכל להחליף אותן לתמונות שלך
import sideImageLeft from "../images/חני חמו תמונה שמאלית.png" // החלף לתמונה שלך
import sideImageRight from "../images/חני חמו תמונה ימנית.png"// החלף לתמונה שלך

const FirstScreen = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  const images = [image1, image5, image3, image4, image2, image6];

  const projectDetails = [
    { title:"שיפוץ מקיף לבית פרטי" , description: "אזור השרון", id: "project-1" },
    { title: "דירת קבלן", description: "חריש", id: "project-3" },
    { title: "שיפוץ דירה", description: "כפר סבא", id: "project-4" },
    { title: "ליווי מלא", description: "תל אביב", id: "project-5" },
    { title: "שיפוץ מקיף לבית פרטי", description:  "אזור השרון", id: "project-2" },
    { title: "עיצוב גן מדירת קבלן", description: "דירה שעברה שיפוץ מקבלת מפתח", id: "project-6" }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const loadImage = (src) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });

    // חילוף שקפים אוטומטי לכל המכשירים
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);

    Promise.all(images.map(loadImage)).then(() => {
      setImagesLoaded(true);
      // טריגר לאנימציה הראשונית רק פעם אחת
      setTimeout(() => {
        setTextAnimationComplete(true);
      }, 200);
    }).catch(console.error);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [images.length]);

  const handleProjectClick = (projectId) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+972525553141'; // החלף למספר הטלפון הנכון
  };

  const scrollToProjects = () => {
    const element = document.getElementById('פרוייקטים');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!imagesLoaded) return <LoadingEffect/>;

  // גרסת Mobile
  if (isMobile) {
    return (
      <div className={props.scrolled ? styles.containerP : styles.container}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : styles.inactiveSlide}`}
          >
            <div className={styles.imageWrapper}>
              <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
              <div className={styles.overlay} />
            </div>
            <div className={styles.overlayContainer}>
              <div className={`${styles.textContainer} ${textAnimationComplete ? styles.initialLoad : ''}`}>
                <div className={styles.brandInfo}>
                  <h1 className={styles.brandTitle}>HANI HEMO</h1>
                  <p className={styles.brandDescription}>הבית שתמיד רציתם. בלי פשרות, בלי תקלות ובלי הפתעות</p>
                </div>
                
                {/* Scroll Down Indicator */}
                <div className={styles.scrollIndicator} onClick={scrollDown}>
                  <div className={styles.scrollIcon}>
                    <div className={styles.scrollArrow}></div>
                  </div>
                  <div className={styles.scrollText}>גלול למטה</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Floating Action Buttons */}
        <div className={styles.floatingButtons}>
          {/* Phone Button */}
          <button className={styles.floatingBtn} onClick={handlePhoneCall}>
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.948V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="currentColor"/>
            </svg>
          </button>
          
          {/* Projects Button */}
          <button className={styles.floatingBtn} onClick={scrollToProjects}>
            <span className={styles.projectsText}>לכל הפרויקטים</span>
          </button>
        </div>
        
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // גרסת Desktop - 3 עמודות
  return (
    <div className={props.scrolled ? styles.desktopContainerP : styles.desktopContainer}>
      {/* עמודה שמאלית */}
      <div className={styles.leftColumn}>
        <img src={sideImageLeft} alt="Side decoration" className={styles.sideImage} />
      </div>

      {/* עמודה מרכזית - קרוסלה זהה לגרסת הטלפון */}
      <div className={styles.centerColumn}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : styles.inactiveSlide}`}
          >
            <div className={styles.imageWrapper}>
              <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
              <div className={styles.overlay} />
            </div>
            <div className={styles.overlayContainer}>
              <div className={`${styles.textContainer} ${textAnimationComplete ? styles.initialLoad : ''}`}>
                <div className={styles.brandInfo}>
                  <h1 className={styles.brandTitle}>HANI HEMO</h1>
                    <p className={styles.brandDescription}>הבית שתמיד רציתם. בלי פשרות, בלי תקלות ובלי הפתעות</p>
                </div>
                
                {/* Scroll Down Indicator */}
                <div className={styles.scrollIndicator} onClick={scrollDown}>
                  <div className={styles.scrollIcon}>
                    <div className={styles.scrollArrow}></div>
                  </div>
                  <div className={styles.scrollText}>גלול למטה</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Floating Action Buttons */}
        <div className={styles.floatingButtons}>
          {/* Phone Button */}
          <button className={styles.floatingBtn} onClick={handlePhoneCall}>
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.948V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="currentColor"/>
            </svg>
          </button>
          
          {/* Projects Button */}
          <button className={styles.floatingBtn} onClick={scrollToProjects}>
            <span className={styles.projectsText}>לכל הפרויקטים</span>
          </button>
        </div>
        
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentSlide === index ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* עמודה ימנית */}
      <div className={styles.rightColumn}>
        <img src={sideImageRight} alt="Side decoration" className={styles.sideImage} />
      </div>
    </div>
  );
};

export default FirstScreen;