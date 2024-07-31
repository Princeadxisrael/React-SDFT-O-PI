//A gallery that has two buttons labelled "next" and changes the display when the button are clicked
import { useState } from "react";
import { sculptureList } from "./Data";

const Gallery = () => {
  //   let index = 0; //local variable
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  //local variables do not persist[retained] across renders
  //changes to local variables will not trigger renders

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleClick}>next</button>
      <h2>
        <i>{sculpture.title}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1}) of {sculptureList.length}
      </h3>
      <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"}</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};

export default Gallery;
