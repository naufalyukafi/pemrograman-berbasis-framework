import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul="Halaman Footer" nama="Aufa" />
      </div>
    );
  }
}

export default App;
