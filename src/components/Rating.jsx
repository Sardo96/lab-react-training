function Rating({ children }) {
    const rating = Math.round(children);
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    return <div>{stars}</div>;
    }

export default Rating;