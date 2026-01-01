import { useState, useEffect } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import styles from './login.module.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Login submitted', {
      username: formData.get('username'),
      password: formData.get('password')
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Register submitted', {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    });
  };

  return (
    <>
      
      {isLoading && (
        <div className={styles.pageLoader}>
          <div className={styles.loaderContent}>
            <div className={styles.slidingBar}></div>
            <div className={styles.loaderText}>Loading...</div>
          </div>
        </div>
      )}

      <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <div className={styles.curvedShape}></div>
        <div className={styles.curvedShape2}></div>

        
        <div className={`${styles.formBox} ${styles.formBoxLogin}`}>
          <h2 className={styles.animation} style={{ '--D': 0, '--S': 21 }}>
            Login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--D': 1, '--S': 22 }}>
              <input type="text" name="username" required />
              <label>Username</label>
              <User className={styles.icon} size={18} />
            </div>

            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--D': 2, '--S': 23 }}>
              <input type="password" name="password" required />
              <label>Password</label>
              <Lock className={styles.icon} size={18} />
            </div>

            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--D': 3, '--S': 24 }}>
              <button className={styles.btn} type="submit">
                Login
              </button>
            </div>

            <div className={`${styles.regiLink} ${styles.animation}`} style={{ '--D': 4, '--S': 25 }}>
              <p>
                Don't have an account? <br />
                <a onClick={() => setIsActive(true)}>Sign Up</a>
              </p>
            </div>
          </form>
        </div>

        
        <div className={`${styles.infoContent} ${styles.infoContentLogin}`}>
          <h2 className={styles.animation} style={{ '--D': 0, '--S': 20 }}>
            WELCOME BACK!
          </h2>
          <p className={styles.animation} style={{ '--D': 1, '--S': 21 }}>
            We are happy to have you with us again. If you need anything, we are here to help.
          </p>
        </div>

        
        <div className={`${styles.formBox} ${styles.formBoxRegister}`}>
          <h2 className={styles.animation} style={{ '--li': 17, '--S': 0 }}>
            Register
          </h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--li': 18, '--S': 1 }}>
              <input type="text" name="username" required />
              <label>Username</label>
              <User className={styles.icon} size={18} />
            </div>

            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--li': 19, '--S': 2 }}>
              <input type="email" name="email" required />
              <label>Email</label>
              <Mail className={styles.icon} size={18} />
            </div>

            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--li': 19, '--S': 3 }}>
              <input type="password" name="password" required />
              <label>Password</label>
              <Lock className={styles.icon} size={18} />
            </div>

            <div className={`${styles.inputBox} ${styles.animation}`} style={{ '--li': 20, '--S': 4 }}>
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div>

            <div className={`${styles.regiLink} ${styles.animation}`} style={{ '--li': 21, '--S': 5 }}>
              <p>
                Already have an account? <br />
                <a onClick={() => setIsActive(false)}>Sign In</a>
              </p>
            </div>
          </form>
        </div>

        
        <div className={`${styles.infoContent} ${styles.infoContentRegister}`}>
          <h2 className={styles.animation} style={{ '--li': 17, '--S': 0 }}>
            WELCOME!
          </h2>
          <p className={styles.animation} style={{ '--li': 18, '--S': 1 }}>
            We're delighted to have you here. If you need any assistance, feel free to reach out.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;