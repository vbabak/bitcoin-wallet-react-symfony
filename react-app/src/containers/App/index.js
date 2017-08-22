import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style/index.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


class App extends Component {
  render() {
    return (
      <div className="container conteiner-app">
        <Header title="Welcome to BitCoin Wallet"/>
        <Footer />
      </div>
    );
  }
}

App.component_url = '/';

export default App;
