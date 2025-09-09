
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-subtitle">Oops! Page Not Found</p>
        <p className="not-found-text">
          Sorry, the page you are looking for doesn't exist. You might have mistyped the address or the page may have moved.
        </p>
        <Link to="/" className="not-found-link">Go Back to Homepage</Link>
      </div>
    </div>
  );
}
