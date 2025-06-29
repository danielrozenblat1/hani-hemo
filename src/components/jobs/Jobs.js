import React, { useState, useEffect, useRef } from 'react';
import styles from './Jobs.module.css';
import { FaClipboardList, FaHammer, FaBuilding, FaHome, FaLightbulb, FaGem, FaHandsHelping, FaPalette, FaClock, FaListUl, FaShoppingBag, FaBullseye, FaWalking, FaBrain, FaBook, FaTools, FaEye } from 'react-icons/fa';
import shiputz from "../../images/חני חמו שיפוץ.png"
import shiputz2 from "../../images/חני חמו שיפוץ 2.png"
import homestyleing from "../../images/חני חמו עיצוב 1.png"
import homestyleing2 from "../../images/חני חמו עיצוב 2.png"
import consult from "../../images/חני חמו ייעוץ 2.png"
import consult2 from "../../images/חני מזוודה.jpeg"

const InteriorDesign = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);
  const containerRefs = useRef([]);

  const designItems = [
    {
      id: 1,
      title: 'תכנון ועיצוב פנים',
      description: [
        { text: 'תוכניות מקצועיות מלאות - חשמל, תאורה, אינסטלציה, מיזוג אוויר', icon: FaClipboardList },
        { text: 'שרטוטי נגרות, ריצוף וחיפוי מפורטים', icon: FaTools },
        { text: 'ליווי מקצועי בבחירת חומרי גמר וריהוט', icon: FaEye },
        { text: 'התאמה אישית לצרכים - שיפוץ חלקי, מלא או בניה חדשה', icon: FaBuilding },
        { text: 'הבנת הצרכים ויצירת קונספט עיצובי מותאם', icon: FaLightbulb },
        { text: 'שאלון מפורט לקבלנים ובעלי מקצוע', icon: FaBook },
        { text: 'אפשרות ליווי לרכישות והשלמת תהליך הגמר', icon: FaShoppingBag },
        { text: 'ייעוץ בארגון וסידור פונקציונלי של הבית', icon: FaHandsHelping }
      ],
      defaultImage: shiputz,
      hoverImage: shiputz2
    },
    {
      id: 2,
      title: 'ייעוץ + ליווי רכישות',
      description: [
        { text: 'פגישת ייעוץ של שעתיים בביתכם', icon: FaClock },
        { text: 'הגדרת צרכים ומטרות בהתאם לתקציב', icon: FaBullseye },
        { text: 'בחירת סקאלת גוונים וקונספט עיצובי לכל חלל', icon: FaPalette },
        { text: 'רשימה מסודרת של כל הפריטים לרכישה', icon: FaListUl },
        { text: 'לקיחת מידות מדויקות לחללים', icon: FaBrain },
        { text: 'יום רכישות ממוקד בחנויות נבחרות', icon: FaShoppingBag },
        { text: 'הבטחת התאמה והרמוניה בין כל הפריטים', icon: FaGem },
        { text: 'ייעוץ פונקציונלי לבחירות נכונות', icon: FaHandsHelping }
      ],
      defaultImage: homestyleing,
      hoverImage: homestyleing2
    },
    {
      id: 3,
      title: 'פגישת ייעוץ עיצובי',
      description: [
        { text: 'פגישה של 3 שעות בביתכם', icon: FaClock },
        { text: 'סקירה מקצועית של כל חללי הבית', icon: FaWalking },
        { text: 'הגדרת צעדים לשינוי החלל לפי החזון שלכם', icon: FaBrain },
        { text: 'ייעוץ בהעמדת ריהוט, תאורה ואבזור', icon: FaLightbulb },
        { text: 'הנחיות לבחירת טקסטיל וצבעים', icon: FaPalette },
        { text: 'טיפים מקצועיים ליישום עצמאי', icon: FaBook },
        { text: 'המלצות על בעלי מקצוע וחנויות מתאימות', icon: FaHandsHelping }
      ],
      defaultImage: consult,
      hoverImage: consult2
    },
    {
      id: 4,
      title: 'הום סטיילינג',
      description: [
        { text: 'מסלולים מותאמים לתקציבים שונים', icon: FaGem },
        { text: 'שדרוג הבית ללא שינוי חלוקת החללים', icon: FaHome },
        { text: 'פגישת ייעוץ להגדרת היקף השינוי', icon: FaLightbulb },
        { text: 'קביעת קונספט עיצובי ולקיחת מידות', icon: FaBrain },
        { text: 'סבבי רכישות משותפים לריהוט ואביזרים', icon: FaShoppingBag },
        { text: 'הכנת תוכניות נגרות ושרטוטים לפי הצורך', icon: FaClipboardList },
        { text: 'פגישת סטיילינג מסכמת - הלבשת הבית מחדש', icon: FaBullseye }
      ],
      defaultImage: homestyleing,
      hoverImage: homestyleing2
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

  const handleServiceClick = (e, itemId) => {
    e.stopPropagation();
    setExpandedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  return (
    <div className={styles.container}>
      {designItems.map((item, index) => (
        <div 
          key={item.id} 
          ref={el => containerRefs.current[index] = el}
          data-index={index}
          className={`${styles.serviceContainer} ${visibleItems.includes(index) ? styles.visible : ''} ${expandedItems.includes(item.id) ? styles.expanded : ''}`}
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
            
            <div className={styles.buttonWrapper}>
              <button 
                className={styles.detailsButton}
                onClick={(e) => handleServiceClick(e, item.id)}
              >
                {expandedItems.includes(item.id) ? 'סגור פרטים' : 'הצג פרטים'}
              </button>
            </div>
          </div>

          <div className={`${styles.detailsPanel} ${expandedItems.includes(item.id) ? styles.open : ''}`}>
            <div className={styles.detailsContent}>
              <h4 className={styles.serviceTitle}>{item.title}</h4>
              <div className={styles.serviceDescription}>
                {item.description.map((descItem, idx) => {
                  const IconComponent = descItem.icon;
                  return (
                    <div key={idx} className={styles.descriptionItem}>
                      <IconComponent className={styles.itemIcon} />
                      <p className={styles.itemText}>{descItem.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.buttonContainer}>
                <button 
                  className={styles.whatsappButton}
                  onClick={() => handleWhatsAppClick(item.title)}
                >
                לעוד פרטים לחצ/י כאן
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteriorDesign;