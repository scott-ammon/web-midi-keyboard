import React, { useState, useEffect } from "react";
import MidiDataContext from "./MidiDataContext";
import { setUpMIDIAccess } from '../midi-utils/midi-utils';
import * as Constants from '../constants';

const MidiProvider = (props) => {
  const [note, setNote] = useState([]);
  const [velocity, setVelocity] = useState([]);
  const [errors, setErrors] = useState(null);

  const midiData = {
    note,
    velocity,
    errors
  };

  const onMIDIMessage = (midiMessage) => {
    const event = midiMessage.data[Constants.EVENT_CHANNEL];
    const newNote = midiMessage.data[Constants.NOTE_CHANNEL];
    const newVelocity = midiMessage.data[Constants.VELOCITY_CHANNEL];

    if (event === Constants.NOTE_ON_EVENT) {
      setNote(note => [...note, newNote]);
      setVelocity(velocity => [...velocity, newVelocity]);
    } else if (event === Constants.NOTE_OFF_EVENT) {
      setNote([]);
      setVelocity([]);
    }
  }

  const onStateChange = (input) => {
    console.log(input)
    if(input.currentTarget.state === Constants.DISCONNECTED) {
      setNote([]);
      setVelocity([]);
      setErrors(Constants.NO_DEVICE_ERROR);
    } else if (input.currentTarget.state === Constants.CONNECTED) {
      setNote([]);
      setVelocity([]);
      setErrors(null);
    }
  }

  useEffect(() => {
    setUpMIDIAccess(onMIDIMessage, onStateChange);
  }, []);

  return(
    <MidiDataContext.Provider value={midiData}>
      {props.children}
    </MidiDataContext.Provider>
  );
};

export default MidiProvider;