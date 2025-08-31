import "../topics-folder.css";
import addIcon from "../Pics/no-category/add-icon.svg";
import { Link } from "react-router-dom";
function TopicsFolder() {
    return (
        <>
            <div className="topics-nav">
                <div className="add-topic">
                    <img src={addIcon} alt="" width="40px" />
                </div>
                <div className="search-container">
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <button className="search-button">SEARCH</button>
                </div>
            </div>

            <div className="topics-container">
                <div className="scroll-content">
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                    <Link to="/Files-Folders/Topics/Flashcards" className="topic">

                        <div className="topic-name">CIM: Linked List</div>

                    </Link>
                </div>
            </div>
        </>
    );
}

export default TopicsFolder;
