import React, { useContext } from 'react';
import { MidiDataContext } from 'web-midi-hooks';
import { keyMap } from '../keyMap';
import '../styles/visualizer.css';

const DataVisualizer = () => {
  const { deviceName, keyData, pitch, modulation, errors } = useContext(MidiDataContext);

  return (
    <div className="visualizer">
      <div className="flex">
        <h4>Device:</h4>
        <p className="device">{deviceName}</p>
        <p className="errors">{errors}</p>
      </div>
      
      <div className="flex">
      <h4>Notes:</h4>
        {keyData.map((key, i) => {
          return <p className="data" key={i}>{key.note && keyMap[key.note].note}{" "}</p>
        })}
      </div>
      <div className="flex">
        <h4>Velocities:</h4>
        {keyData.map((keyPress, i) => {
          return <p className="data" key={i}>{keyPress.velocity}{" "}</p>
        })}
      </div>
      <div className="flex">
        <h4>Pitch:</h4>
        <p className="data">{pitch}</p>
      </div>
      <div className="flex">
        <h4>Modulation:</h4>
        <p className="data">{modulation}</p>
      </div>
    </div>
  );
};

export default DataVisualizer;
