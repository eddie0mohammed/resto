import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import TopSection from './components/TopSection/TopSection';
import ReservationSection from './components/ReservationSection/ReservationSection';
import MenuSection from './components/MenuSection/MenuSection';
import ReviewTop from './components/ReviewTop/ReviewTop';
import ReviewBottom from './components/ReviewBottom/ReviewBottom';
import Promotion from './components/Promotion/Promotion';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends React.Component {


  render(){

  
    return (
      <div className="App main">

        <Header />

        <TopSection />

        <ReservationSection />

        <MenuSection />

        <ReviewTop />

        <ReviewBottom />

        <Promotion />

        <Contact />

        <Footer />
                
      </div>
    );
  }
}

export default App;
