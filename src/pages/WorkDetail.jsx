import { Link, useParams } from 'react-router-dom';
import { PageHero, CtaBand } from '../components/Sections.jsx';
import NotFound from './NotFound.jsx';
import { Check, Prev, Next } from '../components/Icons.jsx';
import { work } from '../data/work.js';
import { services } from '../data/services.js';
import { img } from '../data/images.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function WorkDetail() {
  const { slug } = useParams();
  const i = work.findIndex((x) => x.slug === slug);
  const w = work[i];
  usePageTitle(w ? w.title : 'Project not found');
  if (!w) return <NotFound />;
  const prev = work[(i - 1 + work.length) % work.length];
  const next = work[(i + 1) % work.length];
  const service = services.find((s) => s.slug === w.service);

  return (
    <>
      <PageHero title={w.title} crumbs={[['/', 'Home'], ['/work', 'Work']]}>{w.summary}</PageHero>
      <section className="section tight">
        <div className="wrap">
          <img className="photo wide" src={img(w.img)} alt={w.title} />
          <div className="detail-cols">
            <div>
              <h2>About this project</h2>
              <p>{w.text}</p>
              <p className="fine">Fictional sample project shown for demonstration.</p>
            </div>
            <dl className="meta-list">
              <div><dt>Category</dt><dd>{w.cat}</dd></div>
              <div><dt>Service</dt><dd><Link to={`/services/${service.slug}`}>{service.title}</Link></dd></div>
              <div>
                <dt>Deliverables</dt>
                <dd><ul className="checks">{w.deliverables.map((d) => <li key={d}><Check /> {d}</li>)}</ul></dd>
              </div>
            </dl>
          </div>
          <nav className="pager" aria-label="More projects">
            <Link to={`/work/${prev.slug}`}><Prev /> <span><small>Previous</small>{prev.title}</span></Link>
            <Link to={`/work/${next.slug}`}><span><small>Next</small>{next.title}</span> <Next /></Link>
          </nav>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
