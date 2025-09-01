import "../topics-folder.css";
import addIcon from "../Pics/no-category/add-icon.svg";
import { Link } from "react-router-dom";

import { useState } from "react";


function TopicsFolder() {

    const [topics, setTopic] = useState([]);

    function askTopic(){ 
        const topicName = prompt("Enter Topic Name: ");
        return (topicName == "")? "Unnamed Folder": topicName;
    }

    const addTopic = () => {setTopic([...topics, askTopic()])};

    return (
        <>
            <div className="topics-nav">
                <div className="add-topic" onClick={addTopic}>
                    <img src={addIcon} alt="" width="40px" />
                </div>
                <div className="search-container">
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <button className="search-button">SEARCH</button>
                </div>
            </div>

            <div className="topics-container">
                <div className="scroll-content">
                    <div className="all-topics">
                   {topics.map((topicName, index) => (
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic" key={index}>
                        <div className="topic-name">{topicName}</div>
                    </Link>))}
</div>
                </div>
            </div>
        </>
    );
}

export default TopicsFolder;
