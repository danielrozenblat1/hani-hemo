import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import styles from './Place.module.css';

const Place = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:052-555-3141';
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span className={styles.label}>
          <MapPin className={styles.icon} />
          מיקום הסטודיו:
        </span>
        <div className={styles.value}>כפר יונה</div>
      </div>
      
      <div className={styles.section}>
        <span className={styles.label}>
          <Mail className={styles.icon} />
           לפניות במייל:
        </span>
        <a 
          href="mailto:hanihemo@gmail.com" 
          className={styles.emailLink}
        >
          hanihemo@gmail.com
        </a>
      </div>
      
      <div className={styles.section}>
        <span className={styles.label}>
          <Phone className={styles.icon} />
          לעוד פרטים ישירות ממני:
        </span>
        <a 
          onClick={handlePhoneClick}
          className={styles.phoneLink}
        >
          052-555-3141
        </a>
      </div>
    </div>
  );
};

export default Place;