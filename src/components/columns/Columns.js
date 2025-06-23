import { useEffect, useRef, useState } from 'react';
import styles from './Columns.module.css';

const AppleLiquidGlassServices = () => {
    const [activeColumns, setActiveColumns] = useState({});
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const containerRef = useRef(null);

    const services = [
        {
            title: "ליווי מלא לשיפוץ",
            backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "🏗️",
            points: [
                "שיפוץ מקיף או חלקי עם ליווי צמוד",
                "מדידות ותכנון מפורט",
                "3 אופציות תכנוניות לבחירה",
                "ליווי לקבלן וכתב כמויות",
                "ביקורות שטח והנחיה מקצועית",
                "תהליך של כחצי שנה"
            ]
        },
        {
            title: "פגישת ייעוץ חד פעמית",
            backgroundImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "💡",
            points: [
                "כלים מקצועיים וטיפים מעשיים",
                "תוכניות ידניות מותאמות",
                "המלצות לבעלי מקצוע איכותיים",
                "המלצות לחנויות לפי תקציב",
                "לינקים און ליין לרכישות",
                "מחיר: 2,950 ₪"
            ]
        },
        {
            title: "חבילת 4 פגישות מדויקות",
            backgroundImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "📋",
            points: [
                "פגישת ייעוץ ראשונית",
                "פגישה בחברת המטבחים",
                "פגישה בחנות הקרמיקה",
                "פגישה אחרונה - רכישות/תכנון נוסף",
                "מחיר: 2,500 ₪ לפגישה"
            ]
        },
        {
            title: "הום סטיילינג",
            backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "🎨",
            points: [
                "הלבשת בית מוכן ללא שיפוצים",
                "החלפת מיקום ריהוט קיים",
                "בחירת ריהוט משלים",
                "אקססוריז ועיצוב דקורטיבי",
                "יצירת מראה חדש לבית"
            ]
        },
        {
            title: "פתרונות תכנוניות דחופים",
            backgroundImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "⚡",
            points: [
                "פתרון מהיר לבעיות תכנוניות",
                "הגשת תוכניות לשינויי דיירים",
                "פתרונות יצירתיים לתקלות עיצוביות",
                "תכנון מיידי למצבי חירום",
                "עבודה מול מחלקת שינויי דיירים"
            ]
        },
        {
            title: "תכנון דירות קבלן",
            backgroundImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "🏢",
            points: [
                "התאמת דירה חדשה לצרכים אישיים",
                "תכנון מיקומים אופטימליים",
                "שינויי חדרים ופונקציות",
                "פתרונות יצירתיים למרחב",
                "חיסכון בטעויות יקרות"
            ]
        },
        {
            title: "ליווי רכישות",
            backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "🛒",
            points: [
                "ליווי מקצועי לקניית ריהוט",
                "בחירת מטבח מותאם",
                "קרמיקה ואריחים איכותיים",
                "תכנון ובחירת תאורה",
                "רכישת ציוד ואקססוריז לבית"
            ]
        },
        {
            title: "עיצוב משרדים",
            backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: "🏢",
            points: [
                "תכנון מקצועי למשרדים",
                "יצירת סביבת עבודה נעימה",
                "עיצוב פונקציונלי ויעיל",
                "התאמה לזהות המותג",
                "פתרונות אחסון חכמים"
            ]
        }
    ];

    const toggleColumn = (index) => {
        setActiveColumns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div 
            ref={containerRef} 
            className={styles.liquidBackground}
            style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`
            }}
        >
            <div className={styles.title}>שירותי חני חמו - סטודיו לעיצוב פנים</div>
            
            <div className={styles.mainContainer}>
                {services.map((service, index) => (
                    index % 2 === 0 && (
                        <div key={index / 2} className={styles.container}>
                            <div className={styles.column}>
                                <div 
                                    className={`${styles.cardContent} ${activeColumns[index] ? styles.active : ''}`}
                                    onClick={() => toggleColumn(index)}
                                    style={{
                                        '--bg-image': `url(${service.backgroundImage})`
                                    }}
                                >
                                    <div className={styles.backgroundOverlay}></div>
                                    <div className={styles.contentLayer}>
                                        <div className={styles.iconContainer}>
                                            <div className={styles.iconGlow}></div>
                                            <div className={styles.icon}>{service.icon}</div>
                                        </div>
                                        <div className={styles.textContainer}>
                                            <p className={styles.text}>{service.title}</p>
                                            <div className={`${styles.arrow} ${activeColumns[index] ? styles.arrowActive : ''}`}>
                                                ▼
                                            </div>
                                        </div>
                                        <div className={`${styles.pointsWrapper} ${activeColumns[index] ? styles.pointsVisible : ''}`}>
                                            <div className={styles.pointsContainer}>
                                                {service.points.map((point, pointIndex) => (
                                                    <div 
                                                        key={pointIndex} 
                                                        className={styles.point}
                                                        style={{ 
                                                            opacity: activeColumns[index] ? 1 : 0,
                                                            transform: activeColumns[index] ? 'translateY(0)' : 'translateY(10px)',
                                                            transitionDelay: activeColumns[index] ? `${pointIndex * 50}ms` : '0ms'
                                                        }}
                                                    >
                                                        <span className={styles.bullet}>●</span>
                                                        <span className={styles.pointText}>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {services[index + 1] && (
                                <div className={styles.column}>
                                    <div 
                                        className={`${styles.cardContent} ${activeColumns[index + 1] ? styles.active : ''}`}
                                        onClick={() => toggleColumn(index + 1)}
                                        style={{
                                            '--bg-image': `url(${services[index + 1].backgroundImage})`
                                        }}
                                    >
                                        <div className={styles.backgroundOverlay}></div>
                                        <div className={styles.contentLayer}>
                                            <div className={styles.iconContainer}>
                                                <div className={styles.iconGlow}></div>
                                                <div className={styles.icon}>{services[index + 1].icon}</div>
                                            </div>
                                            <div className={styles.textContainer}>
                                                <p className={styles.text}>{services[index + 1].title}</p>
                                                <div className={`${styles.arrow} ${activeColumns[index + 1] ? styles.arrowActive : ''}`}>
                                                    ▼
                                                </div>
                                            </div>
                                            <div className={`${styles.pointsWrapper} ${activeColumns[index + 1] ? styles.pointsVisible : ''}`}>
                                                <div className={styles.pointsContainer}>
                                                    {services[index + 1].points.map((point, pointIndex) => (
                                                        <div 
                                                            key={pointIndex} 
                                                            className={styles.point}
                                                            style={{ 
                                                                opacity: activeColumns[index + 1] ? 1 : 0,
                                                                transform: activeColumns[index + 1] ? 'translateY(0)' : 'translateY(10px)',
                                                                transitionDelay: activeColumns[index + 1] ? `${pointIndex * 50}ms` : '0ms'
                                                            }}
                                                        >
                                                            <span className={styles.bullet}>●</span>
                                                            <span className={styles.pointText}>{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>
            
            <div className={styles.ctaContainer}>
                <button className={styles.ctaButton}>
                    <span>חני, בואי נדבר! 📞</span>
                </button>
            </div>
        </div>
    );
};

export default AppleLiquidGlassServices;