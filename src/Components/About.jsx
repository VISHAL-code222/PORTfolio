import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/About.css';

const About = () => {
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
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>
        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-text">
            <p>
              I am a passionate web developer with expertise in creating modern,
              responsive websites. With a strong foundation in front-end technologies,
              I strive to build user-friendly and visually appealing web applications.
            </p>
            <p>
              My skills include:
            </p>
            <ul className="skills-list">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML5 & CSS3</li>
              <li>Express-js</li>
              <li>Node-js</li>
              <li>Git & Github</li>
              <li>Mongo-DB</li>
              <li>My-SQL</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 