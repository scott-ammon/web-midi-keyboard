import React from 'react';
import Header from './Header';
import DataVisualizer from './DataVisualizer';
import Keyboard from './Keyboard';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Keyboard />
      <DataVisualizer />
    </div>
  );
}

export default App;
