import { useState } from 'react';
import FilterChips from '../components/FilterChips.jsx';
import WorkModal from '../components/WorkModal.jsx';
import { PageHero, WorkCard, CtaBand } from '../components/Sections.jsx';
import { work, workCategories } from '../data/work.js';
import { usePageTitle } from '../hooks/hooks.js';

export default function Work() {
  usePageTitle('Work');
  const [cat, setCat] = useState('All');
  const [openAt, setOpenAt] = useState(null);
  const list = cat === 'All' ? work : work.filter((w) => w.cat === cat);

  return (
    <>
      <PageHero title="Work">Sample projects across app design, branding, product and editorial work. Select any project to preview it.</PageHero>
      <section className="section tight">
        <div className="wrap">
          <FilterChips options={workCategories} value={cat} onChange={(c) => { setCat(c); setOpenAt(null); }} label="Filter work by category" />
          <p className="count" role="status">{list.length} {list.length === 1 ? 'project' : 'projects'}</p>
          <ul className="work-grid">
            {list.map((w, n) => <WorkCard key={w.slug} w={w} n={n} onOpen={() => setOpenAt(n)} />)}
          </ul>
          <p className="fine">All projects are fictional samples shown for demonstration. Product names and packaging visible in the photographs belong to their respective owners.</p>
        </div>
      </section>
      {openAt !== null && <WorkModal list={list} index={openAt} onChange={setOpenAt} onClose={() => setOpenAt(null)} />}
      <CtaBand />
    </>
  );
}
