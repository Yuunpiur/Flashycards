import { Dispatch, SetStateAction, useState } from "react";
import "../details-container.css";

function DetailsContainer(props: {
  blur: boolean;
  category: string;
  setBlur: Dispatch<SetStateAction<boolean>>;

  //folders props
  titles: string[];
  setTitle: Dispatch<SetStateAction<string[]>>;
  setTitleIsEmpty: Dispatch<SetStateAction<boolean>>;
}) {
  const [text, setText] = useState("");
  // details container props

  const askFolder = () => {
    return text === "" || text === null ? "Unnamed Folder" : text;
  };
  const addFolder = () => {
    if (props.category === "folders") {
      props.setTitleIsEmpty(false); // * Folder is not empty anymore
      props.setTitle([...props.titles, askFolder()]);
    } else if (props.category === "topics") {
      props.setTitleIsEmpty(false); // * Topic is not empty anymore
      props.setTitle([...props.titles, askFolder()]);
    }
    setText("");
  };
  return (
    <div className="folder-info-container">
      {/* MOVE BOX UP WHEN BLUR */}
      <div className={`folder-info ${props.blur ? "move-up" : ""}`}>
        {/* TYPE THE NAME OF A FOLDER */}
        <input
          className="folder-name"
          placeholder={props.category === "folders" ? "Folder name.." : "Topic name.."}
          value={text}
          onChange={(e) => setText((e.target as HTMLInputElement).value)}
        ></input>
        <div className="folder-nav-button">
          <div className="folder-exit-button" onClick={() => props.setBlur(false)}>
            EXIT
          </div>
          <div
            className="folder-save-button"
            onClick={() => {
              props.setBlur(false);
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
