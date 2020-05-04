import React from 'react';

const MidiDataContext = React.createContext({
  note: null,
  velocity: null,
  errors: null
});

export default MidiDataContext;