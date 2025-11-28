import React from 'react';
import { Section } from './Section';
import { CONTACT } from '../constants';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Let's Connect" 
      subtitle="Ready to drive significant results? I leverage my expertise to help organizations achieve their strategic objectives."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Info Column */}
        <div className="space-y-8">
          <p className="text-lg text-slate-300 leading-relaxed">
            Working remotely shouldn't mean being disconnected. I pride myself on 
            <span className="text-teal-400 font-medium"> clear communication</span>, 
            overlap with US/EU timezones, and seamless integration into your agile workflow.
          </p>

          <div className="space-y-6">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-teal-500 transition-colors">
                <Mail size={20} className="group-hover:text-teal-400 transition-colors" />
              </div>
              <span className="text-lg">{CONTACT.email}</span>
            </a>
            
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-teal-500 transition-colors">
                <Linkedin size={20} className="group-hover:text-teal-400 transition-colors" />
              </div>
              <span className="text-lg">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </motion.form>

      </div>
    </Section>
  );
};