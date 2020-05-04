import { MIDI_INPUT } from '../constants';

export async function setUpMIDIAccess() {
  if (navigator.requestMIDIAccess) {
    try {
      const midiAccessObj = await navigator.requestMIDIAccess();
      const midiInputObj = getMidiInput(midiAccessObj);

      return midiInputObj;
    } catch (error) {
      console.error("Could not establish connection to MIDI device.");
    }
  } else {
    console.warn("WebMIDI is not supported in this browser.")
  }
}

const getMidiInput = (midiAccessObj) => {
  let midiInputObj;
  midiInputObj = midiAccessObj.inputs.get(MIDI_INPUT);
  
  if (!midiInputObj) {
    midiInputObj = {};
  }
  
  return midiInputObj;
}