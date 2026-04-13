import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Cpu, Database, Network, Box, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "32-Bit Pipelined RISC-V Processor",
    category: "Processor Design",
    tech: ["Verilog", "RISC-V", "RTL"],
    icon: <Cpu className="w-5 h-5 text-primary" />,
    github: "https://github.com/AnshKhanpara/RISC-V-PIPELINE",
    details: [
      "Designed a synthesizable 32-bit RISC-V processor implementing a 5-stage pipeline (IF, ID, EX, MEM, WB).",
      "Implemented a dedicated hazard control unit to handle data hazards using forwarding and stalling.",
      "Integrated pipeline registers and control logic to maintain instruction execution integrity.",
      "Verified RTL design through extensive simulation."
    ]
  },
  {
    title: "AMBA APB Master-Slave Interface",
    category: "Bus Protocols",
    tech: ["Verilog", "AMBA APB4", "FSM"],
    icon: <Network className="w-5 h-5 text-secondary" />,
    github: "https://github.com/AnshKhanpara/AMBA-APB",
    details: [
      "Designed a 32-bit AMBA APB Master-Slave interface with protocol-accurate FSM control.",
      "Implemented APB4 features including PPROT, PSTRB, and PSLVERR.",
      "Integrated parity generation and checking mechanisms for data integrity.",
      "Developed address range validation and robust error reporting logic."
    ]
  },
  {
    title: "AXI4-Lite Design & Verification",
    category: "Verification",
    tech: ["SystemVerilog", "AXI4-Lite", "Handshaking"],
    icon: <Box className="w-5 h-5 text-purple-400" />,
    github: "https://github.com/AnshKhanpara/AMBA-AXI4-LITE",
    details: [
      "Designed AXI4-Lite compliant Master and Slave modules with independent read/write channel handling.",
      "Implemented VALID/READY handshaking protocols for reliable transfer.",
      "Developed a SystemVerilog verification environment utilizing Interfaces, Drivers, Monitors, and Scoreboards."
    ]
  },
  {
    title: "RTL FIFO Design",
    category: "RTL Design",
    tech: ["Verilog", "CDC-Safe", "Memory"],
    icon: <Database className="w-5 h-5 text-orange-400" />,
    github: "https://github.com/AnshKhanpara/RTL-FIFO",
    details: [
      "Implemented parameterized synchronous and asynchronous FIFO modules in Verilog HDL.",
      "Designed CDC-safe (Clock Domain Crossing) asynchronous logic using Grey-code pointers.",
      "Managed full/empty status flag generation with high reliability for SoC data buffering."
    ]
  },
  {
    title: "RTL ALU Implementation",
    category: "Digital Logic",
    tech: ["Verilog", "Arithmetic", "FPGA"],
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    github: "https://github.com/AnshKhanpara/RTL-ALU",
    details: [
      "Designed a 16-bit combinational ALU in Verilog supporting arithmetic (Add, Sub) and logical (And, Or, Xor, Not) operations.",
      "Integrated status flags (Zero, Overflow, Negative, Carry) for control unit feedback.",
      "Optimized logic for low-latency execution on FPGA targets."
    ]
  },
  {
    title: "4x4 SRAM Cell Array",
    category: "VLSI Layout",
    tech: ["Cadence Virtuoso", "6T Bitcell", "LVS/DRC"],
    icon: <Database className="w-5 h-5 text-green-400" />,
    github: null,
    details: [
      "Designed and implemented a 4x4 SRAM array using 6T bitcells with symmetry-aware placement.",
      "Developed peripheral circuitry: Write Circuit, Sense Amplifier, Precharge, and Decoders.",
      "Validated via DRC and LVS; performed post-layout simulations in Cadence Virtuoso."
    ]
  }
];

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-muted hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              {project.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-1">{project.category}</p>
              <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] px-2 py-1 rounded bg-white/5 text-muted border border-white/10 uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>

            <div className="h-px bg-white/5 w-full"></div>

            <ul className="space-y-4">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-muted leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5"></span>
                  <span className="text-base">{detail}</span>
                </li>
              ))}
            </ul>

            {project.github && (
              <div className="pt-6">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-bold text-white transition-all group"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            )}
          </div>

          {/* Decorative background element */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-primary/20 transition-colors"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-background border border-white/5">
          {project.icon}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted hover:text-white transition-colors p-2 -m-2 rounded-full hover:bg-white/5"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-sm text-primary/80 mb-4 font-display uppercase tracking-widest">{project.category}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] px-2 py-1 rounded bg-white/5 text-muted border border-white/10 uppercase tracking-wider">
            {t}
          </span>
        ))}
      </div>

      <button 
        onClick={() => setIsModalOpen(true)}
        className="text-sm text-cyan-400 font-bold flex items-center gap-1 group/btn"
      >
        Detailed View
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={project} 
      />
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">Circuitry</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Selected Projects</h3>
          </div>
          <p className="text-muted text-sm max-w-xs text-center md:text-right hidden sm:block">
            Hardware implementations focusing on performance, scalability, and technical integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
