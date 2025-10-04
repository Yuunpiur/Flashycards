import { useState } from "react";
import "../flashcards-terminal.css";

import plusIcon from "../Pics/no-category/add-icon.svg";

function FlashCardTerminal() {
  const [flashcards, setFlashcards] = useState([]);
  const [count, setCount] = useState(0);

  const addCard = () => {
    setFlashcards([...flashcards, ""]);
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="flashcards-nav">
        <div
          className="add-card"
          onClick={() => {
            addCard();
            incrementCounter();
          }}
        >
          <img src={plusIcon} alt="" width="45px" />
        </div>
        <div className="flashcards-counter">{`Flashcards: ${count}`}</div>
        <button className="save-button">SAVE</button>
      </div>

      <div class="Flashcards">
        <div className="scroll-content">
          {/* FETCH AND DISPLAY ALL THE CARDS */}
          {flashcards.map((index) => (
            <div className="card-container" key={index}>
              <input type="text" className="keyword"></input>
              <textarea type="text" className="definition"></textarea>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlashCardTerminal;
