import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-surface/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">Core Intent</h2>
              <h3 className="text-4xl font-display font-bold leading-tight">
                Architecting the <span className="text-secondary">Silicon</span> layer.
              </h3>
            </motion.div>
          </div>
          
          <div className="col-span-2 space-y-8 text-lg text-muted leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I am an Electronics and Communication Engineering undergraduate with a deep-seated passion for <span className="text-primary font-bold">RTL design</span> and <span className="text-secondary font-bold">backend VLSI concepts</span>. My work revolves around transforming complex architectural specifications into efficient, synthesizable hardware.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Proficient in Verilog HDL and Cadence Virtuoso, I bridge the gap between high-level logic and physical silicon. My experience spans from designing pipelined RISC-V processors to implementing high-speed bus protocols like AMBA APB and AXI, always with a focus on timing-aware architectures and data integrity.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                <h4 className="text-white font-bold mb-2">Digital Logic</h4>
                <p className="text-sm">Specializing in synthesizable RTL for FPGA and ASIC flows using Vivado and Quartus.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors">
                <h4 className="text-white font-bold mb-2">Physical Design</h4>
                <p className="text-sm">Experienced in layout design using Cadence Virtuoso, ensuring LVS/DRC compliance.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
