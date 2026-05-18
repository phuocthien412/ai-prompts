import React from 'react';
import { Camera, Send, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 flex justify-center gap-4 pb-12">
      <button 
        aria-label="Instagram"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all active:scale-95"
      >
        <Camera size={20} />
      </button>
      <button 
        aria-label="Twitter"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all active:scale-95"
      >
        <Send size={20} />
      </button>
      <button 
        aria-label="Website"
        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all active:scale-95"
      >
        <Globe size={20} />
      </button>
    </footer>
  );
};

export default Footer;
