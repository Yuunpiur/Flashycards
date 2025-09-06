import "../topics-folder.css";
import addIcon from "../Pics/no-category/add-icon.svg";
import { Link } from "react-router-dom";

import { useState } from "react";

function TopicsFolder() {
  const [topics, setTopic] = useState([]);
  const [blur, setBlur] = useState(false);
  const [text, setText] = useState("");

  function askTopic() {
    // const topicName = prompt("Enter Topic Name: "); ! REPLACE THIS USING BOX INPUT
    return text === "" || text === null
      ? "Unnamed Folder"
      : text;
  }

  const addTopic = () => {
    setTopic([...topics, askTopic()]);
    setText("");
  };

  return (
    <>
      <div className={`topics-folders-container ${blur? "blur":""}`}>
        <div className="topic-folder-container">
          <div className="topics-nav">
            <div className="add-topic" onClick={() => setBlur(!blur)}>
              <img src={addIcon} alt="" width="40px" />
            </div>
            <div className="search-container">
              <input
                className="search-bar"
                type="text"
                placeholder="Search.."
              />
              <button className="search-button">SEARCH</button>
            </div>
          </div>

          <div className="topics-container">
            <div className="scroll-content">
              <div className="all-topics">
                {topics.map((topicName, index) => (
                  <Link
                    to="/Files-Folders/Topics/Flashcards"
                    className="topic"
                    key={index}
                  >
                    <div className="topic-name">{topicName}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`topic-info ${blur? "move-up":""}`}>
        <input className="topic-name-input" placeholder="Topic name.."value={text} onChange={(e) => setText(e.target.value)}></input>
        <div className="topic-nav-button">
            <div className="topic-exit-button" onClick={() => setBlur(!blur)}>EXIT</div>
            <div className="topic-save-button" onClick={() => {setBlur(!blur); addTopic();}}>SAVE</div>
        </div>
      </div>
    </>
  );
}

export default TopicsFolder;
