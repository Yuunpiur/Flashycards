import "../topics-folder.css";
import addIcon from "../Pics/no-category/add-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailsContainer from "#components/Details-container.jsx";
import Searchbar from "#components/Searchbar.jsx";
import emptyTopics from "../Pics/no-category/empty-topics.svg";

function TopicsFolder() {
  const [topics, setTopic] = useState([]);
  const [blur, setBlur] = useState(false);
  const [topicIsEmpty, setTopicIsEmpty] = useState(topics.length === 0);

  return (
    <>
      {/* BLUR THE BACKGROUND */}
      <div className={`topics-folders-container ${blur ? "blur" : ""}`}>
        <div className="topic-folder-container">
          <div className="selection-bar">
            {/* SET BLUR */}
            <Searchbar icon={addIcon} blur={blur} setBlur={setBlur} />
          </div>

          <div className="scroll-content-topics">
            {/* FETCH AND DISPLAY ALL THE TOPICS */}
            {topicIsEmpty? <div className="empty-topic-message-container">
              <img className="empty-topic-message" src={emptyTopics} alt="" width={190} height={190}/>
              This page is empty, add some topics
            </div>: null}
            {topics.map((topicName, index) => (
              <Link to="/Files-Folders/Topics/Flashcards" className="topic" key={index}>
                <div className="topic-color"></div>
                <div className="topics-details-container">
                  <div className="topic-name">{topicName}</div>
                  <div className="total-flashcards-count">45 flashcards</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* MOVE THE BOX UP WHEN BLUR */}
      <DetailsContainer blur={blur} setBlur={setBlur} topics={topics} setTopic={setTopic} category={"topics"} setTopicIsEmpty={setTopicIsEmpty} />
    </>
  );
}

export default TopicsFolder;
