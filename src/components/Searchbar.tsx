import "../searchbar.css";
import { Dispatch, SetStateAction } from "react";
import addFolderPath from "../Pics/nav-icons/add-folder-icon.png";
import addTopicPath from "../Pics/nav-icons/add-icon.svg";

type SearchBarProps = {
  category: string;
  setBlur: Dispatch<SetStateAction<boolean>>;
};

function Searchbar({ category, setBlur }: SearchBarProps) {
  console.log(category);
  return (
    <>
      <div className="files-folders-button" onClick={() => setBlur(true)}>
        <img src={category === "folder" ? addFolderPath : category === "topic" ? addTopicPath : ""} alt="" width={35} height={35} />
      </div>
      <input type="text" className="search-bar" placeholder="Search..." />
    </>
  );
}

export default Searchbar;
