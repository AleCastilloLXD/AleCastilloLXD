import React from 'react';
import { Section } from './Section';
import { EXPERIENCE_CARDS } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section 
      id="experience" 
      title="Elevate Your Learning Experiences" 
      subtitle="Transforming Complex Knowledge into Engaging, High-Impact Learning Solutions."
    >
      {/* Intro Text */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <div className="pl-6 border-l-2 border-teal-500">
          <p className="text-xl text-slate-300 leading-relaxed italic">
            "I'm a Learning Experience & Instructional Design Lead with 10+ years of expertise, dedicated to building innovative educational journeys that drive measurable results."
          </p>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {EXPERIENCE_CARDS.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="p-8 pb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700/50">
                <card.icon className="text-teal-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white leading-snug min-h-[3.5rem] mb-2">
                {card.title}
              </h3>
            </div>

            {/* Content Body */}
            <div className="flex-1 p-8 pt-0 space-y-6">
              
              {/* Problem */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Problem</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-3">
                  {card.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                 <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Solution</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-slate-600 pl-3">
                  {card.solution}
                </p>
              </div>
            </div>

            {/* Benefit Footer */}
            <div className="bg-slate-950/50 p-6 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-teal-400">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Your Benefit</span>
              </div>
              <p className="text-white text-sm font-medium leading-relaxed">
                {card.benefit}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};