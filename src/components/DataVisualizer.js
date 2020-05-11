import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';
import { keyMap } from '../keyMap';
import '../styles/visualizer.css';

const DataVisualizer = () => {
  const { keyData, pitch, modulation, errors } = useContext(MidiDataContext);

  return (
    <div className="visualizer">
      <div className="flex">
      <h4>Notes:</h4>
        {keyData.map((key, i) => {
          return <p key={i}>{key.note && keyMap[key.note].note}{" "}</p>
        })}
      </div>
      <div className="flex">
        <h4>Velocities:</h4>
        {keyData.map((keyPress, i) => {
          return <p key={i}>{keyPress.velocity}{" "}</p>
        })}
      </div>
      <div className="flex">
        <h4>Pitch:</h4>
        <p>{pitch}</p>
      </div>
      <div className="flex">
        <h4>Modulation:</h4>
        <p>{modulation}</p>
      </div>
      <h4 className="errors">{errors}</h4>
    </div>
  );
};

export default DataVisualizer;
