import { Link } from 'react-router-dom';
import { nav, site } from '../data/site.js';
import { Mark } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand"><Mark size={28} /> Tessel</p>
          <p className="footer-blurb">A digital studio for brand, web and marketing, fitted together.</p>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          {nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <address>
          <h2>Get in touch</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          <span>{site.address}</span>
          <span>{site.hours}</span>
        </address>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Tessel. A fictional studio created for demonstration.</p>
        <p className="credit">Website designed and built by Zohair.</p>
        <Link to="/credits">Credits</Link>
      </div>
    </footer>
  );
}
