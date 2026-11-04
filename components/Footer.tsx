import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Alejandra Castillo · Instructional Designer &amp; Learning Experience Designer
      </p>
    </footer>
  );
};
