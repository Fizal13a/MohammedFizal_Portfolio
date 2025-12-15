import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-zinc-800 mt-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Ready to build the next <br/>
          <span className="text-indigo-500">big thing?</span>
        </h2>
        
        <a 
          href={`mailto:${PROFILE.email}`}
          className="inline-block px-8 py-4 bg-white text-zinc-950 font-bold text-lg rounded-full hover:scale-105 hover:bg-indigo-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Let's Connect
        </a>

        <div className="mt-20 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;