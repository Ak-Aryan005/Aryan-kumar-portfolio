import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { staggerContainer,fadeInUp } from '../config/animations';
import type { Education } from '../config/types';

 const TimelineSection = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: Education[] }) => (
  <motion.div 
    variants={staggerContainer}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
    className="space-y-8"
  >
    <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-3 mb-8">
      {icon} {title}
    </h3>
    <div className="space-y-6">
      {items.map((item, idx) => (
        <motion.div 
          key={idx} 
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all shadow-md group"
        >
          <div className="flex justify-between items-start mb-4 gap-4">
            <h4 className="text-white font-heading font-bold leading-snug group-hover:text-blue-400 transition-colors">{item.degree}</h4>
            <span className="text-[10px] text-blue-400 font-mono font-bold whitespace-nowrap px-2.5 py-1 bg-blue-500/5 rounded-lg border border-blue-500/20">{item.period}</span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-3">{item.institution}</p>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono">
            <MapPin size={12} className="text-blue-500" /> {item.location}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default TimelineSection