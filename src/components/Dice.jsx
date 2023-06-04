import { useState } from "react";
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
    const [diceImage, setDiceImage] = useState(emptyDice);

    const handleDiceClick = () => {
        setDiceImage(emptyDice);
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            switch (randomNumber) {
                case 1:
                    setDiceImage(dice1);
                    break;
                case 2:
                    setDiceImage(dice2);
                    break;
                case 3:
                    setDiceImage(dice3);
                    break;
                case 4:
                    setDiceImage(dice4);
                    break;
                case 5:
                    setDiceImage(dice5);
                    break;
                case 6:
                    setDiceImage(dice6);
                    break;
                default:
                    setDiceImage(emptyDice);
            }
        }
        , 1000);
    };

    const diceStyle = {
        width: '200px',
        height: '200px',
    };

    return (
        <img
            src={diceImage}
            alt="Dice"
            onClick={handleDiceClick}
            style={diceStyle}
        />
    );
};

export default Dice;