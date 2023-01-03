import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/css/bootstrap.css";
import "../sass/_Header.scss";

const Header: FC = () => {
  return (
    <header>
      <Stack direction="horizontal" gap={5}>
        <div className="Title">ContestMaths</div>
        <div className="Login">Login Details Here</div>
      </Stack>
    </header>
  );
}

export default Header
