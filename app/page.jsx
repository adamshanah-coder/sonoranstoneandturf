import Image from 'next/image';
import { ShieldCheck, MapPin, Sparkles, Upload, Hammer, Star, Phone, Mail, ArrowRight } from 'lucide-react';

const services = [
  ['Artificial Turf', 'Premium, pet-friendly turf that stays green year-round.', '/images/turf.jpg'],
  ['Decorative Gravel', 'Clean, low-maintenance rock and gravel landscapes with a modern Arizona finish.', '/images/gravel.jpg'],
  ['Pavers & Hardscapes', 'Patios, walkways, borders, driveways, and transitions built with polish.', '/images/pavers.jpg'],
  ['Outdoor Living', 'Fire features, seating areas, lighting, and spaces designed to entertain.', '/images/outdoor.jpg'],
  ['Putting Greens', 'Custom backyard putting greens designed for beauty, fun, and function.', '/images/putting.jpg'],
];

export default function Home() {
  return <main>
    <header className="nav">
      <a className="brand" href="#top"><Image src="/logo.png" alt="Sonoran Turf & Gravel" width={78} height={78}/><span>Sonoran Turf & Gravel</span></a>
      <div className="links"><a href="#services">Services</a><a href="#vision">Sonoran Vision™</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a><a className="navCta" href="#contact">Free Estimate</a></div>
    </header>

    <section id="top" className="hero">
      <Image src="/images/hero.jpg" alt="Luxury Arizona backyard" fill priority className="heroImg"/>
      <div className="shade" />
      <div className="heroText">
        <p className="eyebrow">Licensed & Insured • Greater Phoenix Area</p>
        <h1>Transforming Arizona Outdoor Living</h1>
        <p>Premium turf, decorative gravel, pavers, putting greens, and complete landscape transformations designed for Arizona beauty and built to last.</p>
        <div className="actions"><a className="btn gold" href="#contact">Get a Free Estimate</a><a className="btn glass" href="#vision"><Sparkles size={18}/> Reimagine My Yard™</a></div>
        <div className="served"><MapPin size={18}/> Proudly serving the Greater Phoenix area</div>
      </div>
    </section>

    <section className="trust">
      <div><ShieldCheck/><b>Licensed & Insured</b><span>Professional, reliable, and protected.</span></div>
      <div><Sparkles/><b>Premium Materials</b><span>High-quality products built to last.</span></div>
      <div><Hammer/><b>Quality Craftsmanship</b><span>Clean lines and detailed installations.</span></div>
      <div><Star/><b>Arizona Design</b><span>Outdoor spaces built for desert living.</span></div>
    </section>

    <section id="services" className="section center">
      <p className="eyebrow">Complete Outdoor Solutions</p>
      <h2>Everything Your Yard Deserves</h2>
      <p className="intro">From design to installation, we create beautiful, functional outdoor spaces tailored to your lifestyle and built for Arizona living.</p>
      <div className="cards">{services.map(([title, body, img]) => <article className="card" key={title}><Image src={img} alt={title} width={700} height={440}/><div><h3>{title}</h3><p>{body}</p><a href="#contact">Learn more <ArrowRight size={15}/></a></div></article>)}</div>
    </section>

    <section id="vision" className="vision">
      <div>
        <p className="eyebrow">Experience the Possibilities</p>
        <h2>Sonoran Vision™</h2>
        <p>Upload a photo of your yard, choose a style, and we’ll prepare premium concept directions for your future outdoor space.</p>
        <div className="steps"><div><Upload/>Upload a photo</div><div><Sparkles/>Choose a style</div><div><Star/>Receive concepts</div><div><Phone/>Schedule consult</div></div>
        <a className="btn gold" href="#contact">Start Designing Now</a>
      </div>
      <div className="visionPanel">
        <div className="upload"><Upload/><b>Upload Yard Photo</b><small>Front-yard or backyard photos work best.</small><input type="file" accept="image/*"/></div>
        <div className="styles"><span>Modern Desert</span><span>Luxury Resort</span><span>Family Backyard</span><span>Putting Green</span></div>
      </div>
    </section>

    <section id="gallery" className="section center">
      <p className="eyebrow">Real Transformations</p>
      <h2>Before & After</h2>
      <p className="intro">Concept renderings shown for launch. Replace with real project photography as jobs are completed.</p>
      <div className="beforeAfter"><div><Image src="/images/before.jpg" alt="Before" width={900} height={560}/><span>Before</span></div><div><Image src="/images/after.jpg" alt="After" width={900} height={560}/><span>After</span></div></div>
    </section>

    <section className="why">
      <div><p className="eyebrow">Why Choose Us</p><h2>We Don’t Just Install. We Transform.</h2><p>Our focus is thoughtful design, quality materials, and professional installation that adds value, beauty, and enjoyment for years to come.</p></div>
      <ul><li>Custom designs for every property</li><li>Low-maintenance, high-impact solutions</li><li>Licensed & insured for peace of mind</li><li>Serving the Greater Phoenix area</li></ul>
    </section>

    <section className="areas"><p className="eyebrow">Service Area</p><h2>Proudly Serving Greater Phoenix</h2><p>Phoenix • Scottsdale • Paradise Valley • Gilbert • Chandler • Mesa • Tempe • Peoria • Glendale • Surprise • Goodyear • Queen Creek</p></section>

    <section id="contact" className="contact">
      <div><p className="eyebrow">Let’s Build Your Dream Yard</p><h2>Request Your Free Consultation</h2><p>Tell us about your project and we’ll follow up to discuss your goals, style, budget, and timeline.</p><a className="contactLine" href="tel:+14809150477"><Phone/>+1 (480) 915-0477</a><a className="contactLine" href="mailto:info@sonoranturfandgravel.com"><Mail/>info@sonoranturfandgravel.com</a></div>
      <form action="mailto:info@sonoranturfandgravel.com" method="post" encType="text/plain"><input name="name" placeholder="Name" required/><input name="phone" placeholder="Phone" required/><input name="email" placeholder="Email"/><input name="city" placeholder="City"/><select name="project"><option>Complete Landscape Transformation</option><option>Artificial Turf</option><option>Decorative Gravel</option><option>Pavers & Hardscapes</option><option>Putting Green</option><option>Sonoran Vision™ Concept</option></select><select name="budget"><option>Budget range</option><option>$5k–$10k</option><option>$10k–$25k</option><option>$25k+</option></select><textarea name="details" placeholder="Tell us about your project" rows="5"/><button className="btn gold" type="submit">Send Request</button></form>
    </section>

    <footer><Image src="/logo.png" alt="Sonoran Turf & Gravel" width={180} height={140}/><p>Premium landscape transformations built for Arizona living.</p><div><b>Contact</b><a href="tel:+14809150477">+1 (480) 915-0477</a><a href="mailto:info@sonoranturfandgravel.com">info@sonoranturfandgravel.com</a></div></footer>
  </main>
}
