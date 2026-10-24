import { motion } from "motion/react";

// Envolve cada página com uma entrada/saída suave
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
