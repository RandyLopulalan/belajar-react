import React from "react";
import ClassComponent from "./classComponent";
import FunctionalComponent from "./functionalComponent";

export default class Komponen extends React.Component{

    render(){
        return(
            <div>
                <ClassComponent nama="dodi perkoso"/>
                <FunctionalComponent/>
            </div>
        )
    }
}