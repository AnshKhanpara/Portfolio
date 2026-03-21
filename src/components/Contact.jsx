import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">Signal</h2>
            <h3 className="text-5xl font-display font-bold mb-8">Get in Touch</h3>
            <p className="text-muted text-lg mb-12 max-w-md leading-relaxed">
              Interested in RTL design, VLSI collaboration, or just want to chat about hardware architectures? Drop a line.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Email</p>
                  <p className="font-semibold">anshkhanpara20@gmail.com</p>
                </div>
              </div>
              
              <a href="https://www.linkedin.com/in/ansh-khanpara-97993b350/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-secondary/50 transition-colors shrink-0">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="font-semibold">Ansh Khanpara</p>
                </div>
              </a>

              <a href="https://github.com/AnshKhanpara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors shrink-0">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">GitHub</p>
                  <p className="font-semibold">AnshKhanpara</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-green-400/50 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Location</p>
                  <p className="font-semibold">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="p-10 rounded-3xl glass relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              action="https://formsubmit.co/anshkhanpara20@gmail.com" 
              method="POST"
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Name</label>
                  <input type="text" name="name" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Email</label>
                  <input type="email" name="email" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Subject</label>
                <input type="text" name="subject" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Collaboration Inquiry" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Message</label>
                <textarea name="message" rows="4" className="w-full bg-white/5 border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3 py-4 mt-6 cursor-pointer">
                Send Transmission
                <Send className="w-4 h-4" />
              </button>
            </form>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
