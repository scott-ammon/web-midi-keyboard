import React from 'react';
import '../styles/app.css';
import Visualizer from './Visualizer';
import Keyboard from './Keyboard';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Web MIDI Api Visualizer</p>
      </header>
      <Visualizer />
      <Keyboard />
    </div>
  );
}

export default App;
