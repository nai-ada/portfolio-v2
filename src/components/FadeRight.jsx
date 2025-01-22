// components/FadeRight.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeRight = ({ children, delay = 0, duration = 1 }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: duration, delay: delay },
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default FadeRight;
