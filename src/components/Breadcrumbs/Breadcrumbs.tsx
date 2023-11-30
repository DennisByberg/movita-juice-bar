// import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbs = (
    <div className='breadcrumbs'>
      <div className='crumb'>
        <Link to={'/'}>home</Link>
      </div>
      {pathnames.map((crumb, index) => {
        const currentLink = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <div className='crumb' key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        );
      })}
    </div>
  );

  return breadcrumbs;
}

export default Breadcrumbs;
