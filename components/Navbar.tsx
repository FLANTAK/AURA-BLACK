
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-black/50 border-b border-white/5">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-zinc-300 to-zinc-600 rounded-sm rotate-45 border border-white/20" />
        <span className="text-xl font-black tracking-tighter uppercase">Aura <span className="text-zinc-500">Black</span></span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
        <a href="#features" className="hover:text-purple-400 transition-colors">Serviços</a>
        <a href="#the-card" className="hover:text-purple-400 transition-colors">O Cartão</a>
        <a href="#security" className="hover:text-purple-400 transition-colors">Segurança</a>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-full hover:bg-zinc-200 transition-colors"
      >
        Entrar
      </motion.button>
    </nav>
  );
};

export default Navbar;
