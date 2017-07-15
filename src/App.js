import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Banner />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default App;
