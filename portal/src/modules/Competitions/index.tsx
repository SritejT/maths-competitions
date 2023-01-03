import React from 'react';
import TopNavbar from '../../components/Navbar'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import '../../sass/_Content.scss'
import CompetitionTable from './CompetitionTable'

const Competitions = () => {
  return (
    <div>
      <Header />
      <TopNavbar />
      <div className="App-content">
        This is the competitions page.
        <CompetitionTable />
      </div>
      <Footer />
    </div>
  );
}

export default Competitions;
