import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Reservations from './pages/Reservations/Reservations';

import Modal from './UI/Modal/Modal';
import Backdrop from './UI/Backdrop/Backdrop';


class App extends React.Component {


  state = {
    showModal: false

  }

  showModal = () => {
    this.setState({
      showModal: true
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render(){

  
    return (
      <div className="App">

       
        <Switch>

          <Route path='/' exact render={(props) => <Home {...props} modalHandler={this.showModal} showModal={this.showModal}/>}/>
          <Route path='/about' exact render={(props) => <About {...props} modalHandler={this.showModal}/>} />
          <Route path='/menu' exact render={(props) => <Menu {...props} modalHandler={this.showModal}/>} />


        </Switch>


        <Modal show={this.state.showModal}><Reservations hide={this.hideModal}/></Modal>
        <Backdrop show={this.state.showModal} hide={this.hideModal}/>
        
                
      </div>
    );
  }
}

export default App;
