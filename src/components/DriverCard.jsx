function DriverCard({ name, rating, img, car }) {
    const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));

    const driverCardStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#455EB5',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        width: '500px',
        height: '150px',
        margin: '20px',
        };

    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '15px',
      };

    return (
        <div className="driver-card" style={driverCardStyle}>
            <img src={img} alt={name} style={imgStyle}/>
            <div>
                <h2>{name}</h2>
                <h3>{stars}</h3>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;