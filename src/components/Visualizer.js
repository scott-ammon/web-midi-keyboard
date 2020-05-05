import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';

const Visualizer = () => {
  const { note, velocity, errors } = useContext(MidiDataContext);

  return (
    <div>
      <p>Note: {note.map((note, i) => {
        return <span key={i}>{note}</span>
      })}</p>
      <p>Velocity: {velocity}</p>
      <p>Errors: {errors || "None"}</p>
    </div>
  );
};

export default Visualizer;
