import React, { useState, useEffect } from "react";
import MidiDataContext from "./MidiDataContext";
import { setUpMIDIAccess } from '../midi-utils/midi-utils';
import * as Constants from '../constants';

const MidiProvider = (props) => {
  const [keyData, setKeyData] = useState([{
    note: null,
    velocity: null
  }]);
  const [errors, setErrors] = useState(null);

  const midiData = {
    keyData,
    errors
  };

  const onMIDIMessage = (midiMessage) => {
    const event = midiMessage.data[Constants.EVENT_CHANNEL];
    const newNote = midiMessage.data[Constants.NOTE_CHANNEL];
    const newVelocity = midiMessage.data[Constants.VELOCITY_CHANNEL];
    const newKeyData = {
      note: newNote,
      velocity: newVelocity
    };

    if (event === Constants.NOTE_ON_EVENT) {
      setKeyData(keyData => [...keyData, newKeyData])
    } else if (event === Constants.NOTE_OFF_EVENT) {
      setKeyData(keyData => keyData.filter(keyObj => {
        return keyObj.note !== newNote;
      }));
    }
  }

  const onStateChange = (input) => {
    if(input.currentTarget.state === Constants.DISCONNECTED) {
      setKeyData([]);
      setErrors(Constants.NO_DEVICE_ERROR);
    } else if (input.currentTarget.state === Constants.CONNECTED) {
      setKeyData([]);
      setErrors(null);
    }
  }

  useEffect(() => {
    async function setUp() {
      const midiInput = await setUpMIDIAccess();

      midiInput.onmidimessage = onMIDIMessage;
      midiInput.onstatechange = onStateChange;

      setErrors(midiInput.errors);
    }

    setUp();
  }, []);

  return(
    <MidiDataContext.Provider value={midiData}>
      {props.children}
    </MidiDataContext.Provider>
  );
};

export default MidiProvider;