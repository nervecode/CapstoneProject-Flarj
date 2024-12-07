import React from "react";
import "../components/styles/ABC.css";

import soundA from "../assets/sounds/ABC/A.mp3"; // Replace with actual sounds
import soundB from "../assets/sounds/ABC/B.mp3";
import soundC from "../assets/sounds/ABC/C.mp3";
import soundD from "../assets/sounds/ABC/D.mp3";
import soundE from "../assets/sounds/ABC/E.mp3";
import soundF from "../assets/sounds/ABC/F.mp3";
import soundG from "../assets/sounds/ABC/G.mp3";
import soundH from "../assets/sounds/ABC/H.mp3";
import soundI from "../assets/sounds/ABC/I.mp3";
import soundJ from "../assets/sounds/ABC/J.mp3";
import soundK from "../assets/sounds/ABC/K.mp3";
import soundL from "../assets/sounds/ABC/L.mp3";
import soundM from "../assets/sounds/ABC/M.mp3";
import soundN from "../assets/sounds/ABC/N.mp3";
import soundO from "../assets/sounds/ABC/O.mp3";
import soundP from "../assets/sounds/ABC/P.mp3";
import soundQ from "../assets/sounds/ABC/Q.mp3";
import soundR from "../assets/sounds/ABC/R.mp3";
import soundS from "../assets/sounds/ABC/S.mp3";
import soundT from "../assets/sounds/ABC/T.mp3";
import soundU from "../assets/sounds/ABC/U.mp3";
import soundV from "../assets/sounds/ABC/V.mp3";
import soundW from "../assets/sounds/ABC/W.mp3";
import soundX from "../assets/sounds/ABC/X.mp3";
import soundY from "../assets/sounds/ABC/Y.mp3";
import soundZ from "../assets/sounds/ABC/Z.mp3";

const letters = [
  { id: "A", sound: soundA },
  { id: "B", sound: soundB },
  { id: "C", sound: soundC },
  { id: "D", sound: soundD },
  { id: "E", sound: soundE },
  { id: "F", sound: soundF },
  { id: "G", sound: soundG },
  { id: "H", sound: soundH },
  { id: "I", sound: soundI },
  { id: "J", sound: soundJ },
  { id: "K", sound: soundK },
  { id: "L", sound: soundL },
  { id: "M", sound: soundM },
  { id: "N", sound: soundN },
  { id: "O", sound: soundO },
  { id: "P", sound: soundP },
  { id: "Q", sound: soundQ },
  { id: "R", sound: soundR },
  { id: "S", sound: soundS },
  { id: "T", sound: soundT },
  { id: "U", sound: soundU },
  { id: "V", sound: soundV },
  { id: "W", sound: soundW },
  { id: "X", sound: soundX },
  { id: "Y", sound: soundY },
  { id: "Z", sound: soundZ },
  // Add more letters with sounds
];

const ABC = () => {
  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  return (
    <div className="abc-container">
      <h1>Alphabet Cards</h1>
      <div className="abc-cards">
        {letters.map((letter) => (
          <button
            key={letter.id}
            className="abc-card"
            onClick={() => playSound(letter.sound)}
          >
            {letter.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ABC;
