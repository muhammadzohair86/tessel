import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { img } from '../data/images.js';
import { Close, Prev, Next, Arrow } from './Icons.jsx';

export default function WorkModal({ list, index, onClose, onChange }) {
  const box = useRef(null);
  const w = list[index];

  useEffect(() => {
    const opener = document.activeElement;
    document.body.style.overflow = 'hidden';
    box.current?.querySelector('.modal-close')?.focus();
    return () => {
      document.body.style.overflow = '';
      opener?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onChange((index - 1 + list.length) % list.length);
      if (e.key === 'ArrowRight') onChange((index + 1) % list.length);
      if (e.key === 'Tab') {
        const f = box.current.querySelectorAll('button, a[href]');
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [index, list.length, onClose, onChange]);

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={box}>
        <img src={img(w.img)} alt={w.title} />
        <div className="modal-body">
          <p className="work-cat">{w.cat}</p>
          <h2 id="modal-title">{w.title}</h2>
          <p>{w.summary}</p>
          <Link to={`/work/${w.slug}`} className="btn btn-primary">View project <Arrow /></Link>
          <div className="modal-nav">
            <button className="icon-btn" onClick={() => onChange((index - 1 + list.length) % list.length)} aria-label="Previous project"><Prev /></button>
            <span>{index + 1} of {list.length}</span>
            <button className="icon-btn" onClick={() => onChange((index + 1) % list.length)} aria-label="Next project"><Next /></button>
          </div>
        </div>
        <button className="icon-btn modal-close" onClick={onClose} aria-label="Close preview"><Close /></button>
      </div>
    </div>
  );
}
