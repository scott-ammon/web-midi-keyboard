import React from 'react';
import './App.css';
import Visualizer from './components/Visualizer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Web MIDI Api Visualizer
        </p>
        <Visualizer />
      </header>
    </div>
  );
}

export default App;
