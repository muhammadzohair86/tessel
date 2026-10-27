import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/site.js';
import { Menu, Close, Mark } from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="header">
      <div className="wrap header-row">
        <Link to="/" className="brand" aria-label="Tessel home"><Mark /> Tessel</Link>
        <nav id="site-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav-cta">Start a project</Link>
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
