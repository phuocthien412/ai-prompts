import React from 'react';
import { Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-20 px-6 py-6">
      <div className="max-w-5xl mx-auto rounded-full px-6 py-3 flex items-center justify-between liquid-glass">
        {/* Left: Logo & Nav Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <Globe size={24} className="text-white" />
            <span className="font-semibold text-lg tracking-tight">Asme</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-white text-sm font-medium px-2 hover:text-white/80 transition-colors">
            Sign Up
          </button>
          <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
