import React from 'react';
import TopNavbar from '../../components/Navbar'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import Router from '../../Routing'
import '../../sass/_Content.scss'

const Announcements = () => {
  return (
    <div>
      <Header />
      <TopNavbar />
      <div className="App-content">
        This is the announcements page.
      </div>
      <Footer />
    </div>
  );
}

export default Announcements;
