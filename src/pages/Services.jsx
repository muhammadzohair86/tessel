import { PageHero, ServiceCard, CtaBand } from '../components/Sections.jsx';
import { services } from '../data/services.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function Services() {
  usePageTitle('Services');
  return (
    <>
      <PageHero title="Services">Choose one service or let us look after the whole journey from brand to launch.</PageHero>
      <section className="section tight">
        <div className="wrap service-grid">{services.map((s, n) => <ServiceCard key={s.slug} s={s} n={n} />)}</div>
      </section>
      <CtaBand />
    </>
  );
}
