import { PageHero, SectionHead, Facts, CtaBand } from '../components/Sections.jsx';
import Reveal from '../components/Reveal.jsx';
import { img } from '../data/images.js';
import { facts, team } from '../data/site.js';
import { usePageTitle } from '../hooks/hooks.js';

const principles = [
  ['Start with the audience', 'Every decision begins with who will use the thing and what they need from it.'],
  ['Write decisions down', 'Clear briefs and short notes keep everyone aligned and make handovers painless.'],
  ['Test early', 'Rough prototypes in front of real people beat polished guesses.'],
  ['Use plain language', 'We write proposals, reports and interfaces the way people actually speak.'],
  ['Build accessibly', 'Contrast, keyboard use and readable type are part of the brief, not an extra.'],
  ['Measure, then improve', 'We agree what success looks like and review it openly each month.'],
];

export default function About() {
  usePageTitle('About');
  return (
    <>
      <PageHero title="About Tessel">A tessel is a single tile in a mosaic. Our studio exists to make sure the pieces of your brand add up to a picture.</PageHero>
      <section className="section tight">
        <div className="wrap split">
          <Reveal>
            <h2>Why we work the way we do</h2>
            <p>Tessel is a fictional studio created for this demonstration, built around a simple idea: brand, product and marketing work better when one team looks after them together.</p>
            <p>Instead of passing your project between specialists, we keep a small group close to it from the first workshop to the first campaign report.</p>
          </Reveal>
          <Reveal delay={90}><img className="photo" src={img('services')} alt="A support specialist wearing a headset helping a customer at a laptop" loading="lazy" /></Reveal>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead title="How we work">Six habits that shape every project.</SectionHead>
          <ol className="principles">
            {principles.map(([t, d], n) => (
              <Reveal as="li" key={t} delay={(n % 3) * 70}><span className="num">{n + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Facts items={facts} />

      <section className="section">
        <div className="wrap">
          <SectionHead title="The team">Sample team shown for demonstration.</SectionHead>
          <ul className="team-grid">
            {team.map((m, n) => (
              <Reveal as="li" key={m.name} className="member" delay={n * 60}>
                <img src={img(m.img)} alt={`Portrait of ${m.name}`} loading="lazy" />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
