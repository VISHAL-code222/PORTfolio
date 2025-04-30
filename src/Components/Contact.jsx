import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../CSS/Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert("Form submitted successfully");
    reset(); // clear the form
  };

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
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>vishallodha1998@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91-7728974374</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Location</h3>
                <p>Udaipur, Rajasthan</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            variants={itemVariants}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
