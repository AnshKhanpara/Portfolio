import React from 'react';
import { motion } from 'framer-motion';
import ThreeDTerminal from './ThreeDTerminal';
import { ChevronRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
            RTL Design & VLSI Specialist
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-display leading-[1.1] mb-6">
            Ansh <br />
            <span className="gradient-text">Khanpara</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-lg mb-10 leading-relaxed">
            I design and synthesize complex digital architectures, from high-performance RISC-V processors to robust bus protocols.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group py-4 px-8">
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" download className="btn-secondary flex items-center justify-center gap-2 py-4 px-8">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
          
          <div className="mt-12 flex flex-row gap-6 md:gap-8 items-center border-t border-white/5 pt-8 overflow-x-auto no-scrollbar">
            <div className="flex flex-col shrink-0">
              <span className="text-[10px] text-muted uppercase tracking-widest mb-1">Education</span>
              <span className="text-sm font-semibold">Nirma University</span>
            </div>
            <div className="h-8 w-px bg-white/10 shrink-0"></div>
            <div className="flex flex-col shrink-0">
              <span className="text-[10px] text-muted uppercase tracking-widest mb-1">Expertise</span>
              <span className="text-sm font-semibold text-nowrap">Verilog | Cadence</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <ThreeDTerminal />
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default Hero;
