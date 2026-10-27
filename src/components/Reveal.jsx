import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/hooks.js';

// Gentle fade-and-rise the first time a block scrolls into view.
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;
    el.classList.add('reveal-pre');
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.classList.add('reveal-in');
      io.disconnect();
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={className} style={{ '--d': `${delay}ms` }} {...rest}>{children}</Tag>;
}
