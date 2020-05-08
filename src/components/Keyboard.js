import React, { useContext } from 'react';
import MidiDataContext from '../context/MidiDataContext';
import '../styles/keyboard.css';
import { keyMap } from '../keyMap';

let regularKeys = [];

for (let key in keyMap) {
  const keyStyle = { left: keyMap[key].offset };
  if (keyMap[key].color === "white") {
    regularKeys.push(<div style={keyStyle} className="white-key" key={key}></div>);
  } else {
    regularKeys.push(<div style={keyStyle} className="black-key" key={key}></div>);
  }
}

const Keyboard = () => {
  const { keyData } = useContext(MidiDataContext);

  const pressedKeys = keyData.map((key, i) => {
    let keyToRender = null;

    if(key.note) {
      const keyStyle = {
        left: keyMap[key.note].offset,
      };
      if (keyMap[key.note].color === "white") {
        keyToRender = <div style={keyStyle} className="white-key white-pressed" key={i}></div>;
      } else {
        keyToRender = <div style={keyStyle} className="black-key black-pressed" key={i}></div>;
      }
    }
    return keyToRender;
  });

  return (
    <div className="keyboard-outer">
      <div className="keyboard-inner">
        <div className="controls line"></div>
        <div className="controls top"></div>
        <div className="controls left"></div>
        <div className="key-container">
          {regularKeys}
          {pressedKeys}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;