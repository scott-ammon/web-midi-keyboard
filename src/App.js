import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [velocity, setVelocity] = useState(0);
  const [note, setNote] = useState(0);

  const setUpMIDIAccess = () => {
    if (navigator.requestMIDIAccess) {
      console.info("This browser supports Web MIDI");
      navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
    } else {
      console.warn("WebMIDI is not supported in this browser.")
    }
  }
  
  const onMIDISuccess = (midiAccess) => {
    console.log(midiAccess);
  
    for (let input of midiAccess.inputs.values()) {
      input.onmidimessage = useMIDIMessage;
    }
  }
  
  const useMIDIMessage = (midiMessage) => {
    if (midiMessage.data[0] === 144) {
      setNote(midiMessage.data[1]);
      setVelocity(midiMessage.data[2]);
    }
  }
  
  const onMIDIFailure = () => {
    console.error("Could not establish connection to MIDI device.");
  }

  useEffect(() => {
    setUpMIDIAccess();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Web MIDI Api Visualizer
        </p>
        <p>Note: {note}</p>
        <p>Velocity: {velocity}</p>
      </header>
    </div>
  );
}

export default App;
