import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ThreeDTerminal = () => {
  const [typingText, setTypingText] = useState('');
  const [outputLines, setOutputLines] = useState([]);
  const [isFlipping, setIsFlipping] = useState(true);
  const [isInteractive, setIsInteractive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  
  const bootCommand = "git init --ansh-portfolio";
  const bootOutputs = [
    { text: "Initialized empty Git repository in /home/ansh/portfolio/", delay: 500 },
    { text: "Loading ECE core modules...", delay: 300 },
    { text: "RTL Design: Ready", delay: 200 },
    { text: "VLSI Synthesis: Ready", delay: 200 },
    { text: "RISC-V Pipelined Processor: Online", delay: 400 },
    { text: "AMBA APB Interface: Connected", delay: 300 },
    { text: "Ansh Khanpara Portfolio v1.0.0", delay: 200, class: 'text-cyan-400 font-bold' },
    { text: "Type 'help' to see available commands.", delay: 500, class: 'text-primary animate-pulse' }
  ];

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      setIsFlipping(false);
      startTypingIntro(0);
    }, 1500);
    return () => clearTimeout(flipTimer);
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [outputLines, typingText, inputValue]);

  const startTypingIntro = (index) => {
    if (index <= bootCommand.length) {
      setTypingText(bootCommand.substring(0, index));
      setTimeout(() => startTypingIntro(index + 1), 60);
    } else {
      setTimeout(() => showBootOutputs(0), 500);
    }
  };

  const showBootOutputs = (index) => {
    if (index < bootOutputs.length) {
      setOutputLines(prev => [...prev, bootOutputs[index]]);
      setTimeout(() => showBootOutputs(index + 1), bootOutputs[index].delay);
    } else {
      setIsInteractive(true);
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const fullCmd = inputValue.trim().toLowerCase();
      const newLines = [...outputLines, { text: `ansh@portfolio:~$ ${inputValue}`, class: 'text-white font-bold' }];
      
      let response = null;
      
      switch(fullCmd) {
        case 'help':
          response = [
            { text: "Available commands:", class: 'text-secondary' },
            { text: "  about    - Navigation: Learn about my background." },
            { text: "  skills   - Navigation: View technical matrix." },
            { text: "  projects - Navigation: Explore hardware designs." },
            { text: "  contact  - Navigation: Get in touch." },
            { text: "  ls       - List available 'files'." },
            { text: "  clear    - Clear terminal history." },
            { text: "  whoami   - Display current user identity." }
          ];
          break;
        case 'about':
        case 'about me':
          scrollToSection('about');
          response = [{ text: "Navigating to About section...", class: 'text-primary' }];
          break;
        case 'projects':
          scrollToSection('projects');
          response = [{ text: "Navigating to Projects section...", class: 'text-primary' }];
          break;
        case 'skills':
          scrollToSection('skills');
          response = [{ text: "Navigating to Skills section...", class: 'text-primary' }];
          break;
        case 'contact':
          scrollToSection('contact');
          response = [{ text: "Navigating to Contact section...", class: 'text-primary' }];
          break;
        case 'ls':
          response = [{ text: "resume.pdf  verilog_master_prompt.md  architect_v1.bin", class: 'text-cyan-400' }];
          break;
        case 'clear':
          setOutputLines([]);
          setInputValue('');
          return;
        case 'whoami':
          response = [{ text: "Ansh Khanpara: RTL Designer | VLSI Specialist | Silicon Enthusiast", class: 'text-white' }];
          break;
        case '':
          break;
        default:
          response = [{ text: `Command not found: ${fullCmd}. Type 'help' for options.`, class: 'text-red-400' }];
      }

      if (response) {
        setOutputLines([...newLines, ...response]);
      } else {
        setOutputLines(newLines);
      }
      
      setInputValue('');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
        y: isFlipping ? 0 : [0, -10, 0]
      }}
      transition={{ 
        rotateY: { duration: 1.5, ease: "easeInOut" },
        rotateX: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.8 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      style={{ transformStyle: 'preserve-3d' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col cursor-text">
        {/* Terminal Header */}
        <div className="bg-black/40 px-4 py-2 flex items-center gap-2 border-b border-white/10 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-[10px] text-muted font-display tracking-wider ml-2 opacity-60 uppercase">bash — ansh</span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalBodyRef}
          className="p-3 md:p-4 font-mono text-[10px] md:text-sm overflow-y-auto flex-1 custom-scrollbar scroll-smooth"
        >
          {/* Boot Sequence */}
          {!isInteractive && (
            <div className="flex gap-2 mb-2">
              <span className="text-purple-400">ansh@portfolio:~$</span>
              <span className="text-cyan-400">{typingText}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-1.5 h-3 md:w-2 md:h-4 bg-cyan-400"
              ></motion.span>
            </div>
          )}

          <div className="space-y-1">
            {outputLines.map((line, idx) => (
              <div key={idx} className={`text-[9px] md:text-xs leading-relaxed ${line.class || 'text-muted'}`}>
                {line.text}
              </div>
            ))}
          </div>

          {/* Interactive Input */}
          {isInteractive && (
            <div className="flex gap-2 mt-2">
              <span className="text-purple-400 shrink-0">ansh@portfolio:~$</span>
              <div className="flex-1 flex items-center relative">
                <span className="text-cyan-400 break-all">{inputValue}</span>
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-1.5 h-3 md:w-2 md:h-4 bg-cyan-400 inline-block ml-1"
                ></motion.span>
                <input 
                  ref={inputRef}
                  autoFocus
                  className="absolute inset-0 opacity-0 cursor-text pointer-events-none"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleCommand}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
    </motion.div>
  );
};

export default ThreeDTerminal;
