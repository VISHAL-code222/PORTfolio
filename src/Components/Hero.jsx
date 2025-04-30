import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../CSS/Hero.css';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.NET) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          color: 0x7f00ff,           // Purple
          backgroundColor: 0x121212 , // Charcoal black
          
          points: 14.0,
          maxDistance: 20.0,
          spacing: 18.0
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const text = "VISHAL LODHA";

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        repeat: Infinity,
        repeatType: "loop",
        delayChildren: 1
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="home" className="hero" ref={vantaRef}>
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
        <motion.h1>
          Hi, I'm{' '}
          <motion.span className="highlight name-animation" variants={containerVariants} initial="initial" animate="animate">
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.h2>FULL-STACK DEVELOPER</motion.h2>
        <motion.p>
          I create beautiful, responsive websites with modern technologies
        </motion.p>
        <div className="cta-buttons">
          <a href="#projects" className="btn secondary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
          <a href="/VISHAL_LODHA_RESUME.pdf" download className="btn secondary">Download CV</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


