import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';
import '../styles/keyboard.css';
import { keyMap } from '../keyMap';

const Keyboard = () => {
  const { keyData } = useContext(MidiDataContext);

  const pressedKeys = keyData.map((key, i) => {
    if (key.note && keyMap[key.note].color === "white") {
      const keyLocation = {
        left: ((key.note - 48) * 40),
      };
      return (
        <div style={keyLocation} className="pressedKey" key={i}></div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="keyboard-outer">
      <div className="keyboard-inner">
        <div className="key-container">
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          <div className="white-key"></div>
          {pressedKeys}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;