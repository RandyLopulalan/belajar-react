import React, { useRef, useState } from "react";

//for reference dom element
export const UseRef = () => {
  const [name, setName] = useState("Nama");

  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();

    // chnage state name to inputRef
    setName(inputRef.current.value);

    // chnage state name to inputRef but its realtime/actual state
    // after that state name set to "" so this will display ""/nothing
    // setName(prev => prev = inputRef.current.value)

    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};
