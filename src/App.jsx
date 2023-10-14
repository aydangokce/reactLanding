import { useState } from 'react';
import Nav from './common/nav';
import Hero from './sections/hero/hero';
import PerformanceMarketing from './sections/pmarketing';
import GrowthConsulting from './sections/gconsulting';
import AppAudit from './sections/appaudit';
import Footer from './sections/footer';
import { motion } from 'framer-motion';

function App() {
  const cardVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    <div style={{ width: '100%' }}>
      <Nav />
      <Hero />
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
      >
        <PerformanceMarketing />
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
      >
        <GrowthConsulting />
      </motion.div>
      <motion.div
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.2 }}
      >
        <AppAudit />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
