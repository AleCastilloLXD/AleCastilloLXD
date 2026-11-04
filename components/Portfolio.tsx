import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Wrench, User } from 'lucide-react';

const imgFit = (src: string) => (src.endsWith('.svg') ? 'object-contain' : 'object-cover');

export const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  // Lock body scroll, focus the close button, close on Escape
  useEffect(() => {
    if (selectedId === null) {
      document.body.style.overflow = 'unset';
      lastTrigger.current?.focus();
      return;
    }
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  const selectedProject = PROJECTS.find(p => p.id === selectedId);

  const open = (id: number, el: HTMLElement) => {
    lastTrigger.current = el;
    setSelectedId(id);
  };

  return (
    <Section
      id="work"
      title="Selected Work"
      subtitle="Case studies in sales enablement, technical training, medical education and compliance: the problem, what I designed, and what changed."
    >
      {/* 1. Main Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.button
            type="button"
            key={project.id}
            layoutId={`card-container-${project.id}`}
            onClick={(e) => open(project.id, e.currentTarget)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group text-left cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            aria-label={`Open case study: ${project.title}`}
          >
            {/* Image Card */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-900">
              <motion.img
                layoutId={`card-image-${project.id}`}
                src={project.image}
                alt={project.imageAlt}
                className={`w-full h-full ${imgFit(project.image)} transition-transform duration-700 group-hover:scale-105`}
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
              <div className="flex items-center gap-3 text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                <span>{project.category}</span>
                <span className="w-1 h-1 bg-slate-500 rounded-full" aria-hidden="true"></span>
                <span>{project.year}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{project.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* 2. Full Screen Case Study View */}
      <AnimatePresence>
        {selectedId !== null && selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top Navigation Bar */}
            <div className="sticky top-0 left-0 right-0 z-10 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors font-medium rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <ArrowLeft size={20} aria-hidden="true" /> Back to Work
                </button>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  {selectedProject.category} — {selectedProject.year}
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

              {/* Header */}
              <motion.h1
                id="case-title"
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
                  alt={selectedProject.imageAlt}
                  className={`w-full h-full ${imgFit(selectedProject.image)}`}
                />
              </motion.div>

              {/* Case Study Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                {/* Sidebar (Meta Data) */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <User size={14} aria-hidden="true" /> Role
                    </h2>
                    <p className="text-lg text-white font-medium">{selectedProject.role}</p>
                  </div>

                  <div>
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Calendar size={14} aria-hidden="true" /> Timeline
                    </h2>
                    <p className="text-lg text-white font-medium">{selectedProject.timeline}</p>
                  </div>

                  <div>
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Wrench size={14} aria-hidden="true" /> Tools
                    </h2>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.tools.map(tool => (
                        <li key={tool} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm text-slate-300">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-16">

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-8">The Challenge</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                          <h3 className="text-white font-bold mb-3">{challenge.title}</h3>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {challenge.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {selectedProject.solution && (
                    <section>
                      <h2 className="text-2xl font-bold text-white mb-6">The Solution</h2>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </section>
                  )}

                  {selectedProject.outcome && (
                    <section className="border-l-4 border-teal-400 pl-6">
                      <h2 className="text-2xl font-bold text-white mb-4">The Outcome</h2>
                      <p className="text-lg text-white leading-relaxed">
                        {selectedProject.outcome}
                      </p>
                    </section>
                  )}

                  {selectedProject.detailImages.length > 0 && (
                    <section>
                      <h2 className="text-2xl font-bold text-white mb-8">Visual Design</h2>
                      <div className="grid grid-cols-1 gap-8">
                        {selectedProject.detailImages.map((img, idx) => (
                          <figure key={idx} className="bg-slate-900 p-2 md:p-4 rounded-2xl border border-slate-800">
                            <img
                              src={img}
                              alt={`${selectedProject.title}: design detail ${idx + 1}`}
                              className="w-full h-auto rounded-lg"
                              loading="lazy"
                            />
                          </figure>
                        ))}
                      </div>
                    </section>
                  )}

                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
