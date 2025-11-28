import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Wrench, User } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  return (
    <Section 
      id="work" 
      title="Selected Work" 
      subtitle="Key projects highlighting strategic instructional design, technical training, and gamification."
    >
      {/* 1. Main Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Image Card */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-900">
              <motion.img 
                layoutId={`card-image-${project.id}`}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Text Info */}
            <div>
              <motion.h3 
                layoutId={`card-title-${project.id}`}
                className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors"
              >
                {project.title}
              </motion.h3>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500 uppercase tracking-wider">
                <span>{project.category}</span>
                <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Full Screen Case Study View */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top Navigation Bar */}
            <div className="sticky top-0 left-0 right-0 z-10 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  <ArrowLeft size={20} /> Back to Work
                </button>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {selectedProject.category} — {selectedProject.year}
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
              
              {/* Header */}
              <motion.h1 
                layoutId={`card-title-${selectedProject.id}`}
                className="text-4xl md:text-6xl font-bold text-white mb-12 max-w-4xl"
              >
                {selectedProject.title}
              </motion.h1>

              {/* Hero Image */}
              <motion.div 
                layoutId={`card-container-${selectedProject.id}`}
                className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-slate-800 bg-slate-900"
              >
                <motion.img 
                  layoutId={`card-image-${selectedProject.id}`}
                  src={selectedProject.image} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Case Study Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                
                {/* Sidebar (Meta Data) */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <User size={14} /> Role
                    </h4>
                    <p className="text-lg text-white font-medium">{selectedProject.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Calendar size={14} /> Timeline
                    </h4>
                    <p className="text-lg text-white font-medium">{selectedProject.timeline}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Wrench size={14} /> Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-16">
                  
                  {/* Overview */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </section>

                  {/* The Challenge */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-8">The Challenge</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                          <h3 className="text-white font-bold mb-3">{challenge.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {challenge.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Visual Design Gallery */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-8">Visual Design</h2>
                    <div className="grid grid-cols-1 gap-8">
                       {selectedProject.detailImages.map((img, idx) => (
                         <div key={idx} className="bg-slate-900 p-2 md:p-4 rounded-2xl border border-slate-800">
                            <img src={img} alt="Detail shot" className="w-full h-auto rounded-lg" />
                            <p className="text-center text-slate-600 text-xs mt-4 uppercase tracking-wider">Detail Shot {idx + 1}</p>
                         </div>
                       ))}
                    </div>
                  </section>

                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};