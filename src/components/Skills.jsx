import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Languages",
    items: ["Verilog", "SystemVerilog", "Embedded C", "Python 3", "MATLAB", "Assembly (8051, MIPS)"]
  },
  {
    category: "Tools & EDA",
    items: ["Vivado Design Suite", "Quartus II", "ModelSim Altera", "Cadence Virtuoso", "MICROWIND"]
  },
  {
    category: "Protocols",
    items: ["AMBA APB", "AMBA AXI", "UART", "I2C", "SPI"]
  },
  {
    category: "Coursework",
    items: ["Digital Electronics", "Computer Architecture", "Microcontrollers", "VLSI Design", "FPGA Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-16 text-center">Technical Matrix</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/20 transition-all group"
            >
              <h3 className="text-secondary font-display font-bold text-lg mb-6 group-hover:translate-x-1 transition-transform">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((skill, i) => (
                  <li key={i} className="text-sm text-muted flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
