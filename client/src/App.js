import React from 'react';
import './App.css';
import Register from './components/Register';
import Recipes from './components/Recipes';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Register />
        <Recipes />
      </div>
    );
  }
}

export default App;
