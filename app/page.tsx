import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import CaseStudy from '../components/CaseStudy';
import About from '../components/About';
import WhyRamkumar from '../components/WhyRamkumar';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CaseStudy />
        <About />
        <WhyRamkumar />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
