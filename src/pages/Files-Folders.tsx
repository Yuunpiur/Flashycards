import "../files-folders.css";
import DetailsContainer from "#components/Details-container.jsx";
import Searchbar from "#components/Searchbar.jsx";
import folderIcon from "../Pics/no-category/empty-folder.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

function FilesFolder() {
  const [blur, setBlur] = useState(false);
  const [folderName, setFolderName] = useState<string[]>([]);
  const [folderIsEmpty, setFolderIsEmpty] = useState(folderName.length === 0);
  // move the folder info when clicked
  return (
    <>
      {/* BLUR THE BACKGROUND */}
      <div className={`files-folders-container ${blur ? "blur" : ""}`}>
        <div className="selection-bar">
          <Searchbar category={"folder"} setBlur={setBlur} />
        </div>
        <div className="rectangle-2 files-folders" id="rectangle-2">
          <div className="scroll-content-folders">
            {folderIsEmpty ? (
              <div className="message-folder-empty">
                <img src={folderIcon} alt="" width={190} height={190} />
                This page is empty, add some folders
              </div>
            ) : null}
            {/* FETCH AND DISPLAY ALL THE FOLDERS */}
            {folderName.map((folderName, index) => (
              <Link to="/Files-Folders/Topics" className="file-1 text-link" key={index}>
                <div className="folder-color"></div>
                <div className="folder-details-container">
                  <div className="file-1-title title">{folderName}</div>
                  {/* THIS IS TEMPORARY */}
                  <div className="total-topics-count">45 topics</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <DetailsContainer
        blur={blur}
        setBlur={setBlur}
        titles={folderName}
        setTitle={setFolderName}
        category={"folders"}
        setTitleIsEmpty={setFolderIsEmpty}
      />
    </>
  );
}

export default FilesFolder;
