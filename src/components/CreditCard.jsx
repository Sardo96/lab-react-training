import visa from '../assets/images/visa.png';


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const lastFourDigits = number.slice(-4);

    const cardStyle = {
      backgroundColor: bgColor,
      color: color,
      padding: '20px',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '300px',
      height: '180px',
      margin: '20px',
    };
  
    const cardTypeImage = {
      width: '50px',
      alignSelf: 'flex-end',
    };
  
    const cardNumberStyle = {
      fontSize: '18px',
      alignSelf: 'center',
    };
  
    const bankStyle = {
      fontSize: '14px',
      alignSelf: 'flex-end',
    };
  
    const expirationStyle = {
      fontSize: '14px',
    };
  
    const ownerStyle = {
      fontSize: '14px',
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      marginTop: '20px',
    };
  
    return (
      <div style={cardStyle}>
        <img
          style={cardTypeImage}
          src={type === 'Visa' ? visa : 'https://cdn.discordapp.com/attachments/1069723253016367184/1114557025641308190/mastercard.png'}
          alt={type}
        />
        <div style={cardNumberStyle}>
          <span>**** **** **** </span>
          {lastFourDigits}
        </div>
        <div style={expirationStyle}>
          <span>
            Expires {expirationMonth.toString().padStart(2, '0')}/
            {expirationYear.toString().slice(-2)}
          </span>
          <span style={bankStyle}> {bank}</span>
        </div>
        <div style={ownerStyle}>{owner}</div>
      </div>
    );
  }


export default CreditCard;

