// MIDI object constants
export const EVENT_CHANNEL = 0;
export const NOTE_ON_EVENT = 144;
export const NOTE_OFF_EVENT = 128;
export const NOTE_CHANNEL = 1;
export const VELOCITY_CHANNEL = 2;
export const MIDI_INPUT = "input-0";

// MIDI states
export const DISCONNECTED = "disconnected";
export const CONNECTED = "connected";

// MIDI Errors
export const NO_DEVICE_ERROR = "Error: No device found.";
export const CONNECTION_ERROR = "Error: Could not establish access to Web MIDI Api.";
export const UNSUPPORTED_BROWSER_ERROR = "Web MIDI Api is not supported in this browser.";
