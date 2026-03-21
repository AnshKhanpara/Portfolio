import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ThreeDTerminal = () => {
  const [typingText, setTypingText] = useState('');
  const [outputLines, setOutputLines] = useState([]);
  const [isFlipping, setIsFlipping] = useState(true);
  
  const command = "git init --ansh-portfolio";
  const outputs = [
    { text: "Initialized empty Git repository in /home/ansh/portfolio/", delay: 500 },
    { text: "Loading ECE core modules...", delay: 300 },
    { text: "RTL Design: Ready", delay: 200 },
    { text: "VLSI Synthesis: Ready", delay: 200 },
    { text: "RISC-V Pipelined Processor: Online", delay: 400 },
    { text: "AMBA APB Interface: Connected", delay: 300 },
    { text: "Deployment starting...", delay: 600 },
    { text: "Ansh Khanpara Portfolio v1.0.0", delay: 200, class: 'text-cyan-400 font-bold' }
  ];

  useEffect(() => {
    // Initial 360 flip animation sequence
    const flipTimer = setTimeout(() => {
      setIsFlipping(false);
      startTyping(0);
    }, 1500);

    return () => clearTimeout(flipTimer);
  }, []);

  const startTyping = (index) => {
    if (index <= command.length) {
      setTypingText(command.substring(0, index));
      setTimeout(() => startTyping(index + 1), 60);
    } else {
      setTimeout(() => showOutputs(0), 500);
    }
  };

  const showOutputs = (index) => {
    if (index < outputs.length) {
      setOutputLines(prev => [...prev, outputs[index]]);
      setTimeout(() => showOutputs(index + 1), outputs[index].delay);
    }
  };

  return (
    <motion.div 
      className="relative w-full max-w-lg aspect-video perspective-1000"
      initial={{ rotateY: -100, opacity: 0 }}
      animate={{ 
        rotateY: isFlipping ? 260 : -15, 
        rotateX: isFlipping ? 0 : 10,
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        rotateY: { duration: 1.5, ease: "easeInOut" },
        rotateX: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.8 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div className="bg-black/40 px-4 py-2 flex items-center gap-2 border-bottom border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-muted font-display tracking-wider ml-2 opacity-60">bash — ansh</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm overflow-y-auto flex-1 custom-scrollbar">
          <div className="flex gap-2 mb-2">
            <span className="text-purple-400">ansh@portfolio:~$</span>
            <span className="text-cyan-400">{typingText}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-4 bg-cyan-400"
            ></motion.span>
          </div>
          
          <div className="space-y-1">
            {outputLines.map((line, idx) => (
              <div key={idx} className={`text-xs ${line.class || 'text-muted'}`}>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Glow behind terminal */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
    </motion.div>
  );
};

export default ThreeDTerminal;
