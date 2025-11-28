import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                {title} <span className="text-teal-400">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-teal-500 mt-6 rounded-full opacity-80"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};