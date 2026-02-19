import { motion } from 'framer-motion';
import {Briefcase, Calendar} from 'lucide-react';
import {EXPERIENCES} from '../config/constant';
import SectionHeader from './SectionHeader';


const Experience = () => (
  <section id="experience" className="py-24 bg-slate-900/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Work History" />
      <div className="grid gap-6">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all shadow-xl max-w-4xl group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <p className="text-lg text-slate-400 font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl border border-slate-700/50 w-fit">
                <Calendar size={16} className="text-blue-500" />
                <span className="text-blue-400 font-mono text-sm font-bold">{exp.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;