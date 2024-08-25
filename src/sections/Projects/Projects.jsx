import styles from './ProjectsStyles.module.css';
import simonSays from '../../assets/simon-says-tn.jpeg';
import mips from '../../assets/mips-tn.png';
import shakespeare from '../../assets/shakespeare-tn.jpeg';
import web3 from '../../assets/web3-tn.jpeg';
import ProjectCard from '../../common/ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={simonSays}
          link="https://github.com/jkeus/pico_alarm"
          h3="Simon Says Alarm Clock"
          p="Custom made alarm clock running on a rasberry pi pico with microPython. The alarm only deactivates once a Simon Says game is complete"
        />
        <ProjectCard
          src={mips}
          link="https://github.com/jkeus/Assembly-IMG-Proccessing-"
          h3="Assembly Image Processing"
          p="Assembly Program that can tear, rotate, monochrome, and sheer a image given by the user"
        />
        <ProjectCard
          src={shakespeare}
          link="https://github.com/jkeus/Shakespeare_generator/tree/main"
          h3="Shakespeare Text Generator"
          p="A recurent nueral network that can generate 'new' Shakespeare poems. Written in python with tensor flow"
        />
        <ProjectCard
          src={web3}
          link="https://github.com/jkeus/Web3-Mystery-Marketplace/tree/main"
          h3="Web3 Mystery Marketplace Proof of Concept"
          p="Proof of concept website for a mystery marketplace on the ETH blockchain network. Using Geth, Solidity, and Apache"
        />
      </div>
    </section>
  );
}

export default Projects;
