import React from "react";
import Inline from "./inline";
import "./plain.css"

export default class Plain extends React.Component{

    //inline css dalam class jika kesulitan nama
    text = {
        color: "red",
        fontSize: "48px"
    }

    render(){
        return(
            // style css className btn dari <Inline /> 
            // akan di ambil dari plain.jsx yg import "./Plain.css"
           <div>
               <Inline/>
               <h1 style={this.text}>belajar plain css</h1>
               <button className="btn btn-info">Go Eduwork</button>
               <button className="btn btn-other">Hallo World</button>
           </div> 
        )
    }
}