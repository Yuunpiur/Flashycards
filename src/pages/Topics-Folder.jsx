import "../topics-folder.css";
import addIcon from "../Pics/no-category/add-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailsContainer from "#components/Details-container.jsx";
import Searchbar from "#components/Searchbar.jsx";

function TopicsFolder() {
  const [topics, setTopic] = useState([]);
  const [blur, setBlur] = useState(false);


  return (
    <>
    {/* BLUR THE BACKGROUND */}
      <div className={`topics-folders-container ${blur ? "blur" : ""}`}>
        <div className="topic-folder-container">
          <div className="selection-bar">
            {/* SET BLUR */}
            <Searchbar icon={addIcon} blur={blur} setBlur={setBlur}/>
          </div>

    
            <div className="scroll-content-topics">
                {/* FETCH AND DISPLAY ALL THE TOPICS */}
                {topics.map((topicName, index) => (
                  <Link to="/Files-Folders/Topics/Flashcards" className="topic" key={index}>
                    <div className="topic-color"></div>
                    <div className="topic-name">{topicName}</div>
                  </Link>
                ))}
            </div>
          </div>
      </div>
      {/* MOVE THE BOX UP WHEN BLUR */}
      <DetailsContainer blur={blur} setBlur={setBlur} folderName={topics} setFolderName={setTopic} category={"topics"}/>
    </>
  );
}

export default TopicsFolder;
