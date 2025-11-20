import "../files-folders.css";
import addFolderIcon from "#folder-icon";
import DetailsContainer from "#components/Details-container.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";

function FilesFolder() {
  const [blur, setBlur] = useState(false);
  const [folderName, setFolderName] = useState([]);


  // move the folder info when clicked

  return (
    <>
      {/* BLUR THE BACKGROUND */}
      <div className={`files-folders-container ${blur ? "blur" : ""}`}>
        <div className="selection-bar">
          {/* <div className="bar-group1">
            
            <div className="files-folders-button" onClick={() => setBlur(!blur)}>
              <img src={addFolderIcon} alt="" />
            </div>
          </div> */}
          <div className="files-folders-button" onClick={() => setBlur(!blur)}>
            <img src={addFolderIcon} alt="" width={35} height={35} />
          </div>

          <input type="text" className="search-bar" placeholder="Search..." />
          {/*   <button className="search-button">SEARCH</button> */}
        </div>
        <div className="rectangle-2 files-folders" id="rectangle-2">
          <div className="scroll-content-folders">
            {/* FETCH AND DISPLAY ALL THE FOLDERS */}
            {folderName.map((folderName, index) => (
              <div className="file-1" key={index}>
                <Link to="/Files-Folders/Topics" className="text-link">
                  <div className="file-1-title title">{folderName}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DetailsContainer blur={blur} setBlur={setBlur} folderName={folderName} setFolderName={setFolderName}/>
    </>
  );
}

export default FilesFolder;
