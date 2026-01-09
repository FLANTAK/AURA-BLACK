
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const FloatingCardSection: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
          FORJADO EM TITÂNIO. PESADO NO BOLSO, LEVE NO MUNDO.
        </h2>
        <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl">
          Nossa obra-prima física. Mais do que um cartão, um objeto de design minimalista construído com uma liga de titânio de grau aeroespacial e acabamento em preto fosco profundo.
        </p>
        <ul className="space-y-4 font-mono text-sm text-zinc-300">
          <li className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span>Peso: 22g de titânio puro</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span>Acabamento: Vapor Deposition (PVD) fosco</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span>Segurança: Sem números visíveis no cartão</span>
          </li>
        </ul>
      </div>

      <div 
        className="order-1 lg:order-2 flex justify-center perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[340px] h-[540px] md:w-[450px] md:h-[285px] group"
        >
          {/* Card Physical Mesh Simulation */}
          <div 
            className="absolute inset-0 rounded-[2rem] bg-zinc-900 border-[6px] border-zinc-800 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
            style={{
                transform: "translateZ(50px)",
                background: "linear-gradient(135deg, #111 0%, #000 100%)"
            }}
          >
             {/* Textures and Logos */}
             <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
             
             <div className="p-10 h-full flex flex-col justify-between">
                <div className="flex justify-between">
                    <span className="text-zinc-600 font-black tracking-widest text-3xl italic">AURA</span>
                    <div className="w-14 h-10 bg-zinc-400/10 rounded-lg border border-zinc-500/20" />
                </div>
                
                <div className="space-y-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">Membro Fundador</p>
                            <p className="text-xl text-zinc-300 font-mono tracking-wider">AURA BLACK</p>
                        </div>
                        <div className="w-16 h-10 bg-zinc-500/20 rounded-full blur-xl" />
                    </div>
                </div>
             </div>
          </div>
          
          {/* Glowing Shadow */}
          <div className="absolute -inset-10 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingCardSection;
