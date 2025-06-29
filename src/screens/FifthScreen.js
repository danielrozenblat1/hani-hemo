import React, { useState, useEffect, useRef } from 'react';

import styles from "./FifthScreen.module.css";
import recommend1 from "../images/חני חמו המלצות פייסבוק 1.png";
import recommend2 from "../images/חני חמו המלצות פייסבוק 2.png";
import recommend3 from "../images/חני חמו המלצות פייסבוק 3.png";
import recommend4 from "../images/חני חמו המלצות פייסבוק 4.png";
import recommend5 from "../images/חני חמו המלצות פייסבוק 5.png";
import recommend6 from "../images/חני חמו המלצות פייסבוק 6.png";
import recommend7 from "../images/חני חמו המלצות פייסבוק 7.png";
import recommend8 from "../images/חני חמו המלצות פייסבוק 8.png";
import recommend9 from "../images/חני חמו המלצות פייסבוק 9.png";
import Testimonials from '../components/newRecommends/NewRecommends';

const FifthScreen = () => {

  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },
    { src: recommend8 },
    { src: recommend9 }
  ];

  return (
    <>
        <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
  
        
        <div className={styles.leftSection}>
          <Testimonials testimonialImages={testimonialImages} />
        </div>
      </div>
    </>
  );
};

export default FifthScreen;