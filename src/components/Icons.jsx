const base = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
export const Arrow = () => <svg {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const Prev = () => <svg {...base}><path d="M15 5l-7 7 7 7" /></svg>;
export const Next = () => <svg {...base}><path d="M9 5l7 7-7 7" /></svg>;
export const Menu = () => <svg {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Close = () => <svg {...base}><path d="M6 6l12 12M18 6L6 18" /></svg>;
export const Check = () => <svg {...base}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>;
export const Zoom = () => <svg {...base}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5" /></svg>;
export const Up = () => <svg {...base}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
export const Mail = () => <svg {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
export const Phone = () => <svg {...base}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>;
export const Pin = () => <svg {...base}><path d="M12 21s7-6.2 7-11.5a7 7 0 10-14 0C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>;
export const Clock = () => <svg {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
export const Mark = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <rect x="3" y="3" width="12" height="12" rx="3" fill="var(--cobalt)" />
    <rect x="17" y="3" width="12" height="12" rx="6" fill="var(--marigold)" />
    <rect x="3" y="17" width="12" height="12" rx="6" fill="currentColor" />
    <rect x="17" y="17" width="12" height="12" rx="3" fill="currentColor" />
  </svg>
);
