import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          data-testid="loading-screen"
        >
          <div className="flex items-end gap-1 mb-8 h-16">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-primary rounded-full"
                animate={{
                  height: ['20%', '100%', '20%'],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.15
                }}
              />
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 10, letterSpacing: '0em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.1em' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-serif text-foreground tracking-widest uppercase"
          >
            ACOUSTIC GAURAV
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
