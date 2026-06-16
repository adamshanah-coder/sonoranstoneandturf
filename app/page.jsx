const services = [
  { title: 'Artificial Turf', copy: 'Lush, green lawns with minimal maintenance.', image: '/images/turf.jpg' },
  { title: 'Decorative Gravel', copy: 'Beautiful, low-maintenance landscapes built for Arizona.', image: '/images/gravel.jpg' },
  { title: 'Pavers', copy: 'Elegant designs that add value and style.', image: '/images/pavers.jpg' },
  { title: 'Putting Greens', copy: 'Practice and play in your own backyard.', image: '/images/putting.jpg' },
  { title: 'Outdoor Living', copy: 'Custom spaces for relaxing and entertaining.', image: '/images/outdoor.jpg' },
  { title: 'Landscape Lighting', copy: 'Enhance beauty, safety, and security at night.', image: '/images/outdoor.jpg' },
  { title: 'Pet-Friendly Turf', copy: 'Safe, clean, and durable for your pets.', image: '/images/turf.jpg' }
];

const areas = ['Phoenix', 'Scottsdale', 'Paradise Valley', 'Gilbert', 'Chandler', 'Mesa', 'Tempe', 'Peoria', 'Glendale', 'Surprise', 'Goodyear', 'Queen Creek'];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top">
          <img src="/logo.png" alt="Sonoran Turf & Gravel logo" />
          <div>
            <strong>Sonoran</strong>
            <span>Turf & Gravel</span>
          </div>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#vision">Sonoran Vision</a>
          <a href="#gallery">Gallery</a>
          <a href="#areas">Service Areas</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="navButton" href="#contact">Free Estimate</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroImage" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Licensed & Insured • Greater Phoenix Area</p>
          <h1>Transforming Arizona Outdoor <span>Living</span></h1>
          <p className="lead">Premium turf, decorative gravel, pavers, putting greens, and complete landscape transformations designed for Arizona beauty and built to last.</p>
          <div className="heroActions">
            <a className="button gold" href="#contact">Get a Free Estimate <span>→</span></a>
            <a className="button glass" href="#vision">Reimagine My Yard <span>→</span></a>
          </div>
          <div className="heroBadges">
            <span>Licensed & Insured</span>
            <span>5-Star Service</span>
            <span>Arizona Design</span>
          </div>
        </div>
        <aside className="stats">
          <div><strong>Premium</strong><span>Materials</span></div>
          <div><strong>Local</strong><span>Greater Phoenix</span></div>
          <div><strong>Free</strong><span>Consultations</span></div>
          <div><strong>100%</strong><span>Insured</span></div>
        </aside>
      </section>

      <section className="consultBar">
        <div><strong>Schedule Your Free Consultation</strong><span>Let's build something beautiful together.</span></div>
        <div><strong>Fast Response</strong><span>Usually within 1 business day</span></div>
        <div><strong>No Obligation</strong><span>100% free estimate</span></div>
        <a href="#contact">Schedule Now →</a>
      </section>

      <section id="services" className="section services">
        <p className="eyebrow center">Our Services</p>
        <h2>Complete Outdoor Solutions</h2>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <img src={service.image} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="vision" className="vision">
        <div>
          <p className="eyebrow">Sonoran Vision</p>
          <h2>See Your Yard Before You Build It.</h2>
          <p>Upload a photo of your yard, choose a style, and receive a premium concept direction for your future outdoor space.</p>
          <div className="visionSteps">
            <span>Upload Photo</span>
            <span>Choose Style</span>
            <span>Review Concepts</span>
            <span>Schedule Consult</span>
          </div>
        </div>
        <form>
          <label>Name<input placeholder="Your name" /></label>
          <label>Phone<input placeholder="(480) 915-0477" /></label>
          <label>Project Style<select><option>Luxury Resort</option><option>Modern Desert</option><option>Family Backyard</option><option>Putting Green</option></select></label>
          <label>Upload Yard Photo<input type="file" /></label>
          <button type="button">Start My Concept →</button>
        </form>
      </section>

      <section id="gallery" className="section gallery">
        <p className="eyebrow center">Before & After</p>
        <h2>Designed for Arizona Living</h2>
        <div className="beforeAfter">
          <figure><img src="/images/before.jpg" alt="Before yard" /><figcaption>Before</figcaption></figure>
          <figure><img src="/images/after.jpg" alt="After yard" /><figcaption>After</figcaption></figure>
        </div>
      </section>

      <section id="areas" className="areas">
        <p className="eyebrow center">Service Areas</p>
        <h2>Serving the Greater Phoenix Area</h2>
        <p>{areas.join(' • ')}</p>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Free Estimate</p>
          <h2>Let's Build Your Dream Yard.</h2>
          <p>Call, email, or submit your project details and we'll follow up quickly.</p>
          <a href="tel:+14809150477">+1 (480) 915-0477</a>
          <a href="mailto:info@sonoranturfandgravel.com">info@sonoranturfandgravel.com</a>
        </div>
        <form action="mailto:info@sonoranturfandgravel.com" method="post" encType="text/plain">
          <input name="name" placeholder="Name" />
          <input name="phone" placeholder="Phone" />
          <input name="email" placeholder="Email" />
          <select name="project"><option>Complete Transformation</option><option>Artificial Turf</option><option>Decorative Gravel</option><option>Pavers</option><option>Putting Green</option></select>
          <textarea name="details" placeholder="Tell us about your project" />
          <button>Request Estimate →</button>
        </form>
      </section>
    </main>
  );
}
