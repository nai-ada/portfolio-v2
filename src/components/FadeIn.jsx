// components/FadeIn.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;