import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import BeforeAfter from '../components/sections/BeforeAfter';
import Studio from '../components/sections/Studio';
import Financing from '../components/sections/Financing';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <BeforeAfter />
      <Studio />
      <Financing />
      <About />
      <section id="service-areas" className="areas">
        <p className="eyebrow">Service Areas</p>
        <h2>Serving the Greater Phoenix Area</h2>
        <p>Phoenix • Scottsdale • Paradise Valley • Gilbert • Chandler • Mesa • Tempe • Peoria • Glendale • Surprise • Goodyear • Queen Creek</p>
      </section>
      <Contact />
      <footer>
        <a href="/" aria-label="Sonoran Stone & Turf home"><img src="/logo.png" alt="Sonoran Stone & Turf logo" /></a>
        <div className="footerLinks"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#studio">AI Design Studio</a><a href="#contact">Get a Quote</a></div>
        <p>Luxury outdoor living across the Greater Phoenix area.</p>
      </footer>
    </main>
  );
}
