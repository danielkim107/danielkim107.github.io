import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ParticleBackground from '@/components/common/ParticleBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
