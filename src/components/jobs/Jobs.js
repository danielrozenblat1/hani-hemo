import React, { useState, useEffect, useRef } from 'react';
import styles from './Jobs.module.css';
import shiputz from "../../images/חני חמו שיפוץ.png"
import shiputz2 from "../../images/חני חמו שיפוץ 2.png"
import homestyleing from "../../images/חני חמו עיצוב 1.png"
import homestyleing2 from "../../images/חני חמו עיצוב 2.png"
import consult from "../../images/חני חמו ייעוץ 2.png"
import consult2 from "../../images/מזוודה 1.png"

const InteriorDesign = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRefs = useRef([]);

  const designItems = [
    {
      id: 1,
      title: 'ליווי מלא לשיפוץ',
      defaultImage: shiputz,
      hoverImage: shiputz2
    },
    {
      id: 2,
      title: 'הום סטיילינג',
      defaultImage: homestyleing,
      hoverImage: homestyleing2
    },
    {
      id: 3,
      title: 'פגישת ייעוץ חד פעמית',
      defaultImage: consult,
      hoverImage: consult2
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    containerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = (title) => {
    const phoneNumber = '972525553141';
    const message = encodeURIComponent(`היי חני הגעתי מהדף, אשמח לשמוע עוד על ${title}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      {designItems.map((item, index) => (
        <div 
          key={item.id} 
          ref={el => containerRefs.current[index] = el}
          data-index={index}
          className={`${styles.imageContainer} ${visibleItems.includes(index) ? styles.visible : ''}`}
        >
          <div className={styles.imageWrapper}>
            <img 
              src={item.defaultImage} 
              alt={item.title}
              className={`${styles.image} ${styles.defaultImage}`}
            />
            <img 
              src={item.hoverImage} 
              alt={item.title}
              className={`${styles.image} ${styles.hoverImage}`}
            />
            
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
            
            <div className={styles.buttonContainer}>
              <button 
                className={styles.detailsButton}
                onClick={() => handleWhatsAppClick(item.title)}
              >
                לעוד פרטים לחצ/י כאן
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteriorDesign;