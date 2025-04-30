import React from 'react';
import { motion } from 'framer-motion';
import data_two from "../Data/Data_2"
import '../CSS/Projects.css';

const Projects = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>My Projects</motion.h2>
        <div className="projects-grid">
  {data_two.map((project, index) => (
    <motion.div
      key={index}
      className="project-card"
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a className="anchor" href={project.link} target="_blank" rel="noopener noreferrer">
          Visit Project →
        </a>
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </motion.div>
    </section>
  );
};

export default Projects;