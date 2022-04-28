import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("update");
      });
  }, []);
  return (
    <div>
      <p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.npmjs.com/package//axios"
          >
            Axios :
          </a>
        </p>
        <p>npm i axios</p>
        <br />
      <h3>Email : {data}</h3>
      <h3>{count}</h3>
      <button onClick={() => {setCount((prev) => prev + 1);}}>Increment</button>
    </div>
  );
}

export default UseEffect;
