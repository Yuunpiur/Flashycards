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

          <div className="topics-container">
            <div className="scroll-content">
              <div className="all-topics">
                {/* FETCH AND DISPLAY ALL THE TOPICS */}
                {topics.map((topicName, index) => (
                  <Link to="/Files-Folders/Topics/Flashcards" className="topic" key={index}>
                    <div className="topic-name">{topicName}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOVE THE BOX UP WHEN BLUR */}
      <DetailsContainer blur={blur} setBlur={setBlur} topics={topics} setTopic={setTopic}/>
    </>
  );
}

export default TopicsFolder;
