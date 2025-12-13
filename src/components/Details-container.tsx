import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import "../details-container.css";

function DetailsContainer(props: {
  blur: boolean;
  category: string;
  setBlur: Dispatch<SetStateAction<boolean>>;

  //folders props
  titles: string[];
  setTitle: Dispatch<SetStateAction<string[]>>;
  setTitleIsEmpty: Dispatch<SetStateAction<boolean>>;
}) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#HG8H54");
  const [isOpen, setIsOpen] = useState(false);
  const popUpColorPicker = useRef<HTMLDivElement | null>(null);
  // details container props

  const askFolder = () => {
    return text === "" || text === null ? "Unnamed Folder" : text;
  };
  const addFolder = () => {
    if (props.category === "folders") {
      props.setTitleIsEmpty(false); // * Folder is not empty anymore
      props.setTitle([...props.titles, askFolder()]);
    } else if (props.category === "topics") {
      props.setTitleIsEmpty(false); // * Topic is not empty anymore
      props.setTitle([...props.titles, askFolder()]);
    }
    setText("");
  };

  const handleColor = (event: string) => {
    setColor(event);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (popUpColorPicker.current && !popUpColorPicker.current.contains(event.target as HTMLFormElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);
  return (
    <div className="folder-info-container">
      {/* MOVE BOX UP WHEN BLUR */}
      <div className={`folder-info ${props.blur ? "move-up" : ""}`}>
        {/* TYPE THE NAME OF A FOLDER */}
        <input
          className="folder-name"
          placeholder={props.category === "folders" ? "Folder name.." : "Topic name.."}
          value={text}
          onChange={(e) => setText((e.target as HTMLInputElement).value)}
        ></input>
        <div className="options-container">
          <div className="colorpicker-title">Color Picker</div>
          <div className="colorpicker-parent">
            <div
              className={"color-picker-box"}
              style={{ backgroundColor: color }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {isOpen ? (
                <div className="pop-up-color-picker" ref={popUpColorPicker}>
                  <HexColorPicker color={color} onChange={handleColor} />
                </div>
              ) : null}
            </div>
            <div className="default-color1"></div>
            <div className="default-color2"></div>
            <div className="default-color3"></div>
            <div className="default-color4"></div>
            <div className="default-color5"></div>
          </div>
        </div>
        <div className="folder-nav-button">
          <div className="folder-exit-button" onClick={() => props.setBlur(false)}>
            EXIT
          </div>
          <div
            className="folder-save-button"
            onClick={() => {
              props.setBlur(false);
              addFolder();
            }}
          >
            SAVE
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsContainer;
