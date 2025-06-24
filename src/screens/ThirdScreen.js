import styles from "./ThirdScreen.module.css";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import ScrollReveal from "scrollreveal";
import withyou from "../icons/wired-outline-645-people-handshake-transaction-hover-pinch (1).json";
import searches from "../icons/wired-outline-19-magnifier-zoom-search-morph-cross.json";
import wrong from "../icons/wired-outline-731-real-estate-building-project-hover-pinch.json";
import moneyy from "../icons/wired-outline-298-coins-hover-spending (1).json";
import foryou from "../icons/wired-outline-781-rulers-hover-pinch.json";
import Button from "../components/button/Button";

const ThirdScreen = () => {
  const playerRef1 = useRef();
  const playerRef2 = useRef();
  const playerRef3 = useRef();
  const playerRef4 = useRef();
  const playerRef5 = useRef();

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

    playerRef1.current?.playFromBeginning();
    playerRef2.current?.playFromBeginning();
    playerRef3.current?.playFromBeginning();
    playerRef4.current?.playFromBeginning();
    playerRef5.current?.playFromBeginning();
  }, []);

  return (
    <>
      <div className={styles.bigWrapper}>
        <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
          <div className={styles.icons}>
            <Player
              ref={playerRef1}
              size="100%"
              onComplete={() => setTimeout(() => playerRef1.current?.playFromBeginning(), 2500)}
              icon={wrong}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemprop="name">
              מניעת טעויות קריטיות
            </div>
            <div className={styles.section} itemprop="description">
              בלי תכנון מקצועי, אתם עלולים להזמין רהיטים לא מתאימים שיעלו לכם אלפי שקלים להחליף. כמעצבת בעלת ניסיון והכשרה הנדסית, אני מזהה מראש בעיות במידות, פרופורציות ומיקומים — וחוסכת לכם כאב ראש ועלויות מיותרות.
            </div>
          </div>
        </div>

        <div className={styles.step} itemscope itemtype="https://schema.org/Product">
          <div className={styles.text}>
            <div className={styles.stepHeader} itemprop="name">
              חיסכון בזמן והתעסקות
            </div>
            <div className={styles.section} itemprop="description">
              במקום שתבזבזו חודשים על השוואות, ספקים ואנשי מקצוע לא אמינים — אני נותנת לכם גישה ישירה לרשת מוכחת של בעלי מקצוע איכותיים שעבדתי איתם במשך שנים, במחירים הוגנים ובשקט נפשי מלא.
            </div>
          </div>
          <div className={styles.icons}>
            <Player
              ref={playerRef2}
              delay={500}
              size="100%"
              onComplete={() => setTimeout(() => playerRef2.current?.playFromBeginning(), 2500)}
              icon={searches}
            />
          </div>
        </div>

        <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
          <div className={styles.icons}>
            <Player
              ref={playerRef3}
              size="100%"
              onComplete={() => setTimeout(() => playerRef3.current?.playFromBeginning(), 2500)}
              icon={foryou}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemprop="name">
              התאמה מושלמת לצרכים שלכם
            </div>
            <div className={styles.section} itemprop="description">
              עיצוב מהפינטרסט או מאפליקציות AI נשמע טוב בתיאוריה, אבל במציאות זה לא תמיד עובד. אני בונה עבורכם תכנון מדויק שמבוסס על המידות, הפרופורציות והצרכים האמיתיים שלכם — כמו חליפה שמותאמת במיוחד עבורכם.
            </div>
          </div>
        </div>

        <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
          <div className={styles.text}>
            <div className={styles.stepHeader} itemprop="name">
              שליטה בתקציב ומניעת הפתעות
            </div>
            <div className={styles.section} itemprop="description">
              אחד הגורמים המרכזיים לחריגות בתקציב הוא חוסר בתכנון כלכלי מדויק. אני דואגת להכין עבורכם כתב כמויות ותכנון מסודר שמונעים מכם הפתעות יקרות ומבטיחים שליטה מלאה בתקציב.
            </div>
          </div>
          <div className={styles.icons}>
            <Player
              ref={playerRef4}
              delay={500}
              size="100%"
              onComplete={() => setTimeout(() => playerRef4.current?.playFromBeginning(), 2500)}
              icon={moneyy}
            />
          </div>
        </div>

        <div className={styles.step} itemscope itemtype="https://schema.org/Course">
          <div className={styles.icons}>
            <Player
              ref={playerRef5}
              size="100%"
              onComplete={() => setTimeout(() => playerRef5.current?.playFromBeginning(), 2500)}
              icon={withyou}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.stepHeader} itemprop="name">
              ליווי אישי שמונע עומס ולחץ
            </div>
            <div className={styles.section} itemprop="description">
              אין שום סיבה שתנהלו את כל הבירוקרטיה והפרטים הקטנים לבד. אני מלווה אתכם באופן אישי, דואגת לתיאומים, לטלפונים ולניהול התהליך מא' ועד ת' — כדי שתוכלו ליהנות מהדרך, במקום להילחץ ממנה.
            </div>
          </div>
        </div>
    
      </div>
          <Button text="חני, בואי נתאם שיחה"/>
    </>
  );
};

export default ThirdScreen;
