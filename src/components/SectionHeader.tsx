
import { motion } from 'framer-motion';
import {fadeInUp } from '../config/animations';


const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <motion.div 
    variants={fadeInUp}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
    className="mb-12"
  >
    <h2 className="text-4xl font-heading font-bold text-white mb-4 flex items-center gap-3">
      <motion.span 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
        className="h-10 w-1.5 bg-blue-500 rounded-full"
      ></motion.span>
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 max-w-2xl font-medium">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;