
import React from 'react';
import styles from  './HeroStyles.module.css';
import meImage from '../../assets/jackson-portrait-site-cropped.png';
import CV from '../../assets/Jackson_Keus_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun: moon;
  const linkedInIcon = theme === 'light' ? linkedInLight: linkedInDark;
  const githubIcon = theme === 'light' ? githubLight: githubDark;

  return (
<section id="Hero" className="container d-flex align-items-center justify-content-center min-vh-100 py-5">
  <div className="row w-100">
    {/* Text Section */}
    <div className="col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center align-items-center">
      <div className={`d-flex flex-column align-items-center ${styles.info}`}>
        <h1 className={styles.name}>Jackson</h1>
        <h2 className={styles.surname}>Keus</h2>
        <div className="d-flex gap-3 mb-3 justify-content-center">
          <a href="https://www.linkedin.com/in/jackson-keus/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn Icon" className={styles.socialIcon} />
          </a>
          <a href="https://github.com/jkeus" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" className={styles.socialIcon} />
          </a>
        </div>
        <p className={styles.description}>
          Senior Computer Science student with a passion for problem solving and new technologies.
        </p>
        <a href={CV} download>
          <button className={`btn ${styles.resumeButton}`}>
            Resume
          </button>
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center position-relative">
      <img className={`img-fluid ${styles.profileImage}`} src={meImage} alt="Profile picture of Jackson Keus" />
      <img
        className={`position-absolute top-0 end-0 ${styles.themeIcon}`}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
    </div>
  </div>
</section>



  );
}

export default Hero
