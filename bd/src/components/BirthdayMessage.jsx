import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function BirthdayMessage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 2, repeat: Infinity }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-12"
    >
      <motion.h1 
        animate={controls}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-6"
      >
        Happy Birthday!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
      >
        Faryal and Zahra Twins. To my amazing friends, thank you for all the wonderful memories we've shared.
        Here's to many more years of friendship and adventures!
      </motion.p>
    </motion.div>
  );
}

export default BirthdayMessage;