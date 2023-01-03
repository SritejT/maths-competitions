import React from 'react';
import logo from './logo.svg';
import TopNavbar from './components/Navbar'
import Header from './constants/Header'
import Footer from './constants/Footer'
import Announcements from './modules/Announcements/index'
import Router from './Routing'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
