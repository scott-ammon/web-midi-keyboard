import React, { useContext } from 'react';
import './App.css';
import MidiDataContext from './context/MidiDataContext';

function App() {
  const midiData = useContext(MidiDataContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Web MIDI Api Visualizer
        </p>
        <p>Note: {midiData.note}</p>
        <p>Velocity: {midiData.velocity}</p>
        <p>Errors: {midiData.errors}</p>
      </header>
    </div>
  );
}

export default App;
