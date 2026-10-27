import { PageHero } from '../components/Sections.jsx';
import { usePageTitle } from '../hooks/hooks.js';

export default function Credits() {
  usePageTitle('Credits');
  return (
    <>
      <PageHero title="Credits">Third-party material used on this website.</PageHero>
      <section className="section tight">
        <div className="wrap">
          <ul className="credits-list">
            <li>
              <strong>Photography</strong>
              Sample photography from the Bell template by{' '}
              <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>, used under its{' '}
              <a href="https://bootstrapmade.com/license/" target="_blank" rel="noopener noreferrer">licence</a>.
            </li>
            <li>
              <strong>Typefaces</strong>
              Bricolage Grotesque and Instrument Sans, used under the SIL Open Font License 1.1.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
