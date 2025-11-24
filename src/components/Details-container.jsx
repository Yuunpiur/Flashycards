import { useState } from "react";
import "../details-container.css";

function DetailsContainer({ blur, setBlur, folderName, setFolderName, category, setFolderIsEmpty, topics, setTopic, setTopicIsEmpty}) {
  const [text, setText] = useState("");

  const askFolder = () => {
    return text === "" || text === null ? "Unnamed Folder" : text;
  };
  const addFolder = () => {
    console.log("WORKING");
    if (category === "folders") {
      setFolderIsEmpty(false);
      setFolderName([...folderName, askFolder()]);
    } else if (category === "topics") {
      setTopicIsEmpty(false);
      setTopic([...topics, askFolder()]);
    }
    setText("");
  };
  return (
    <div className="folder-info-container">
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
    </div>
  );
}

export default DetailsContainer;
