import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || "john doe"}</h1>
      {/* {text && <h1>hello world</h1>}
      {!text && <h1>hi there</h1>} */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {isError && <h3>Error...</h3>} */}
      {isError ? <p>There's an error</p> : <p>There's no error</p>}
    </>
  );
};

export default ShortCircuit;
