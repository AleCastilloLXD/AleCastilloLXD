import React from 'react';
import { Section } from './Section';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Services" 
      subtitle="Comprehensive L&D Strategies tailored for dynamic organizations. I seamlessly integrate with your existing team to drive Instructional Design excellence or manage full-cycle program development and LMS administration."
      className="bg-slate-950"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-8 bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 transition-colors rounded-xl group"
          >
            <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800">
              <service.icon className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};