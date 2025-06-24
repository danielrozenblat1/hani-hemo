import React from 'react';
import styles from "./Button.module.css";

const Button = (props) => {
  const handleButtonClick = () => {
    const phoneNumber = "+972525553141";
    const message =props.message ? props.message: "היי חני הגעתי מהדף שלך,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={styles.center}>
      <button className={styles.button} onClick={handleButtonClick}>
        <span className={styles.buttonContent}>
          {props.text}
        </span>
        <div className={styles.shine}></div>
      </button>
    </div>
  );
};

export default Button;