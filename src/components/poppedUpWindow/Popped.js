import { useState, useRef, useEffect } from "react";
import styles from "./Popped.module.css";
import { FaTimes } from "react-icons/fa";

const Popped = () => {
  const [opened, setOpened] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // State management like in FormScreen
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "", // הוספת שדה מייל
    reason: ""
  });
  
  // Refs for direct DOM access
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null); // ref למייל
  const reasonRef = useRef(null);
  
  // URL שאליו נשלח את הליד - using the same as in FormScreen
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "hanihemo@gmail.com";

  const handleToggle = () => {
    setOpened(!opened);
    // Reset states when closing
    if (opened) {
      setShowThankYou(false);
      setSubmitted(false);
    }
  };

  useEffect(() => {
    // הצגת הטופס לראשונה אחרי 30 שניות
    const initialTimeout = setTimeout(() => {
      setOpened(true);
    }, 30000);

    // הצגת הטופס כל 3 דקות
    const interval = setInterval(() => {
      setOpened(true);
    }, 180000);

    // התנקות טיימרים על פי צורך
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // מניעת שליחה נוספת אם כבר בתהליך
    if (isLoading) return;
    
    const name = nameRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const email = emailRef?.current?.value || ""; // מייל יכול להיות ריק
    const reason = reasonRef?.current?.value;

    // Validation logic from FormScreen
    if(name.trim().length <= 2){
      alert("אנא הכנס שם מלא");
      return;
    }
    
    if(phone.trim().length !== 10){
      alert("אנא הכנס מספר טלפון הכולל 10 ספרות");
      return;
    }
    
    if(reason.trim().length <= 2){
      alert("אנא הכנס במה את עוסקת");
      return;
    }
    
    // הפעלת מצב טעינה
    setIsLoading(true);
    
    // Prepare data for submission - same structure as in Roy's example
    const serverData = {
      name,
      phone,
      email, // מייל יהיה ריק אם לא הוזן
      reason,
      reciver
    };
    
    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serverData)
      });
      
      console.log("✅ שלב 3: התקבלה תגובה מהשרת");
      console.log("🖥️ server response status:", serverResponse.status);
      
      const serverText = await serverResponse.text();
      console.log("🖥️ server response text:", serverText);
      
      if (serverResponse.ok) {
        // Reset form
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
        reasonRef.current.value = "";
        
        // Reset state as well
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          reason: ""
        });
        
        setSubmitted(true);
        
        // Show thank you message instead of navigating
        setShowThankYou(true);
        
        // Close the popup after showing thank you message for 3 seconds
        setTimeout(() => {
          setOpened(false);
          setShowThankYou(false);
        }, 3000);
        
      } else {
        throw new Error("שליחה נכשלה");
      }
    } catch (error) {
      console.error("❌ שגיאה:", error);
      alert("התרחשה שגיאה, אנא נסה שוב מאוחר יותר");
    } finally {
      // סיום מצב טעינה
      setIsLoading(false);
    }
  };

  return (
    <>
      {opened && (
        <div className={styles.overlay}>
          <div className={styles.popped}>
            <FaTimes className={styles.x} onClick={handleToggle} />
            <div className={styles.formContainer}>
              {/* Classical decorative elements like in FormScreen */}
              <div className={styles.formDecor + " " + styles.topLeft}></div>
              <div className={styles.formDecor + " " + styles.bottomRight}></div>
              
              {!showThankYou ? (
                <>
                  <p className={styles.formSubtitle}>תשאירו פרטים ונחזור אליכם בהקדם</p>
                  
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="מה השם?" 
                        className={styles.input} 
                        ref={nameRef}
                        required 
                        disabled={isLoading}
                      />
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="מספר טלפון" 
                        className={styles.input} 
                        ref={phoneRef}
                        required 
                        disabled={isLoading}
                      />
                    </div>
                    
             
                    
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        name="reason" 
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="סיבת הפנייה" 
                        className={styles.input} 
                        ref={reasonRef}
                        required 
                        disabled={isLoading}
                      />
                    </div>
                           <div className={styles.inputGroup}>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="כתובת מייל (אופציונלי)" 
                        className={styles.input} 
                        ref={emailRef}
                        disabled={isLoading}
                      />
                    </div>
                    <button 
                      type="submit" 
                      className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? "הפרטים נשלחו.. כמה שניות" : "חני, בואי נדבר!"}
                    </button>
                    <p className={styles.limitedNotice}>* מספר המקומות בחודש מוגבל *</p>
                  </form>
                </>
              ) : (
                <div className={styles.thankYouMessage}>
                  <h3>תודה!</h3>
                  <p>שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים</p>
                  <p>החלון ייסגר בעוד כמה שניות...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popped;