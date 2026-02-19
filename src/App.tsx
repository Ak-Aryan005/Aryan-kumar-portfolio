import Footer from './components/Footer'
import About from './components/About';
import Experience from './components/Experience';
import EducationAndCerts from './components/EducationAndCerts';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationAndCerts />
      </main>
      <Footer />
    </div>
  );
}
