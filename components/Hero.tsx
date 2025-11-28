import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Globe2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              High-impact learning strategies, <br />
              <span className="text-slate-500">delivered remotely.</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              I thrive on developing impactful e-learning solutions, and my mission is straightforward: to unlock the potential of your technical knowledge.

As a specialist, I take vital, complex information and shape it into an intuitive and organic format for the end-user. The result is high-quality remote training assets that your teams can apply immediately. I'm ready to listen to the challenge of your next training initiative.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all transform hover:-translate-y-1"
              >
                View Work <ArrowRight size={20} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-semibold rounded-lg transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-sm text-slate-500 font-medium border-t border-slate-900 pt-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-500" /> Mexico City (CST)
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-teal-500" /> Fluent English / Native Spanish
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-3xl border-4 border-slate-950 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src="https://i.imgur.com/L2EBBEp.jpeg" 
                  alt="Alejandra Castillo" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
