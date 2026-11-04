import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-teal-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
};

export default App;