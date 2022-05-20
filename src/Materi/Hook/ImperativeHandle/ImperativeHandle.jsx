import React, { useRef } from "react";
import { Button } from "./Button-child";


//imperative hook can allow you to change state of the child
//when there is situation where you want to keep the state inside child
//but you still want to alter the actual component and call state from the outsite
export const ImperativeHandle = () => {


  //for reference dom element
  //but we can use to reference actual component
  //and call function inside child conponenet
  const buttonRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        width: "10rem",
      }}
    >
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button Form Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};
