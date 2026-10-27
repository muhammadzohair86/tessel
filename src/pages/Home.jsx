import { Link } from 'react-router-dom';
import Mosaic from '../components/Mosaic.jsx';
import Reveal from '../components/Reveal.jsx';
import { SectionHead, ServiceCard, Facts, CtaBand } from '../components/Sections.jsx';
import { Arrow, Check } from '../components/Icons.jsx';
import { img } from '../data/images.js';
import { services } from '../data/services.js';
import { work } from '../data/work.js';
import { facts } from '../data/site.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Brand, product and marketing, fitted together.</h1>
            <p className="lede">Tessel is a digital studio that designs brands, builds websites and apps, and runs the campaigns that bring people to them.</p>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary">Start a project <Arrow /></Link>
              <Link to="/work" className="btn btn-ghost">See our work</Link>
            </div>
          </div>
          <Mosaic />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal><img className="photo" src={img('about')} alt="A strategist presenting to a team in a bright, colourful office" loading="lazy" /></Reveal>
          <Reveal delay={90}>
            <h2>One small team, from first sketch to live campaign</h2>
            <p>Most projects stall in the handover between agencies. At Tessel the people who shape your brand also design your product, build your site and plan your launch, so nothing gets lost along the way.</p>
            <ul className="checks">
              <li><Check /> A single named lead who knows your project inside out</li>
              <li><Check /> Fixed-scope proposals, so you know the cost before we start</li>
              <li><Check /> Plain-language updates every week</li>
            </ul>
            <Link to="/about" className="textlink">About the studio <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead title="What we do" action={<Link to="/services" className="textlink">All services <Arrow /></Link>}>
            Six services that work on their own or together.
          </SectionHead>
          <div className="service-grid">{services.map((s, n) => <ServiceCard key={s.slug} s={s} n={n} />)}</div>
        </div>
      </section>

      <Facts items={facts} />

      <section className="section">
        <div className="wrap">
          <SectionHead title="Selected work" action={<Link to="/work" className="textlink">All work <Arrow /></Link>}>
            Sample projects that show the kind of work we do.
          </SectionHead>
          <ul className="work-grid">
            {work.slice(0, 6).map((w, n) => (
              <Reveal as="li" key={w.slug} className="work-item" delay={(n % 3) * 70}>
                <Link to={`/work/${w.slug}`}>
                  <img src={img(w.img)} alt={w.title} loading="lazy" />
                  <span className="work-cat">{w.cat}</span>
                  <span className="work-title">{w.title}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
