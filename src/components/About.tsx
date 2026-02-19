import { motion } from 'framer-motion';
import {  
  Mail, 
  MapPin, 
  Phone
} from 'lucide-react';
import { DATA, } from '../config/constant';
import { staggerContainer,fadeInUp } from '../config/animations';
import SectionHeader from './SectionHeader';
const About = () => (
  <section id="about" className="py-24 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="About Me" />
      <div className="grid md:grid-cols-3 gap-12">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            {DATA.summary}
          </p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div variants={fadeInUp} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-900 transition-colors shadow-sm">
            <h3 className="text-white font-heading font-semibold mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-blue-500" /> Location
            </h3>
            <p className="text-slate-400 font-medium">{DATA.location}</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-900 transition-colors shadow-sm">
            <h3 className="text-white font-heading font-semibold mb-4 flex items-center gap-2">
              <Mail size={18} className="text-blue-500" /> Contact
            </h3>
            <p className="text-slate-400 text-sm break-all font-mono mb-3">{DATA.email}</p>
            <div className="flex flex-col gap-1 border-t border-slate-800/50 pt-3">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-mono mb-1">Available via mobile</p>
              {DATA.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm font-mono tracking-tight">
                  <Phone size={12} className="text-blue-500/60" />
                  {phone}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);


export default About;