import React, { useState, useEffect } from "react";
import MidiDataContext from "./MidiDataContext";
import { setUpMIDIAccess } from '../midi-utils/midi-utils';
import * as Constants from '../constants';

const MidiProvider = (props) => {
  const [midiData, setMidiData] = useState({
    note: 0,
    velocity: 0,
    errors: null
  });

  const onMIDIMessage = (midiMessage) => {
    if (midiMessage.data[Constants.EVENT_CHANNEL] === Constants.NOTE_ON_EVENT) {
      setMidiData({
        note: midiMessage.data[Constants.NOTE_CHANNEL],
        velocity: midiMessage.data[Constants.VELOCITY_CHANNEL]
      });
    } else if (midiMessage.data[Constants.EVENT_CHANNEL] === Constants.NOTE_OFF_EVENT) {
      setMidiData({
        note: null,
        velocity: null
      });
    }
  }

  const onStateChange = (input) => {
    console.log(input)
    if(input.currentTarget.state === "disconnected") {
      setMidiData({
        note: null,
        velocity: null,
        errors: "Error: No Device Found."
      });
    } else if (input.currentTarget.state === "connected") {
      setMidiData({
        note: null,
        velocity: null,
        errors: null
      });
    }
  }

  useEffect(() => {
    async function setUp() {
      const midiInputObj = await setUpMIDIAccess();
      midiInputObj.onmidimessage = onMIDIMessage;
      midiInputObj.onstatechange = onStateChange;
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