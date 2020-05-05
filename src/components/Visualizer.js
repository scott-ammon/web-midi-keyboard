import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';

const Visualizer = () => {
  const { keyData, errors } = useContext(MidiDataContext);

  return (
    <div>
      <p>Notes: {keyData.map((keyPress, i) => {
        return <span key={i}>{keyPress.notes}{" "}</span>
      })}</p>
      <p>Velocities: {keyData.map((keyPress, i) => {
        return <span key={i}>{keyPress.velocities}{" "}</span>
      })}</p>
      <p>Errors: {errors || "None"}</p>
    </div>
  );
};

export default Visualizer;
