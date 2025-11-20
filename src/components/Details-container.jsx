import { useState } from "react";
import "../details-container.css";

function DetailsContainer({blur, setBlur, folderName, setFolderName}) {
  const [text, setText] = useState("");
  
  const askFolder = () => {
    // get the users folder name
    // const folderName = prompt("Enter Name subject");
    return text === "" || text === null ? "Unnamed Folder" : text;
  }
  const addFolder = () => {
    setFolderName([...folderName, askFolder()]);
    setText("");
  };
  return (
    <>
      {/* MOVE BOX UP WHEN BLUR */}
      <div className={`folder-info ${blur ? "move-up" : ""}`}>
        {/* TYPE THE NAME OF A FOLDER */}
        <input className="folder-name" placeholder="Folder name.." value={text} onChange={(e) => setText(e.target.value)}></input>
        <div className="folder-nav-button">
          <div className="folder-exit-button" onClick={() => setBlur(!blur)}>
            EXIT
          </div>
          <div
            className="folder-save-button"
            onClick={() => {
              setBlur(!blur);
              addFolder();
            }}
          >
            SAVE
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsContainer;
