import { img } from '../data/images.js';

// Hero collage: the studio's "tessel" idea. Real photos plus two colour tiles.
const tiles = [
  { cls: 't1', src: 'portfolio/app-1', alt: 'Hand holding a phone showing an analytics app' },
  { cls: 't2', label: 'Brand', tone: 'cobalt' },
  { cls: 't3', src: 'cards-1', alt: 'Tablets and laptop displaying website designs on a desk' },
  { cls: 't4', src: 'portfolio/branding-2', alt: 'Branded jar, bottle and stationery on a warm background' },
  { cls: 't5', label: 'Web', tone: 'marigold' },
  { cls: 't6', src: 'cards-5', alt: 'Woman checking social media on her phone in a cafe' },
];

export default function Mosaic() {
  return (
    <div className="mosaic">
      {tiles.map((t) =>
        t.src ? (
          <img key={t.cls} className={`tile ${t.cls}`} src={img(t.src)} alt={t.alt} loading={t.cls === 't1' ? 'eager' : 'lazy'} />
        ) : (
          <div key={t.cls} className={`tile ${t.cls} tone-${t.tone}`} aria-hidden="true"><span>{t.label}</span></div>
        )
      )}
    </div>
  );
}
