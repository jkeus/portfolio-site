
import React from 'react';
import styles from  './HeroStyles.module.css';
import meImage from '../../assets/portrait-img.png';
import CV from '../../assets/Jackson-Keus-Resume.pdf';
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
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.Hero} 
        src={meImage} 
        alt="Profile picture of Jackson Keus" 
        />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode icon"
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Jackson <br /> Keus</h1>
        <h2>Software Developer</h2>
        <span>
          <a href='https://www.linkedin.com/in/jackson-keus/' target="_blank">
            <img src={linkedInIcon} alt='LinkedIn Icon'></img>
          </a>
          <a href='https://github.com/jkeus' target="_blank">
            <img src={githubIcon} alt='GitHub Icon'></img>
          </a>
        </span>
        <p>Senior Computer Science student with a passion for problem solving and new technologies.</p>
        <a href={CV} download>
          <button className='hover'>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero
