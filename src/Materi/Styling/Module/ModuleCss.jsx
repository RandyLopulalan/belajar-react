import React from "react";
import style from "./Plain.module.css"

export default class ModuleCss extends React.Component{

    render(){
        return(

           <div>
               <h1>belajar module css</h1>
               <button className={style.btn}>Go Eduwork</button>
               <button className={`${style.btn} ${style.info}`}>Hallo World</button>
           </div> 
        )
    }
}