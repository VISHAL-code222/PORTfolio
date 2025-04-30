import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import icon_2 from "../assets/logo_2.png"
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    hover: { scale: 1.1, color: '#4CAF50' }
  };

  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="nav-container">
        <div className="logo">
          <a href="#home"><img src={icon_2} alt="" />PORTFOLIO</a>
        </div>
        
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <motion.li whileHover={linkVariants.hover}>
            <a href="#home">Home</a>
          </motion.li>
          <motion.li whileHover={linkVariants.hover}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li whileHover={linkVariants.hover}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li whileHover={linkVariants.hover}>
            <a href="#experience">Experience</a>
          </motion.li>
          <motion.li whileHover={linkVariants.hover}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;    