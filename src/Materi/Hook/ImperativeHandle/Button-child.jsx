import React, { forwardRef, useImperativeHandle, useState } from "react";


//forwardRef alow us to transform functional component
//and alow it to accept referance from parent
export const Button = forwardRef((props,ref) => {
  const [toggle, setToggle] = useState(false);

  //need pass 2 things, 
  //first is props and ref from parent, 
  //second is function that return an object
  useImperativeHandle(ref, () => ({
    alterToggle() {
        setToggle(!toggle)
    }
  }))

  return (
    <>
      <button>Button From Child</button>
      {/* <button onClick={() => setToggle(!toggle)}>Button From Child</button> */}
      {toggle && <span>Toggle</span>}
    </>
  );
});
