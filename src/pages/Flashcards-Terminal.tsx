import { useState, FormEvent } from "react";
import "../flashcards-terminal.css";

function FlashCardTerminal() {
  const [flashcards, setFlashcards] = useState<string[][]>([]);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const saveCardtoDB = () => {};

  const addCard = (front: string, back: string) => {
    setFlashcards([[front, back], ...flashcards]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // event.target.elements[0].value;
    // event.target.elements[1].value;
    addCard(front, back);
  };

  return (
    <>
      <form className="parent-container-flashcards" onSubmit={handleSubmit}>
        <div className="flashcards-container">
          <textarea
            placeholder="Enter the front"
            className="front"
            onChange={(e) => {
              setFront(e.target.value);
            }}
          ></textarea>
          <div className="divider"></div>
          <textarea
            placeholder="Enter the back"
            className="back"
            onChange={(e) => {
              setBack(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="save-settings">
          <button className="vacant1"></button>

          <button className="add-flashcard-btn">Save</button>
        </div>

        <div className="recent-flashcard-tag">Recent flashcards</div>
        <div className="flashcards"></div>
        {flashcards.map((flashcards, index) => (
          <div className="saved-flashcards" key={index}>
            <div className="saved-front">{flashcards[0]}</div>
            <div className="divider"></div>
            <div className="saved-back">{flashcards[1]}</div>
          </div>
        ))}
      </form>
    </>
  );
}

export default FlashCardTerminal;
