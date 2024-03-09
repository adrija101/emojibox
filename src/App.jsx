import "./styles.css";
import React, { useState } from "react";

var heading = "Inside Out!";
var color = "white";

var emojiDictionary = {
  "😂": "Haha",
  "😅": "Ouch",
  "🙃": "Whut?",
  "😑": "Bleh",
  "😮": "OooOo",
  "💀": "Dead",
  "🤯": "Mind=Blown",
  "😇": "Angel",
  "👽": "E.T.",
  "👻": "Boo! It's a ghost!",
  "👍": "Well Done!",
  "👎": "Uh,No.",
  "🥺": "Pleaseeeee",
  "😶": "No words",
  "🤨": "I don't understand",
  "🤔": "Let me think",
  "🥰": "Loved",
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [userInput, setUserInput] = useState("");

  function emojiInputHandler(event) {
    var enteredEmoji = event.target.value;
    var meaning = emojiDictionary[enteredEmoji];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setUserInput(enteredEmoji);
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{heading}</h1>
      <input onChange={emojiInputHandler} />
      <h2> Meaning: {meaning}</h2>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map((emoji) => (
        <span key={emoji}>{emoji} </span>
      ))}
    </div>
  );
}
