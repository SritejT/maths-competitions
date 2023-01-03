import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.css";
import "../sass/_Footer.scss"
import { Link, Outlet } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <footer>
      <Container fluid>
        <nav>
          <ul className="wrapper">
            <li className="link"><Link to="/">Terms and Conditions</Link></li>
            <li className="link"><Link to="/">Cookies</Link></li>
          </ul>
        </nav>
        <Outlet />
      </Container>
    </footer>
  );
}

export default Footer
