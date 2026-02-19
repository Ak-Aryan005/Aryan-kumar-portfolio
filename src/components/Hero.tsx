import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  FileText,
} from 'lucide-react';
import { DATA} from '../config/constant';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6"
          >
            <Terminal size={14} />
            <span>Full-Stack Engineer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl lg:text-8xl font-black tracking-tight text-white mb-6 uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {DATA.name}
            <span className="text-blue-500">.</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-heading font-bold text-slate-400 mb-8 leading-tight"
          >
            Building high-performance, user-centric web applications.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl"
          >
            Based in {DATA.location}, I specialize in building scalable digital products from concept to deployment using modern web technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25 active:scale-95">
              View Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1puAH5ecJKA3PPdriXq-NOd_1yqTxnaMM/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-heading font-semibold rounded-lg transition-all border border-slate-700 active:scale-95 flex items-center gap-2"
            >
              <FileText size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="md:mt-12 mt-5 mb-5 flex space-x-6"
          >
            <a href={`https://linkedin.com/${DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={`https://github.com/${DATA.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110">
              <Github size={24} />
            </a>
            <a href={`mailto:${DATA.email}`} className="text-slate-500 hover:text-white transition-colors hover:scale-110">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default Hero;