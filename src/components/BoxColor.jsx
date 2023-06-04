function BoxColor({ r, g, b }) {
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: '1400px',
        height: '300px',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
      };

      const hexValue = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

      function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }
    
      return (
        <div style={divStyle}>
          <span>
            rgb({r},{g},{b})
          </span>
          <br />
          <span>{hexValue}</span>
        </div>
      );
    }

export default BoxColor;