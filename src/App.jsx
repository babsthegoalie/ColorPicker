import { useState } from 'react';

const Color = ({ color, setSelectedColor }) => {
  const handleClick = () => {
    setSelectedColor(color);
  };

  return (
    <div
      className={color}
      onClick={handleClick}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>CURRENTLY SELECTED: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;