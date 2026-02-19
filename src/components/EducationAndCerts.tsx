import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Terminal,
  ChevronRight,
} from 'lucide-react';
import {EDUCATION, CERTIFICATIONS } from '../config/constant';
import { staggerContainer,fadeInUp } from '../config/animations';
import TimelineSection from './TimelineSection';
const EducationAndCerts = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        <TimelineSection title="Education" icon={<GraduationCap className="text-blue-500" size={24} />} items={EDUCATION} />
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-3 mb-8">
            <Award className="text-blue-500" size={24} /> Certifications
          </h3>
          <div className="space-y-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl group hover:border-indigo-500/30 transition-all shadow-sm"
              >
                <h4 className="text-xl font-heading font-bold mb-5 flex items-center gap-3 group-hover:text-indigo-400 transition-colors text-white">
                  <div className="p-2 bg-indigo-500/10 rounded-lg"><Terminal size={18} className="text-indigo-400" /></div> {cert.title}
                </h4>
                <ul className="space-y-4">
                  {cert.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-slate-400 text-sm flex items-start gap-3">
                      <ChevronRight size={14} className="text-indigo-500 mt-1 flex-shrink-0" />
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);



export default EducationAndCerts;