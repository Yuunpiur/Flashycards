import { useState } from "react";
import "../flashcards-terminal.css"

import addIcon from "../Pics/no-category/add-icon.svg"



function FlashCardTerminal() {
    
    const [flashcards, setFlashcards] = useState([]);
    const addCard = () => { setFlashcards([...flashcards, ""])}

    return (
        <>
            <div className="flashcards-nav">
                <div className="add-card" onClick={addCard}><img src={addIcon} alt="" width="45px"/></div>
                <button className="save-button">SAVE</button>
            </div>

            <div class="Flashcards">
                <div className="scroll-content">

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