import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState);
  // console.log(useState("Hello Hooks"));
  const [text, setText] = useState("Random Text");
  const [bool, setBool] = useState(true);
  const dict = { true: 1, false: 0 };
  const handleClick = () => {
    setBool(!bool);
    if (text === "Random Title") {
      setText("New Title");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>
        {dict[bool]}. {text}
      </h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
