import * as Constants from '../constants';

export async function setUpMIDIAccess(onMsg, onStateChg) {
  if (navigator.requestMIDIAccess) {
    try {
      const midiAccessObj = await navigator.requestMIDIAccess();
      const midiInputObj = getMidiInput(midiAccessObj);

      midiInputObj.onmidimessage = onMsg;
      midiInputObj.onstatechange = onStateChg;
    } catch (error) {
      console.error(Constants.CONNECTION_ERROR);
    }
  } else {
    console.warn(Constants.UNSUPPORTED_BROWSER_ERROR);
  }
}

const getMidiInput = (midiAccessObj) => {
  let midiInputObj = midiAccessObj.inputs.get(Constants.MIDI_INPUT);
  return midiInputObj ? midiInputObj : {};
}