import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/Experience.css';
import data_first from "../Data/Data_1"


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data_first.map((exp, index) => (
          <motion.div key={index} className="experience-card" variants={cardVariants}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
