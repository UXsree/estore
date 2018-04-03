import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import ContentsContainer from './components/contents';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <ContentsContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
