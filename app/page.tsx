import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Services from '../components/Services';
import Projects from '../components/Projects';
import CaseStudy from '../components/CaseStudy';
import About from '../components/About';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Projects />
        <CaseStudy />
        <About />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
