import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';

const Visualizer = () => {
  const { keyData, pitch, modulation, errors } = useContext(MidiDataContext);

  return (
    <div className="visualizer">
      <p>Notes: {keyData.map((keyPress, i) => {
        return <span key={i}>{keyPress.note}{" "}</span>
      })}</p>
      <p>Velocities: {keyData.map((keyPress, i) => {
        return <span key={i}>{keyPress.velocity}{" "}</span>
      })}</p>
      <p>Pitch: {pitch}</p>
      <p>Modulation: {modulation}</p>
      <p>{errors}</p>
    </div>
  );
};

export default Visualizer;
