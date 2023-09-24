import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1 className="not-found__h1"> Sorry, this page doesn’t exist</h1>
      <p className="not-found__p">
        This may be because the link has expired or the website is experiencing a few issues behind
        the scenes
      </p>
      <div className="not-found_container flex-column ">
        <Link className="not-found__link" to="/Men">
          Men
        </Link>
        <Link className="not-found__link" to="/Women">
          Women
        </Link>
        <Link className="not-found__link" to="/Final-sale">
          Final sale
        </Link>
        <Link className="not-found__link" to="/">
          Back to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
