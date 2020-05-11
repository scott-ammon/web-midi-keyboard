import { setUpMIDIAccess } from '../midi-utils/midi-utils';
import * as Constants from '../constants';

test('When MIDIAccess succeeds with device connected, returns MIDIInput with no errors', async () => {
  const inputMapConnectedDevice = new Map();
  inputMapConnectedDevice.set(Constants.MIDI_INPUT, { errors: null });
  const mockMidiAccessConnectedDevice = { inputs: inputMapConnectedDevice };
  window.navigator.requestMIDIAccess = jest.fn(async () => mockMidiAccessConnectedDevice);

  const midiInput = await setUpMIDIAccess();

  expect(midiInput.errors).toEqual(null);
});

test('When MIDIAccess succeeds with no device connected, error field populated', async () => {
  const inputMapNoDevice = new Map();
  const mockMidiAccessNoDevice = { inputs: inputMapNoDevice };
  window.navigator.requestMIDIAccess = jest.fn(async () => mockMidiAccessNoDevice);

  const midiInput = await setUpMIDIAccess();

  expect(midiInput.errors).toEqual(Constants.NO_DEVICE_ON_STARTUP_ERROR);
});

test('When launched in unsupported browser, setUpMIDIAccess alerts failure', async () => {
  navigator.requestMIDIAccess = null;
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  
  await setUpMIDIAccess();

  expect(window.alert).toBeCalledWith(Constants.UNSUPPORTED_BROWSER_ERROR);
});

test('When requestMIDIAccess() fails, setUpMIDIAccess logs connection error', async () => {
  window.navigator.requestMIDIAccess = jest.fn(async () => {});
  console.error = jest.fn();

  await setUpMIDIAccess();

  expect(console.error).toHaveBeenCalledWith(Constants.CONNECTION_ERROR);
});