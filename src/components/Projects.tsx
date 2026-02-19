import { motion } from 'framer-motion';
import {  ExternalLink} from 'lucide-react';
import {  PROJECTS } from '../config/constant';
import SectionHeader from './SectionHeader';

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Projects" subtitle="Featured full-stack applications showcasing my development process." />
      <div className="grid lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.title} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:shadow-3xl hover:shadow-blue-500/5 transition-all group flex flex-col h-full backdrop-blur-sm"
          >
            <div className="p-8 md:p-10 flex-grow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <motion.div whileHover={{ scale: 1.2, rotate: 15 }} className="bg-slate-800 p-2 rounded-full">
                  <a href={project.link}  target="_blank"
              rel="noopener noreferrer" aria-label="View project">
                  <ExternalLink size={20} className="text-blue-400 cursor-pointer " />
                  </a>
                </motion.div>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                {project.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {project.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-400">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="px-8 py-8 bg-slate-900/60 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-slate-800 text-blue-400 border border-slate-700/50 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;