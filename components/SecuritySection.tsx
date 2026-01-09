
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SecuritySection: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "Verifying node connection...",
        "Quantum encryption handshaking active.",
        "Validating block 0x8a92f... OK",
        "Threat detection: 0 incidents detected.",
        "Syncing with global ledger... 100%",
        "AES-256 layer 4 active.",
        "Biometric data encrypted locally.",
        "Zero-knowledge proof verification complete."
      ];
      setLogs(prev => [messages[Math.floor(Math.random() * messages.length)], ...prev].slice(0, 10));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-4 block">Segurança Inviolável</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            VERIFICAÇÃO EM TEMPO REAL.
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8">
            Utilizamos sistemas de segurança de rede descentralizada e biometria quântica para garantir que seus ativos permaneçam protegidos contra qualquer ameaça moderna.
          </p>
          <div className="p-6 bg-black border border-zinc-800 rounded-xl font-mono text-xs text-zinc-500 h-[250px] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-scan" />
            <div className="space-y-2">
              {logs.map((log, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={i} 
                  className="flex gap-2"
                >
                  <span className="text-purple-500 font-bold shrink-0">{`>`}</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
           {/* Abstract Circle HUD */}
           <div className="absolute inset-0 border border-zinc-900 rounded-full animate-spin-slow" />
           <div className="absolute inset-10 border border-zinc-800/50 rounded-full border-dashed animate-reverse-spin" />
           <div className="absolute inset-20 border-t-2 border-purple-500/40 rounded-full animate-spin-fast" />
           
           <div className="relative z-10 p-12 bg-zinc-900/30 rounded-full backdrop-blur-3xl border border-white/5 shadow-[0_0_100px_rgba(168,85,247,0.15)]">
             <svg className="w-24 h-24 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
             </svg>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-spin-fast {
          animation: spin 8s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default SecuritySection;
