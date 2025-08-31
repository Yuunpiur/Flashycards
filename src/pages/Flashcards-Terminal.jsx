import "../flashcards-terminal.css"

import addIcon from "../Pics/no-category/add-icon.svg"

function FlashCardTerminal() {

    return (
        <>
        

            <div className="flashcards-nav">
                <div className="add-card"><img src={addIcon} alt="" width="45px"/></div>
                <button className="save-button">SAVE</button>
            </div>

            <div class="Flashcards">
                <div className="scroll-content">
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                    <div className="card-container">
                        <input type="text" className="keyword"></input>
                        <textarea type="text" className="definition"></textarea>
                    </div>
                </div>
            </div>

        </>
    );

}


export default FlashCardTerminal;