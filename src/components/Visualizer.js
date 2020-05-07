import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';
import Keyboard from './Keyboard';
import '../styles/visualizer.css';

const Visualizer = () => {
  const { keyData, errors } = useContext(MidiDataContext);

  return (
    <div className="visualizer">
      <p>Notes: {keyData.map((keyPress, i) => {
        return <span key={i}>{keyPress.note}{" "}</span>
      })}</p>
      <p>Velocities: {keyData.map((keyPress, i) => {
        return <span key={i}>{keyPress.velocity}{" "}</span>
      })}</p>
      <p>{errors}</p>
      <Keyboard />
    </div>
  );
};

export default Visualizer;
