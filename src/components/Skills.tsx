import { motion } from 'framer-motion';
import { Database,  Layout,  Cpu} from 'lucide-react';
import {  SKILLS  } from '../config/constant';
import SectionHeader from './SectionHeader';
import { staggerContainer,fadeInUp } from '../config/animations';
import { IoLayers } from "react-icons/io5";



const Skills = () => {
  const categories = [
    { id: 'frontend', name: 'Frontend Tech', icon: <Layout size={22} /> },
    { id: 'backend', name: 'Backend Systems', icon: <Database size={22} /> },
    { id: 'tool', name: 'Tools', icon: <Cpu size={22} /> },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Expertise" subtitle="A breakdown of my core technical proficiencies." />
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.id} 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] hover:border-blue-500/50 transition-all group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {cat.icon}
              </div>
              <h3 className="text-white font-mono font-bold mb-8 text-lg uppercase tracking-tight flex items-center gap-2 border-b border-slate-800 pb-2">
                <span className="text-blue-500 opacity-60 font-black"><IoLayers /></span> {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.filter(s => s.category === cat.id).map(skill => (
                  <motion.span 
                    key={skill.name} 
                    whileHover={{ scale: 1.08, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                    className="px-4 py-2 bg-slate-800/40 border border-slate-700/50 text-slate-300 rounded-xl text-xs font-mono font-medium hover:text-blue-400 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;