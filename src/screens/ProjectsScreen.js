import React from 'react';
import ProjectCarousel from '../components/projects/Projects';
import styles from './ProjectsScreen.module.css';

// אימפורטים לתמונות תל אביב (18 תמונות)
import telaviv1 from "../images/חני חמו דירה בתל אביב 1.png";
import telaviv2 from "../images/חני חמו דירה בתל אביב 2.png";
import telaviv3 from "../images/חני חמו דירה בתל אביב 3.png";
import telaviv4 from "../images/חני חמו דירה בתל אביב 4.png";
import telaviv5 from "../images/חני חמו דירה בתל אביב 5.png";
import telaviv6 from "../images/חני חמו דירה בתל אביב 6.png";
import telaviv7 from "../images/חני חמו דירה בתל אביב 7.png";
import telaviv8 from "../images/חני חמו דירה בתל אביב 8.png";
import telaviv9 from "../images/חני חמו דירה בתל אביב 9.png";
import telaviv10 from "../images/חני חמו דירה בתל אביב 10.png";
import telaviv11 from "../images/חני חמו דירה בתל אביב 11.png";
import telaviv12 from "../images/חני חמו דירה בתל אביב 12.png";
import telaviv13 from "../images/חני חמו דירה בתל אביב 13.png";
import telaviv14 from "../images/חני חמו דירה בתל אביב 14.png";
import telaviv15 from "../images/חני חמו דירה בתל אביב 15.png";
import telaviv16 from "../images/חני חמו דירה בתל אביב 16.png";
import telaviv17 from "../images/חני חמו דירה בתל אביב 17.png";
import telaviv18 from "../images/חני חמו דירה בתל אביב 18.png";

// אימפורטים לתמונות חריש (41 תמונות)
import charish1 from "../images/חני חמו דירת קבלן בחריש 1.png";
import charish2 from "../images/חני חמו דירת קבלן בחריש 2.png";
import charish3 from "../images/חני חמו דירת קבלן בחריש 3.png";
import charish4 from "../images/חני חמו דירת קבלן בחריש 4.png";
import charish5 from "../images/חני חמו דירת קבלן בחריש 5.png";
import charish6 from "../images/חני חמו דירת קבלן בחריש 6.png";
import charish7 from "../images/חני חמו דירת קבלן בחריש 7.png";
import charish8 from "../images/חני חמו דירת קבלן בחריש 8.png";
import charish9 from "../images/חני חמו דירת קבלן בחריש 9.png";
import charish10 from "../images/חני חמו דירת קבלן בחריש 10.png";
import charish11 from "../images/חני חמו דירת קבלן בחריש 11.png";
import charish12 from "../images/חני חמו דירת קבלן בחריש 12.png";
import charish13 from "../images/חני חמו דירת קבלן בחריש 13.png";
import charish14 from "../images/חני חמו דירת קבלן בחריש 14.png";
import charish15 from "../images/חני חמו דירת קבלן בחריש 15.png";
import charish16 from "../images/חני חמו דירת קבלן בחריש 16.png";
import charish17 from "../images/חני חמו דירת קבלן בחריש 17.png";
import charish18 from "../images/חני חמו דירת קבלן בחריש 18.png";
import charish19 from "../images/חני חמו דירת קבלן בחריש 19.png";
import charish20 from "../images/חני חמו דירת קבלן בחריש 20.png";
import charish21 from "../images/חני חמו דירת קבלן בחריש 21.png";
import charish22 from "../images/חני חמו דירת קבלן בחריש 22.png";
import charish23 from "../images/חני חמו דירת קבלן בחריש 23.png";
import charish24 from "../images/חני חמו דירת קבלן בחריש 24.png";
import charish25 from "../images/חני חמו דירת קבלן בחריש 25.png";
import charish26 from "../images/חני חמו דירת קבלן בחריש 26.png";
import charish27 from "../images/חני חמו דירת קבלן בחריש 27.png";
import charish28 from "../images/חני חמו דירת קבלן בחריש 28.png";
import charish29 from "../images/חני חמו דירת קבלן בחריש 29.png";
import charish30 from "../images/חני חמו דירת קבלן בחריש 30.png";
import charish31 from "../images/חני חמו דירת קבלן בחריש 31.png";
import charish32 from "../images/חני חמו דירת קבלן בחריש 32.png";
import charish33 from "../images/חני חמו דירת קבלן בחריש 33.png";
import charish34 from "../images/חני חמו דירת קבלן בחריש 34.png";
import charish35 from "../images/חני חמו דירת קבלן בחריש 35.png";
import charish36 from "../images/חני חמו דירת קבלן בחריש 36.png";
import charish37 from "../images/חני חמו דירת קבלן בחריש 37.png";
import charish38 from "../images/חני חמו דירת קבלן בחריש 38.png";
import charish39 from "../images/חני חמו דירת קבלן בחריש 39.png";
import charish40 from "../images/חני חמו דירת קבלן בחריש 40.png";
import charish41 from "../images/חני חמו דירת קבלן בחריש 41.png";

// אימפורטים לתמונות עיצוב גן (22 תמונות)
import garden1 from "../images/חני חמו עיצוב גן 1.png";
import garden2 from "../images/חני חמו עיצוב גן 2.png";
import garden3 from "../images/חני חמו עיצוב גן 3.png";
import garden4 from "../images/חני חמו עיצוב גן 4.png";
import garden5 from "../images/חני חמו עיצוב גן 5.png";
import garden6 from "../images/חני חמו עיצוב גן 6.png";
import garden7 from "../images/חני חמו עיצוב גן 7.png";
import garden8 from "../images/חני חמו עיצוב גן 8.png";
import garden9 from "../images/חני חמו עיצוב גן 9.png";
import garden10 from "../images/חני חמו עיצוב גן 10.png";
import garden11 from "../images/חני חמו עיצוב גן 11.png";
import garden12 from "../images/חני חמו עיצוב גן 12.png";
import garden13 from "../images/חני חמו עיצוב גן 13.png";
import garden14 from "../images/חני חמו עיצוב גן 14.png";
import garden15 from "../images/חני חמו עיצוב גן 15.png";
import garden16 from "../images/חני חמו עיצוב גן 16.png";
import garden17 from "../images/חני חמו עיצוב גן 17.png";
import garden18 from "../images/חני חמו עיצוב גן 18.png";
import garden19 from "../images/חני חמו עיצוב גן 19.png";
import garden20 from "../images/חני חמו עיצוב גן 20.png";
import garden21 from "../images/חני חמו עיצוב גן 21.png";
import garden22 from "../images/חני חמו עיצוב גן 22.png";

// אימפורטים לתמונות כפר סבא (14 תמונות)
import kfarsaba1 from "../images/חני חמו שיפוץ דירה בכפר סבא 1.png";
import kfarsaba2 from "../images/חני חמו שיפוץ דירה בכפר סבא 2.png";
import kfarsaba3 from "../images/חני חמו שיפוץ דירה בכפר סבא 3.png";
import kfarsaba4 from "../images/חני חמו שיפוץ דירה בכפר סבא 4.png";
import kfarsaba5 from "../images/חני חמו שיפוץ דירה בכפר סבא 5.png";
import kfarsaba6 from "../images/חני חמו שיפוץ דירה בכפר סבא 6.png";
import kfarsaba7 from "../images/חני חמו שיפוץ דירה בכפר סבא 7.png";
import kfarsaba8 from "../images/חני חמו שיפוץ דירה בכפר סבא 8.png";
import kfarsaba9 from "../images/חני חמו שיפוץ דירה בכפר סבא 9.png";
import kfarsaba10 from "../images/חני חמו שיפוץ דירה בכפר סבא 10.png";
import kfarsaba11 from "../images/חני חמו שיפוץ דירה בכפר סבא 11.png";
import kfarsaba12 from "../images/חני חמו שיפוץ דירה בכפר סבא 12.png";
import kfarsaba13 from "../images/חני חמו שיפוץ דירה בכפר סבא 13.png";
import kfarsaba14 from "../images/חני חמו שיפוץ דירה בכפר סבא 14.png";

// אימפורטים לתמונות השרון (56 תמונות)
import sharon1 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 1.png";
import sharon2 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 2.png";
import sharon3 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 3.png";
import sharon4 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 4.png";
import sharon5 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 5.png";
import sharon6 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 6.png";
import sharon7 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 7.png";
import sharon8 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 8.png";
import sharon9 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 9.png";
import sharon10 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 10.png";
import sharon11 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 11.png";
import sharon12 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 12.png";
import sharon13 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 13.png";
import sharon14 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 14.png";
import sharon15 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 15.png";
import sharon16 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 16.png";
import sharon17 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 17.png";
import sharon18 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 18.png";
import sharon19 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 19.png";
import sharon20 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 20.png";
import sharon21 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 21.png";
import sharon22 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 22.png";
import sharon23 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 23.png";
import sharon24 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 24.png";
import sharon25 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 25.png";
import sharon26 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 26.png";
import sharon27 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 27.png";
import sharon28 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 28.png";
import sharon29 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 29.png";
import sharon30 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 30.png";
import sharon31 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 31.png";
import sharon32 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 32.png";
import sharon33 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 33.png";
import sharon34 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 34.png";
import sharon35 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 35.png";
import sharon36 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 36.png";
import sharon37 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 37.png";
import sharon38 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 38.png";
import sharon39 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 39.png";
import sharon40 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 40.png";
import sharon41 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 41.png";
import sharon42 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 42.png";
import sharon43 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 43.png";
import sharon44 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 44.png";
import sharon45 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 45.png";
import sharon46 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 46.png";
import sharon47 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 47.png";
import sharon48 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 48.png";
import sharon49 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 49.png";
import sharon50 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 50.png";
import sharon51 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 51.png";
import sharon52 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 52.png";
import sharon53 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 53.png";
import sharon54 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 54.png";
import sharon55 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 55.png";
import sharon56 from "../images/חני חמו שיפוץ מקיף לבית פרטי באזור השרון 56.png";

const Projects = () => {
  // יצירת מערכי התמונות
  const telavivImages = [
    { src: telaviv1, alt: "דירה בתל אביב - תמונה 1" },
    { src: telaviv2, alt: "דירה בתל אביב - תמונה 2" },
    { src: telaviv3, alt: "דירה בתל אביב - תמונה 3" },
    { src: telaviv4, alt: "דירה בתל אביב - תמונה 4" },
    { src: telaviv5, alt: "דירה בתל אביב - תמונה 5" },
    { src: telaviv6, alt: "דירה בתל אביב - תמונה 6" },
    { src: telaviv7, alt: "דירה בתל אביב - תמונה 7" },
    { src: telaviv8, alt: "דירה בתל אביב - תמונה 8" },
    { src: telaviv9, alt: "דירה בתל אביב - תמונה 9" },
    { src: telaviv10, alt: "דירה בתל אביב - תמונה 10" },
    { src: telaviv11, alt: "דירה בתל אביב - תמונה 11" },
    { src: telaviv12, alt: "דירה בתל אביב - תמונה 12" },
    { src: telaviv13, alt: "דירה בתל אביב - תמונה 13" },
    { src: telaviv14, alt: "דירה בתל אביב - תמונה 14" },
    { src: telaviv15, alt: "דירה בתל אביב - תמונה 15" },
    { src: telaviv16, alt: "דירה בתל אביב - תמונה 16" },
    { src: telaviv17, alt: "דירה בתל אביב - תמונה 17" },
    { src: telaviv18, alt: "דירה בתל אביב - תמונה 18" }
  ];

  const charishImages = [
    { src: charish1, alt: "דירת קבלן בחריש - תמונה 1" },
    { src: charish2, alt: "דירת קבלן בחריש - תמונה 2" },
    { src: charish3, alt: "דירת קבלן בחריש - תמונה 3" },
    { src: charish4, alt: "דירת קבלן בחריש - תמונה 4" },
    { src: charish5, alt: "דירת קבלן בחריש - תמונה 5" },
    { src: charish6, alt: "דירת קבלן בחריש - תמונה 6" },
    { src: charish7, alt: "דירת קבלן בחריש - תמונה 7" },
    { src: charish8, alt: "דירת קבלן בחריש - תמונה 8" },
    { src: charish9, alt: "דירת קבלן בחריש - תמונה 9" },
    { src: charish10, alt: "דירת קבלן בחריש - תמונה 10" },
    { src: charish11, alt: "דירת קבלן בחריש - תמונה 11" },
    { src: charish12, alt: "דירת קבלן בחריש - תמונה 12" },
    { src: charish13, alt: "דירת קבלן בחריש - תמונה 13" },
    { src: charish14, alt: "דירת קבלן בחריש - תמונה 14" },
    { src: charish15, alt: "דירת קבלן בחריש - תמונה 15" },
    { src: charish16, alt: "דירת קבלן בחריש - תמונה 16" },
    { src: charish17, alt: "דירת קבלן בחריש - תמונה 17" },
    { src: charish18, alt: "דירת קבלן בחריש - תמונה 18" },
    { src: charish19, alt: "דירת קבלן בחריש - תמונה 19" },
    { src: charish20, alt: "דירת קבלן בחריש - תמונה 20" },
    { src: charish21, alt: "דירת קבלן בחריש - תמונה 21" },
    { src: charish22, alt: "דירת קבלן בחריש - תמונה 22" },
    { src: charish23, alt: "דירת קבלן בחריש - תמונה 23" },
    { src: charish24, alt: "דירת קבלן בחריש - תמונה 24" },
    { src: charish25, alt: "דירת קבלן בחריש - תמונה 25" },
    { src: charish26, alt: "דירת קבלן בחריש - תמונה 26" },
    { src: charish27, alt: "דירת קבלן בחריש - תמונה 27" },
    { src: charish28, alt: "דירת קבלן בחריש - תמונה 28" },
    { src: charish29, alt: "דירת קבלן בחריש - תמונה 29" },
    { src: charish30, alt: "דירת קבלן בחריש - תמונה 30" },
    { src: charish31, alt: "דירת קבלן בחריש - תמונה 31" },
    { src: charish32, alt: "דירת קבלן בחריש - תמונה 32" },
    { src: charish33, alt: "דירת קבלן בחריש - תמונה 33" },
    { src: charish34, alt: "דירת קבלן בחריש - תמונה 34" },
    { src: charish35, alt: "דירת קבלן בחריש - תמונה 35" },
    { src: charish36, alt: "דירת קבלן בחריש - תמונה 36" },
    { src: charish37, alt: "דירת קבלן בחריש - תמונה 37" },
    { src: charish38, alt: "דירת קבלן בחריש - תמונה 38" },
    { src: charish39, alt: "דירת קבלן בחריש - תמונה 39" },
    { src: charish40, alt: "דירת קבלן בחריש - תמונה 40" },
    { src: charish41, alt: "דירת קבלן בחריש - תמונה 41" }
  ];

  const gardenImages = [
    { src: garden1, alt: "עיצוב גן - תמונה 1" },
    { src: garden2, alt: "עיצוב גן - תמונה 2" },
    { src: garden3, alt: "עיצוב גן - תמונה 3" },
    { src: garden4, alt: "עיצוב גן - תמונה 4" },
    { src: garden5, alt: "עיצוב גן - תמונה 5" },
    { src: garden6, alt: "עיצוב גן - תמונה 6" },
    { src: garden7, alt: "עיצוב גן - תמונה 7" },
    { src: garden8, alt: "עיצוב גן - תמונה 8" },
    { src: garden9, alt: "עיצוב גן - תמונה 9" },
    { src: garden10, alt: "עיצוב גן - תמונה 10" },
    { src: garden11, alt: "עיצוב גן - תמונה 11" },
    { src: garden12, alt: "עיצוב גן - תמונה 12" },
    { src: garden13, alt: "עיצוב גן - תמונה 13" },
    { src: garden14, alt: "עיצוב גן - תמונה 14" },
    { src: garden15, alt: "עיצוב גן - תמונה 15" },
    { src: garden16, alt: "עיצוב גן - תמונה 16" },
    { src: garden17, alt: "עיצוב גן - תמונה 17" },
    { src: garden18, alt: "עיצוב גן - תמונה 18" },
    { src: garden19, alt: "עיצוב גן - תמונה 19" },
    { src: garden20, alt: "עיצוב גן - תמונה 20" },
    { src: garden21, alt: "עיצוב גן - תמונה 21" },
    { src: garden22, alt: "עיצוב גן - תמונה 22" }
  ];

  const kfarsabaImages = [
    { src: kfarsaba1, alt: "שיפוץ דירה בכפר סבא - תמונה 1" },
    { src: kfarsaba2, alt: "שיפוץ דירה בכפר סבא - תמונה 2" },
    { src: kfarsaba3, alt: "שיפוץ דירה בכפר סבא - תמונה 3" },
    { src: kfarsaba4, alt: "שיפוץ דירה בכפר סבא - תמונה 4" },
    { src: kfarsaba5, alt: "שיפוץ דירה בכפר סבא - תמונה 5" },
    { src: kfarsaba6, alt: "שיפוץ דירה בכפר סבא - תמונה 6" },
    { src: kfarsaba7, alt: "שיפוץ דירה בכפר סבא - תמונה 7" },
    { src: kfarsaba8, alt: "שיפוץ דירה בכפר סבא - תמונה 8" },
    { src: kfarsaba9, alt: "שיפוץ דירה בכפר סבא - תמונה 9" },
    { src: kfarsaba10, alt: "שיפוץ דירה בכפר סבא - תמונה 10" },
    { src: kfarsaba11, alt: "שיפוץ דירה בכפר סבא - תמונה 11" },
    { src: kfarsaba12, alt: "שיפוץ דירה בכפר סבא - תמונה 12" },
    { src: kfarsaba13, alt: "שיפוץ דירה בכפר סבא - תמונה 13" },
    { src: kfarsaba14, alt: "שיפוץ דירה בכפר סבא - תמונה 14" }
  ];

  const sharonImages = [
    { src: sharon1, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 1" },
    { src: sharon2, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 2" },
    { src: sharon3, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 3" },
    { src: sharon4, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 4" },
    { src: sharon5, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 5" },
    { src: sharon6, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 6" },
    { src: sharon7, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 7" },
    { src: sharon8, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 8" },
    { src: sharon9, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 9" },
    { src: sharon10, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 10" },
    { src: sharon11, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 11" },
    { src: sharon12, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 12" },
    { src: sharon13, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 13" },
    { src: sharon14, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 14" },
    { src: sharon15, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 15" },

    { src: sharon18, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 18" },
    { src: sharon19, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 19" },
    { src: sharon20, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 20" },
    { src: sharon21, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 21" },
    { src: sharon22, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 22" },
    { src: sharon23, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 23" },
    { src: sharon24, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 24" },
    { src: sharon25, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 25" },
    { src: sharon26, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 26" },
    { src: sharon27, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 27" },
    { src: sharon28, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 28" },
    { src: sharon29, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 29" },
    { src: sharon30, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 30" },
    { src: sharon31, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 31" },
    { src: sharon32, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 32" },
    { src: sharon33, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 33" },
    { src: sharon34, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 34" },
    { src: sharon35, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 35" },
    { src: sharon36, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 36" },
    { src: sharon37, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 37" },
    { src: sharon38, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 38" },
    { src: sharon39, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 39" },
    { src: sharon40, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 40" },
    { src: sharon41, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 41" },
    { src: sharon42, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 42" },
    { src: sharon43, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 43" },
    { src: sharon44, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 44" },
    { src: sharon45, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 45" },
    { src: sharon46, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 46" },
    { src: sharon47, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 47" },
    { src: sharon48, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 48" },
    { src: sharon49, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 49" },
    { src: sharon50, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 50" },
    { src: sharon51, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 51" },
    { src: sharon52, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 52" },
    { src: sharon53, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 53" },
    { src: sharon54, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 54" },
    { src: sharon55, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 55" },
    { src: sharon56, alt: "שיפוץ מקיף לבית באזור השרון - תמונה 56" }
  ];

  const projectsData = [
    {
      id: 1,
      title: "שיפוץ מקיף לבית פרטי באזור השרון",
      description: "בית פרטי שעבר שיפוץ קומפלט מהחוץ פנימה. המטבח שונה והוגדל משמעותית בזכות העמדה תכנונית חדשה שהפכה אותו למרכז חי ופונקציונלי בלב הבית. כל חדרי הרחצה חודשו. ולסיום הום סטיילינג שהוסיף אופי, חמימות ותחושת שלמות",
      images: sharonImages
    },
    {
      id: 2,
      title: "דירה בתל אביב",
      description: "\"שקט עיצובי בלב העיר\" - דירה תל אביבית בעיצוב נקי וחכם. המטבח קיבל תכנון מחדש שהפך לפונקציונלי ומזמין. הפרויקט שומר על איזון בין מודרניות רכה לפרטיקה יומיומית.",
      images: telavivImages
    },
    {
      id: 3,
      title: "שיפוץ דירה בכפר סבא",
      description: "\"כשדירה הופכת לבית\" - אהבה ממבט שני :) דירת יד שנייה בכפר סבא הירוקה, שעברה מהפך תכנוני ועיצובי מלא. דרך תכנון חדש של ההעמדה, הדירה קיבלה פרופורציות חדשות ואור אחר, כזה שגרם ללקוחה שבעבר בכלל לא התחברה אליה, להתאהב מחדש. העיצוב נעשה בגוונים בהירים עם נגיעות עץ רכות, ליצירת אווירה חמימה, רכה ומזמינה. זהו פרויקט שמראה איך תכנון מדויק יכול לשנות לא רק את הדירה, אלא גם את ההרגשה כלפיה.",
      images: kfarsabaImages
    },
    {
      id: 4,
      title: "דירת קבלן בחריש",
      description: "עיצוב דירה משלב התוכניות לשינויי הדיירים ועד לשלב ההום סטיילינג. נקרא לה - קו נקי בחריש. שיפוץ ועיצוב מחדש לדירת קבלן בחריש. עם דגש על נגרות בהתאמה אישית וקווים נקיים. העיצוב נעשה בגוונים מונוכרומטיים שיוצרים תחושת רוגע, המשכיות ואחידות.",
      images: charishImages
    },
    {
      id: 5,
      title: "עיצוב דירת גן מקבלן שעברה שיפוץ",
      description: "\"דיוק בשלבים\" - דירת גן מקבלן שעוצבה עם קבלת המפתח, בליווי אישי שהתבסס על פגישות ייעוץ מדוייקות לפי שלבים. התהליך אפשר תכנון מדויק מראש, שכלל גם הנמכת תקרה ותאורה שקועה, דרך עיצוב החללים, בחירת גוונים, חומרים ועד חדרי הרחצה. בזכות שילוב נכון בין תכנון מוקדם ללווי גמיש, הצלחנו לייצר בית מעוצב ושלם, גם בלי תהליך של ליווי מלא. דוגמא מצוינת לכך שעיצוב חכם יכול להתחיל כבר בפגישה אחת נכונה.",
      images: gardenImages
    }
  ];

  return <>
  <div className={styles.background}>
 <div className={styles.title} id="פרוייקטים" >הפרוייקטים שלי</div>
  <div className={styles.description} >במהלך השנים עבדתי על עשרות פרוייקטים, בעשרות סגנונות שונים - חשוב לי שתקבלו טעימה מכל סגנון  (תגללו ותהנו) </div>
      <div className={styles.projectsList}>
        {projectsData.map((project, index) => (
          <div key={project.id} className={styles.projectSection}>
    
            
            <div className={styles.projectContent}>
              <ProjectCarousel
                projectNumber={String(index + 1).padStart(2, '0')}
                images={project.images}
                title={project.title}
                description={project.description}
              />
            </div>
          </div>
        ))}
      </div>
 </div>
  </>
};

export default Projects;