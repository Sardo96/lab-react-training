import { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['purple','blue','green','yellow','orange','red'];
    
    const handleButtonClick = () => {
        setLikes(likes + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyle} onClick={handleButtonClick}>
            {likes} Likes
        </button>
    );
}

export default LikeButton;