import React, { useState } from "react";
import "./App.css";
import DisplayMateri from "./Component/Display-Materi/display-materi";
import ListMateri from "./Component/List-Materi/list-materi";

function App() {

  const [materiSelect, setMateriSelect] = useState("");

  return (

    <div className="App">
      {/*================= LIST MATERI ===============*/}
      <div className="list_materi">
        <h5>list materi</h5>
        <h2>course</h2>
        <ListMateri setMateriSelect={setMateriSelect}/>
      </div>

      {/*================= DISPLAY MATERI ===============*/}
      <div className="materi">
        <h5>display materi</h5>
        <h2>result</h2>
        <DisplayMateri materiSelect={materiSelect}/>
      </div>
    </div>
  );
}

export default App;
