import { Link, NavLink, useParams } from 'react-router-dom';
import { PageHero, CtaBand } from '../components/Sections.jsx';
import NotFound from './NotFound.jsx';
import { Check, Mail, Phone, Arrow } from '../components/Icons.jsx';
import { services } from '../data/services.js';
import { work } from '../data/work.js';
import { site } from '../data/site.js';
import { img } from '../data/images.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  usePageTitle(s ? s.title : 'Service not found');
  if (!s) return <NotFound />;
  const related = work.filter((w) => w.service === s.slug).slice(0, 3);

  return (
    <>
      <PageHero title={s.title} crumbs={[['/', 'Home'], ['/services', 'Services']]}>{s.short}</PageHero>
      <section className="section tight">
        <div className="wrap detail-grid">
          <aside className="detail-side">
            <div className="side-box">
              <h2>All services</h2>
              {services.map((x) => <NavLink key={x.slug} to={`/services/${x.slug}`}>{x.title}</NavLink>)}
            </div>
            <div className="side-box help">
              <h2>Have a question?</h2>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone /> {site.phone}</a>
              <a href={`mailto:${site.email}`}><Mail /> {site.email}</a>
            </div>
          </aside>
          <article>
            <img className="photo wide" src={img(s.img)} alt={`${s.title} at Tessel`} />
            <h2>{s.intro}</h2>
            <ul className="checks">{s.points.map((p) => <li key={p}><Check /> {p}</li>)}</ul>
            <p>{s.body}</p>
            <Link to="/contact" className="btn btn-primary">Discuss this service <Arrow /></Link>
          </article>
        </div>
        {related.length > 0 && (
          <div className="wrap related">
            <h2>Related sample work</h2>
            <ul className="work-grid">
              {related.map((w) => (
                <li key={w.slug} className="work-item">
                  <Link to={`/work/${w.slug}`}>
                    <img src={img(w.img)} alt={w.title} loading="lazy" />
                    <span className="work-cat">{w.cat}</span>
                    <span className="work-title">{w.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}
