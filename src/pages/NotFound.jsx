import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="error">
      <h1 className="error-num">404.</h1>
      <h1>Page Not Found</h1>
      <p>
        Uh oh, looks like something's wrong. Try refreshing the page once to
        load content.
      </p>
      <Link to="/" className="error-link">
        Back to Home ✧.*
      </Link>
    </div>
  );
}

export default NotFound;
