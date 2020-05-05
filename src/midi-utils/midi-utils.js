import * as Constants from '../constants';

export async function setUpMIDIAccess() {
  if (navigator.requestMIDIAccess) {
    try {
      const midiAccess = await navigator.requestMIDIAccess();

      const midiInput = getMidiInput(midiAccess);

      return midiInput;
    } catch (error) {
      console.error(Constants.CONNECTION_ERROR);
    }
  } else {
    alert(Constants.UNSUPPORTED_BROWSER_ERROR);
  }
}

const getMidiInput = (midiAccess) => {
  let midiInput = midiAccess.inputs.get(Constants.MIDI_INPUT);
  
  if (!midiInput) {
    midiInput = {}
    midiInput.errors = Constants.NO_DEVICE_ERROR;
  } else {
    midiInput.errors = null;
  }

  return midiInput;
}