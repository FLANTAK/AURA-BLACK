
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode; className?: string }> = ({ title, description, icon, className }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md flex flex-col justify-between group transition-all hover:border-purple-500/30 ${className}`}
  >
    <div className="text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-4 block">Tecnologia de Vanguarda</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">O QUE DEFINE O EXTRAORDINÁRIO.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Múltiplas Moedas"
          description="Converta Fiat e Cripto instantaneamente com as taxas de mercado mais competitivas do mundo. Sua conta não tem fronteiras."
          icon={
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <FeatureCard 
          title="Criptografia Quântica"
          description="Segurança de nível militar (EAL6+) protegendo cada transação. Sua privacidade é nosso pilar fundamental e inegociável."
          icon={
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />
        <FeatureCard 
          title="Concierge 24/7"
          description="Atendimento humano dedicado disponível a qualquer hora, em qualquer lugar. Prioridade absoluta para as suas necessidades."
          icon={
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Features;
