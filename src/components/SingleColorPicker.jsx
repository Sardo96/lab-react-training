
const SingleColorPicker = ({ color, value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const squareStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: `rgb(${color === 'r' ? value : 0}, ${color === 'g' ? value : 0}, ${color === 'b' ? value : 0})`,
    border: '2px solid black',
  };

  return (
    <div>
      <div style={squareStyle}></div>
      <label>{color.toUpperCase()}:</label>
      <input type="number" value={value} onChange={handleInputChange} min={0} max={255} />
    </div>
  );
};

export default SingleColorPicker;
