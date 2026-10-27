import { Link } from 'react-router-dom';
import { PageHero } from '../components/Sections.jsx';
import { usePageTitle } from '../hooks/hooks.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <>
      <PageHero title="Page not found">That address does not lead anywhere on this website.</PageHero>
      <div className="wrap section tight"><Link to="/" className="btn btn-primary">Back to the home page</Link></div>
    </>
  );
}
