import React from "react";
import "../components/styles/Numbers.css";
import sound1 from "../assets/sounds/Numbers/1.mp3"; // Replace with actual sounds
import sound2 from "../assets/sounds/Numbers/2.mp3";
import sound3 from "../assets/sounds/Numbers/3.mp3";
import sound4 from "../assets/sounds/Numbers/4.mp3";
import sound5 from "../assets/sounds/Numbers/5.mp3";
import sound6 from "../assets/sounds/Numbers/6.mp3";
import sound7 from "../assets/sounds/Numbers/7.mp3";
import sound8 from "../assets/sounds/Numbers/8.mp3";
import sound9 from "../assets/sounds/Numbers/9.mp3";
import sound10 from "../assets/sounds/Numbers/10.mp3";

const numbers = [
  { id: "1", sound: sound1 },
  { id: "2", sound: sound2 },
  { id: "3", sound: sound3 },
  { id: "4", sound: sound4 },
  { id: "5", sound: sound5 },
  { id: "6", sound: sound6 },
  { id: "7", sound: sound7 },
  { id: "8", sound: sound8 },
  { id: "9", sound: sound9 },
  { id: "10", sound: sound10 },
];

const Numbers = () => {
  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  return (
    <div className="numbers-container">
      <h1>Number Cards</h1>
      <div className="numbers-cards">
        {numbers.map((number) => (
          <button
            key={number.id}
            className="number-card"
            onClick={() => playSound(number.sound)}
          >
            {number.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
