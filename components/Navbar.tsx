import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, CONTACT } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-teal-400 focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to work
      </a>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tighter text-white">
          Alejandra Castillo<span className="text-teal-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.cv}
            download
            className="px-5 py-2 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all rounded-full"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-slate-300 hover:text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT.cv}
            download
            className="text-center px-5 py-3 font-semibold text-slate-950 bg-teal-400 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};
