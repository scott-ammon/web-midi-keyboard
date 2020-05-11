import React from 'react';

const MidiDataContext = React.createContext({
  keyData: [],
  pitch: 0,
  modulation: 0,
  errors: null
});

export default MidiDataContext;