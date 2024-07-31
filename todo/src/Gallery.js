//Improve the app by doing the following:

// When you press “Next” on the last sculpture,
// the code crashes. Fix the logic to prevent the crash.
// You may do this by adding extra logic to event handler or by disabling
// the button when the action is not possible.

// // After fixing the crash, add a “Previous” button that shows the
// previous sculpture. It shouldn’t crash on the first sculpture.

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
