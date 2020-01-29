import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Gallery from './pages/Gallery/Gallery';
import Menu from './pages/Menu/Menu';
// import Reservations from './pages/Reservations/Reservations';



class App extends React.Component {


  render(){

  
    return (
      <div className="App">


        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About} />
          {/* <Route path='/gallery' exact component={Gallery} /> */}
          <Route path='/menu' exact component={Menu} />
          {/* <Route path='/reservations' exact component={Reservations} /> */}


        </Switch>

        
                
      </div>
    );
  }
}

export default App;
