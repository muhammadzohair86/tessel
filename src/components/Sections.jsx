import { Link } from 'react-router-dom';
import { img } from '../data/images.js';
import { useCountUp } from '../hooks/hooks.js';
import { Arrow } from './Icons.jsx';
import Reveal from './Reveal.jsx';

export const PageHero = ({ title, children, crumbs }) => (
  <section className="page-hero">
    <div className="wrap">
      {crumbs && (
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
      )}
      <h1>{title}</h1>
      {children && <p className="lede">{children}</p>}
    </div>
  </section>
);

export const SectionHead = ({ title, children, action }) => (
  <Reveal className="section-head">
    <div>
      <h2>{title}</h2>
      {children && <p className="lede">{children}</p>}
    </div>
    {action}
  </Reveal>
);

export const CtaBand = () => (
  <section className="cta" style={{ '--bg': `url(${img('cta-bg')})` }}>
    <Reveal className="wrap cta-inner">
      <h2>Ready to fit the pieces together?</h2>
      <p>Tell us what you are building. We reply to every enquiry within two working days.</p>
      <Link to="/contact" className="btn btn-accent">Start a project <Arrow /></Link>
    </Reveal>
  </section>
);

function Stat({ value, label }) {
  const [ref, n] = useCountUp(value);
  return (
    <div className="stat">
      <span className="stat-n" ref={ref}>{n}</span>
      <span>{label}</span>
    </div>
  );
}
export const Facts = ({ items }) => (
  <section className="facts" style={{ '--bg': `url(${img('hero-bg')})` }} aria-label="How we work in numbers">
    <div className="wrap facts-grid">{items.map((s) => <Stat key={s.label} {...s} />)}</div>
  </section>
);

export const ServiceCard = ({ s, n }) => (
  <Reveal as="article" className="service-card" delay={(n % 3) * 70}>
    <img src={img(s.img)} alt="" loading="lazy" />
    <div className="service-body">
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      <Link to={`/services/${s.slug}`} className="textlink">Learn more <Arrow /></Link>
    </div>
  </Reveal>
);

export const WorkCard = ({ w, onOpen, n = 0 }) => (
  <Reveal as="li" className="work-item" delay={(n % 3) * 70}>
    <button type="button" onClick={onOpen} aria-label={`Preview ${w.title}`}>
      <img src={img(w.img)} alt={w.title} loading="lazy" />
      <span className="work-cat">{w.cat}</span>
      <span className="work-title">{w.title}</span>
    </button>
  </Reveal>
);
