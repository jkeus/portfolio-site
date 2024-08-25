import React from 'react';
import styles from './ProjectCardStyles.module.css'

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank" className={styles.projectCardContent}>
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectCard;