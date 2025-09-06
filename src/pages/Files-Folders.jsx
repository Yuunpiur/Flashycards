import "../files-folders.css";
import addFolderIcon from "../Pics/nav-icons/add-folder-icon.png";

import { Link } from "react-router-dom";
import { useState } from "react";

function FilesFolder() {
  const [blur, setBlur] = useState(false);
  const [text, setText] = useState("");
  const [folderName, setFolderName] = useState([]);

  

  const addFolder = () => {
    setFolderName([...folderName, askFolder()]);
    setText("");
   
  };
  function askFolder() {
    // get the users folder name
    // const folderName = prompt("Enter Name subject");  
    return text === "" || text === null
      ? "Unnamed Folder"
      : text;
  }

  // move the folder info when clicked

  return (
    <>
      <div className={`files-folders-container ${blur? "blur" : ""}`}>
        <div className="selection-bar">
          <div className="bar-group1">
            <div className="files-folders-button" onClick={() => setBlur(!blur)}>
              <img src={addFolderIcon} alt="" />
            </div>
          </div>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search..." />
            <button className="search-button">SEARCH</button>
          </div>
          {/* <d class="bar-group2">
      <div class="add-folder">F</div>
      <div class="add-flashcard">F</div>
      <div class="view-type">
          <!-- ! Folder type or list type */}
        </div>
        {/* buttons for flashcards etc... */}
        <div className="rectangle-2 files-folders" id="rectangle-2">
          <div className="scroll-content">
            <div className="all-files">
              {folderName.map((folderName, index) => (
                <div className="file-1" key={index}>
                  <Link to="/Files-Folders/Topics" className="text-link">
                    <div className="file-1-title title">{folderName}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`folder-info ${blur? "move-up" : ""}`}>
        <input className="folder-name" placeholder="Folder name.." value={text} onChange={(e) => setText(e.target.value)}></input>
        <div className="folder-nav-button">
            <div className="folder-exit-button"  onClick={() => setBlur(!blur)} >EXIT</div>
            <div className="folder-save-button" onClick={() => {setBlur(!blur);
             addFolder();
                 }}>SAVE</div>
        </div>
      </div>
    </>
  );
}

export default FilesFolder;
