export async function setUpMIDIAccess() {
  if (navigator.requestMIDIAccess) {
    console.info("This browser supports Web MIDI");

    try {
      const midiAccessObj = await navigator.requestMIDIAccess();
      let midiInputObj;

      // Only one input MIDI channel currently in the Map
      for (let input of midiAccessObj.inputs.values()) {
        midiInputObj = input;
      }

      return midiInputObj;

    } catch (error) {
      console.error("Could not establish connection to MIDI device.");
    }
  } else {
    console.warn("WebMIDI is not supported in this browser.")
  }
}