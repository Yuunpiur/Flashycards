import "../files-folders.css";
import addFolderIcon from "../Pics/nav-icons/add-folder-icon.png";

import { Link } from "react-router-dom";

function FilesFolder() {
    return (
        <>
            <div className="selection-bar">
                <div className="bar-group1">
                    <div className="files-folders-button">
                        <img src={addFolderIcon} alt=""/>
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
                        <div className="file-1">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-1-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                        <div className="file-2">
                            <Link to="/Files-Folders/Topics" className="text-link">
                                <div className="file-2-title title">
                                    ZGE 1105: Art Appreciation
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default FilesFolder;
