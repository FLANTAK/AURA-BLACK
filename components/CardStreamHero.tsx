
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, useAnimationFrame } from 'framer-motion';

// Mock Component for the Aura Black Card
const AuraCard: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
  return (
    <div 
      className="relative w-[340px] h-[215px] rounded-xl overflow-hidden shadow-2xl shrink-0 group"
      style={{
        background: 'linear-gradient(135deg, #151515 0%, #000000 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        ...style
      }}
    >
      {/* Texture noise overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Holographic shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-zinc-500 text-[10px] tracking-[0.2em] font-bold uppercase">Aura Black Edition</h3>
            <div className="w-10 h-8 bg-zinc-400/20 rounded-md border border-zinc-500/30 overflow-hidden relative">
               {/* Chip lines */}
               <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-500/40" />
               <div className="absolute top-0 left-1/2 w-px h-full bg-zinc-500/40" />
            </div>
          </div>
          <span className="text-zinc-400 italic font-black text-xl tracking-tighter">AURA</span>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-zinc-300 text-lg tracking-[0.15em]">
            4000 1234 5678 9010
          </div>
          <div className="flex justify-between items-end">
            <div className="space-y-0.5">
              <span className="text-[8px] text-zinc-500 block uppercase tracking-widest">Card Holder</span>
              <span className="text-xs text-zinc-300 uppercase font-bold tracking-wider">Membro Fundador</span>
            </div>
            <div className="flex -space-x-3 opacity-60">
              <div className="w-8 h-8 rounded-full border border-white/20 backdrop-blur-md" />
              <div className="w-8 h-8 rounded-full border border-white/20 backdrop-blur-md" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scanner ASCII Glitch effect (CSS Only simulation) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300">
        <div className="text-[6px] font-mono text-purple-400 overflow-hidden break-all h-full">
          {Array(100).fill("01011100110001010101").join("")}
        </div>
      </div>
    </div>
  );
};

const CardStreamHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const velocity = 0.5; // Constant drift

  // Three.js Background Particle System
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Starfield Geometry
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x8b5cf6, // Holographic Purple
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Card Stream Logic
  useAnimationFrame((time, delta) => {
    setScrollX(prev => (prev + velocity * (delta / 16)) % (340 + 32));
  });

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
            O PODER ILIMITADO EM METAL.
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light mb-10 leading-relaxed">
            A primeira conta global para a elite digital. Transações anônimas, segurança militar e liquidez instantânea em qualquer lugar do mundo.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              Solicitar Convite
            </motion.button>
            <button className="px-10 py-4 border border-zinc-800 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
              Explorar Ecossistema
            </button>
          </div>
        </motion.div>
      </div>

      {/* Card Stream Component */}
      <div className="relative w-full overflow-hidden h-[300px] mt-12 flex items-center">
        {/* The Stream Container */}
        <div 
          ref={streamRef}
          className="flex space-x-8 whitespace-nowrap will-change-transform"
          style={{ transform: `translateX(-${scrollX}px)` }}
        >
          {Array(20).fill(0).map((_, i) => (
            <AuraCard key={i} />
          ))}
        </div>

        {/* Central Scanner Beam */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none z-20">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_30px_rgba(168,85,247,0.8)] opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl" />
        </div>
      </div>

      {/* Scanner Data Overlay */}
      <div className="absolute bottom-8 left-8 z-20 font-mono text-[10px] text-zinc-500 space-y-1 hidden md:block">
        <div className="flex gap-2"><span className="text-purple-500">[SCAN_INIT]</span> STATUS: OPERATIONAL</div>
        <div className="flex gap-2"><span className="text-purple-500">[ENCRYPT]</span> PROTOCOL: AES-256-GCM</div>
        <div className="flex gap-2"><span className="text-purple-500">[AUTH]</span> TOKEN: 0x8b5...f6e5</div>
      </div>
    </div>
  );
};

export default CardStreamHero;
