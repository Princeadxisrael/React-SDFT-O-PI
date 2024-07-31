import "./Button.css";
//useState, useEffect, useContext, useRef, useMemo
function Button() {
  const handleClick = (e) => {
    alert("You click this button");
    console.log(e);
  };

  return (
    <button className="btn" onClick={handleClick}>
      Click me
    </button>
  );
}

export default Button;
