import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (value) => {
    setRValue(value);
  };

  const handleGChange = (value) => {
    setGValue(value);
  };

  const handleBChange = (value) => {
    setBValue(value);
  };

  const color = `rgb(${rValue}, ${gValue}, ${bValue})`;

  const squareStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    border: '2px solid black'
  };

  return (
    <div>
      <div className="color-container">
        <div className="color-square" style={squareStyle}></div>
        <div className="color-value">{color}</div>
      </div>
      <div className="color-inputs">
        <div className="color-input">
          <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
        </div>
        <div className="color-input">
          <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
        </div>
        <div className="color-input">
          <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;
