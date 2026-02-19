import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
} from 'lucide-react';
import { DATA } from '../config/constant';
// import type { Education } from '../config/types';

 const Footer = () => (
  <footer id="contact" className="bg-slate-950 pt-32 pb-12 border-t border-slate-900 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tighter">Let's connect<span className="text-blue-500">.</span></h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg font-medium leading-relaxed">
          I'm always looking for new challenges and meaningful collaborations. Reach out to start a conversation about your next project.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${DATA.email}`} 
          className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 text-white font-heading font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-2xl"
        >
          <Mail size={22} />
          Send me an Email
        </motion.a>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-slate-900 mt-20">
        <div className="flex space-x-8">
          <motion.a whileHover={{ y: -5, color: '#fff' }} href={`https://linkedin.com/${DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-all">
            <Linkedin size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: '#fff' }} href={`https://github.com/${DATA.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-all">
            <Github size={24} />
          </motion.a>
        </div>
        
        <div className="text-slate-500 text-xs font-mono flex flex-col md:items-end gap-1 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} {DATA.name}</span>
          <span className="opacity-40">MERN Stack Developer • Mohali</span>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
  </footer>
);

export default Footer;
