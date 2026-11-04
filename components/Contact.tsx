import React, { useState } from 'react';
import { Section } from './Section';
import { CONTACT } from '../constants';
import { Mail, Linkedin, Send, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // No backend: opens the visitor's email app with the message ready to send.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all';

  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="Hiring for sales enablement, GTM enablement or senior instructional design? I'd love to hear about the role."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Info Column */}
        <div className="space-y-8">
          <p className="text-lg text-slate-300 leading-relaxed">
            Based in Querétaro, Mexico, on <span className="text-teal-400 font-medium">US Central Time</span>,
            with years of experience working remotely with teams across the US and Europe.
          </p>

          <div className="space-y-6">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-teal-500 transition-colors">
                <Mail size={20} className="group-hover:text-teal-400 transition-colors" aria-hidden="true" />
              </div>
              <span className="text-lg">{CONTACT.email}</span>
            </a>

            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-teal-500 transition-colors">
                <Linkedin size={20} className="group-hover:text-teal-400 transition-colors" aria-hidden="true" />
              </div>
              <span className="text-lg">LinkedIn profile</span>
            </a>

            <a href={CONTACT.cv} download className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 group-hover:border-teal-500 transition-colors">
                <Download size={20} className="group-hover:text-teal-400 transition-colors" aria-hidden="true" />
              </div>
              <span className="text-lg">Download CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about the role or project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Send Message <Send size={18} aria-hidden="true" />
            </button>
            <p className="text-xs text-slate-400 text-center">Opens your email app with the message ready to send.</p>
          </div>
        </motion.form>

      </div>
    </Section>
  );
};
