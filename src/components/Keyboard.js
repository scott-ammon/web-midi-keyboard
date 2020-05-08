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
          <div className="black-key cs2"></div>
          <div className="black-key ds2"></div>
          <div className="black-key fs2"></div>
          <div className="black-key gs2"></div>
          <div className="black-key as2"></div>
          <div className="black-key cs3"></div>
          <div className="black-key ds3"></div>
          <div className="black-key fs3"></div>
          <div className="black-key gs3"></div>
          <div className="black-key as3"></div>
          {pressedKeys}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;