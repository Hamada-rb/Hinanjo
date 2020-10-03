import React from 'react';
import './App.css';

// import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// import component's
import Header from './components/Header';
import About from './components/About';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <About />
        <Search />
      </div>
    );
  }
}

export default App;
