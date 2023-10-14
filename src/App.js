import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33B2FF', '#FF33B2','FF0000','FFA500'];

  return (
    <div className="App">
      <center><h1>Color Picker</h1></center>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;