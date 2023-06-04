import { useState } from "react";

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };


    return (
        <div>
            <button onClick={handlePrevClick}>Prev</button>
            <img
                src={images[currentImageIndex]}
                alt="Carousel"
            />
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Carousel;