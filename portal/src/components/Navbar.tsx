import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../sass/_Navbar.scss"

import "bootstrap/dist/css/bootstrap.css";

const TopNavbar: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link className="button" to="/">Announcements</Link></li>
          <li><Link className="button" to="/competitions">Competitions</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default TopNavbar;
