import styles from "./ThirdScreen.module.css";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// Import your SVG components here
import WithyouIcon from "../svg/undraw_interior-design_j887.svg";
import SearchesIcon from "../svg/undraw_time-management_fedt.svg"
import WrongIcon from "../svg/undraw_warning_tl76.svg";
import MoneyyIcon from "../svg/undraw_credit-card-payments_y0vn.svg";
import ForyouIcon from "../svg/undraw_work-in-progress_m95a.svg";
import Button from "../components/button/Button";

const ThirdScreen = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.subtitle}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 400,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.section}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
    ScrollReveal().reveal(`.${styles.stepHeader}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <>
      <div className={styles.bigWrapper}>
        <div className={styles.step} itemScope itemType="https://schema.org/Organization">
          <div className={styles.icons}>
            <img src={WrongIcon} alt="מניעת טעויות" className={styles.iconImage} />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
              מניעת טעויות קריטיות
            </div>
            <div className={styles.section} itemProp="description">
              בלי תכנון מקצועי, אתם עלולים להזמין רהיטים לא מתאימים שיעלו לכם אלפי שקלים להחליף. כמעצבת בעלת ניסיון והכשרה הנדסית, אני מזהה מראש בעיות במידות, פרופורציות ומיקומים — וחוסכת לכם כאב ראש ועלויות מיותרות.
            </div>
          </div>
        </div>

        <div className={styles.step} itemScope itemType="https://schema.org/Product">
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
              חיסכון בזמן והתעסקות
            </div>
            <div className={styles.section} itemProp="description">
              במקום שתבזבזו חודשים על השוואות, ספקים ואנשי מקצוע לא אמינים — אני נותנת לכם גישה ישירה לרשת מוכחת של בעלי מקצוע איכותיים שעבדתי איתם במשך שנים, במחירים הוגנים ובשקט נפשי מלא.
            </div>
          </div>
          <div className={styles.icons}>
            <img src={SearchesIcon} alt="חיסכון בזמן" className={styles.iconImage} />
          </div>
        </div>

        <div className={styles.step} itemScope itemType="https://schema.org/Organization">
          <div className={styles.icons}>
            <img src={ForyouIcon} alt="התאמה אישית" className={styles.iconImage} />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
              התאמה מושלמת לצרכים שלכם
            </div>
            <div className={styles.section} itemProp="description">
              עיצוב מהפינטרסט או מאפליקציות AI נשמע טוב בתיאוריה, אבל במציאות זה לא תמיד עובד. אני בונה עבורכם תכנון מדויק שמבוסס על המידות, הפרופורציות והצרכים האמיתיים שלכם.
            </div>
          </div>
        </div>

        <div className={styles.step} itemScope itemType="https://schema.org/Organization">
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
              שליטה בתקציב ומניעת הפתעות
            </div>
            <div className={styles.section} itemProp="description">
              אחד הגורמים המרכזיים לחריגות בתקציב הוא חוסר בתכנון כלכלי מדויק. אני דואגת להכין עבורכם כתב כמויות ותכנון מסודר שמונעים מכם הפתעות יקרות ומבטיחים שליטה מלאה בתקציב.
            </div>
          </div>
          <div className={styles.icons}>
            <img src={MoneyyIcon} alt="שליטה בתקציב" className={styles.iconImage} />
          </div>
        </div>

        <div className={styles.step} itemScope itemType="https://schema.org/Course">
          <div className={styles.icons}>
            <img src={WithyouIcon} alt="ליווי אישי" className={styles.iconImage} />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemProp="name">
              ליווי אישי שמונע עומס ולחץ
            </div>
            <div className={styles.section} itemProp="description">
              אין שום סיבה שתנהלו את כל הבירוקרטיה והפרטים הקטנים לבד. אני מלווה אתכם באופן אישי כדי שתוכלו ליהנות מהדרך, במקום להילחץ ממנה.
            </div>
          </div>
        </div>
    
      </div>
      <div className={styles.description}>
        אני כאן כדי לתכנן ביחד אתכם בית שירגיש נכון. מהתכנון ועד הפרטים הכי קטנים. ולתרגם את החלום שלכם למרחב שנעים לחיות בו, כל יום מחדש.
      </div>
      <Button text="חני, בואי נתאם שיחה"/>
    </>
  );
};

export default ThirdScreen;