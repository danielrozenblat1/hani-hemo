import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';

import styles from "./SecondScreen.module.css";
import ThirdScreen from './ThirdScreen copy';

// קומפוננטת טקסט מתחלף
const CustomTextTransition = ({ texts, interval = 3000, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setIsVisible(true);
            }, 300);
        }, interval);

        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <span 
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
                display: 'inline-block',
                minHeight: '1.2em'
            }}
        >
            {texts[currentIndex]}
        </span>
    );
};

const SecondScreen = () => {
    const featuresRef = useRef(null);
    const introRef = useRef(null);
    const summaryRef = useRef(null);
    const parallaxRef = useRef(null);

    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    const playerRef4 = useRef(null);

    const featureTextRefs = useRef([]);

    const QUESTIONS = [
        "מתכננים שיפוץ מקיף בקרוב?",
        "קניתם דירה חדשה מקבלן?",
        "רוצים לרענן את המראה בבית?",
        "נתקלים בבעיות תכנוניות בבית?",
    
    ];

    

    const handleComplete = (playerRef) => {
        setTimeout(() => {
            playerRef?.current?.playFromBeginning();
        }, 2500);
    };

    useEffect(() => {
        const players = [playerRef1, playerRef2, playerRef3, playerRef4];
        players.forEach(playerRef => {
            setTimeout(() => {
                playerRef?.current?.playFromBeginning();
            }, Math.random() * 1000);
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollPosition = window.scrollY;
                const translateY = scrollPosition * 0.4;
                parallaxRef.current.style.transform = `translateY(${translateY}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '40px',
            duration: 1000,
            delay: 100,
            opacity: 0,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            mobile: true,
            reset: false,
            useDelay: 'always',
            viewFactor: 0.2
        });

        const timer = setTimeout(() => {
            if (introRef.current) {
                sr.reveal(introRef.current, {
                    origin: 'bottom',
                    distance: '20px',
                    delay: 100
                });
            }

            featureTextRefs.current.forEach((textRef, index) => {
                if (textRef) {
                    sr.reveal(textRef, {
                        origin: 'bottom',
                        distance: '40px',
                        delay: 200 + (index * 150),
                        duration: 1200,
                        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
                    });
                }
            });

            if (summaryRef.current) {
                sr.reveal(summaryRef.current, {
                    origin: 'bottom',
                    distance: '30px',
                    delay: 500,
                    duration: 1000
                });
            }
        }, 200);

        return () => {
            clearTimeout(timer);
            sr.destroy();
        };
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.parallaxContainer}>
                    <div ref={parallaxRef} className={styles.parallaxImage}></div>
                </div>
                
                <div className={styles.introSection}>
                    <div className={styles.introBox}>
                        <CustomTextTransition 
                            texts={QUESTIONS} 
                            interval={3000}
                        />
                    </div>
                </div>
                <div className={styles.description}>שינויים בבית זה תמיד מרגש... אבל חשוב שתדעו -  <strong> שינוי אמיתי מתחיל בתכנון נכון. </strong>
שינוי בבית לא מתחיל בצבע לקיר או בכריות לספה. הוא מתחיל בכם. בצרכים שלכם, בטעמים, באורח החיים, ובמה שחשוב באמת.</div>
 <div className={styles.title}>אז למה בעצם חשוב להעזר במעצבת פנים?</div>
                <ThirdScreen/>


            </div>
        </>
    );
};

export default SecondScreen; 
