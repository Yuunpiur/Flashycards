import { useState } from "react";
import "../details-container.css";

function DetailsContainer({ blur, setBlur, folderName, setFolderName, category, setFolderIsEmpty }) {
  const [text, setText] = useState("");

  const askFolder = () => {
    // if the title is too long
    if (text.length > 17) {
      return text.slice(0, 14).concat("...");
    } else {
      return text === "" || text === null ? "Unnamed Folder" : text;
    }
  };
  const addFolder = () => {
    setFolderIsEmpty(false);
    setFolderName([...folderName, askFolder()]);
    setText("");
  };
  return (
    <>
      {/* MOVE BOX UP WHEN BLUR */}
      <div className={`folder-info ${blur ? "move-up" : ""}`}>
        {/* TYPE THE NAME OF A FOLDER */}
        <input
          className="folder-name"
          placeholder={category === "folders" ? "Folder name.." : "Topic name.."}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
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
