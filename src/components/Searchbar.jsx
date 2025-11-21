import "../searchbar.css";

function Searchbar({ icon, blur, setBlur }) {
  return (
    <>
      <div className="files-folders-button" onClick={() => setBlur(!blur)}>
        <img src={icon} alt="" width={35} height={35} />
      </div>
      <input type="text" className="search-bar" placeholder="Search..." />
    </>
  );
}

export default Searchbar;
