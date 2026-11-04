import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Globe2, Download } from 'lucide-react';
import { CONTACT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

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
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              Open to full-time remote roles
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Alejandra Castillo <br />
              <span className="text-slate-300 text-3xl md:text-4xl font-semibold">Senior Instructional Designer for Sales &amp; GTM Enablement</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              I design sales and GTM enablement that helps revenue teams sell complex SaaS with confidence:
              AI-accelerated, accessible by default, and measured by what sellers do differently.
              15+ years in e-learning, most recently at SailPoint and Sovos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg transition-all transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View Work <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.cv}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <Download size={20} aria-hidden="true" /> Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-sm text-slate-400 font-medium border-t border-slate-900 pt-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-teal-500" aria-hidden="true" /> {CONTACT.location}
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-teal-500" aria-hidden="true" /> Fluent English / Native Spanish
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
              <div aria-hidden="true" className="absolute -inset-4 bg-gradient-to-tr from-teal-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative w-72 h-96 md:w-80 md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-3xl border-4 border-slate-950 shadow-2xl overflow-hidden group">
                <div aria-hidden="true" className="absolute inset-0 bg-teal-500/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src="/alejandra-castillo.jpg"
                  alt="Portrait of Alejandra Castillo"
                  width={800}
                  height={1000}
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
