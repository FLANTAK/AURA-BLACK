
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 py-20 bg-black overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-sm rotate-45" />
              <span className="text-xl font-black tracking-tighter uppercase">AURA <span className="text-zinc-500">BLACK</span></span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-light">
              Elevando o padrão das finanças globais para a nova era digital.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 uppercase font-bold tracking-widest text-[10px] text-zinc-400">
            <div className="space-y-4">
              <h4 className="text-white text-xs">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Imprensa</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Central</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos</a></li>
              </ul>
            </div>
            <div className="space-y-4 hidden md:block">
              <h4 className="text-white text-xs">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">X / Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>AURA FINANCIAL SYSTEMS © 2025. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <span>SÃO PAULO</span>
            <span>LONDON</span>
            <span>SINGAPORE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
