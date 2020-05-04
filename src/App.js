import React, { useState, useEffect } from 'react';
import './App.css';
import { setUpMIDIAccess } from './midi-utils/midi-utils';
import * as Constants from './constants';

function App() {
  const [velocity, setVelocity] = useState(0);
  const [note, setNote] = useState(0);

  const onMIDIMessage = (midiMessage) => {
    if (midiMessage.data[Constants.EVENT_CHANNEL] === Constants.NOTE_ON_EVENT) {
      setNote(midiMessage.data[Constants.NOTE_CHANNEL]);
      setVelocity(midiMessage.data[Constants.VELOCITY_CHANNEL]);
    }
  }

  useEffect(() => {
    async function setUp() {
      const midiInputObj = await setUpMIDIAccess();
      midiInputObj.onmidimessage = onMIDIMessage;
    }
    setUp();
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
