import React from "react";
import { UseEffect, UseLayoutEffect, UseReducer, UseRef, UseState, ImperativeHandle } from "../../Materi/Hook";
import { ClassComponent, FunctionalComponent } from "../../Materi/Komponen";
import { InlineCss, ModuleCss, PlainCss, Sass } from "../../Materi/Styling";
import {Form} from "../../Materi/Form/index"
import {Router} from "../../Materi/Router/index"

const DisplayMateri = ({ materiSelect }) => {
  

  const dataList = [
    {
      id: "InlineCss",
      page: <InlineCss />,
    },
    {
      id: "ModuleCss",
      page: <ModuleCss />,
    },
    {
      id: "PlainCss",
      page: <PlainCss />,
    },
    {
      id: "Sass",
      page: <Sass />,
    },
    {
      id: "ClassComponent",
      page: <ClassComponent />,
    },
    {
      id: "FunctionalComponent",
      page: <FunctionalComponent />,
    },
    {
      id: "UseState",
      page: <UseState/>,
    },
    {
      id: "UseEffect",
      page: <UseEffect/>,
    },
    {
      id: "UseLayoutEffect",
      page: <UseLayoutEffect/>,
    },
    {
      id: "UseReducer",
      page: <UseReducer/>,
    },
    {
      id: "UseRef",
      page: <UseRef/>,
    },
    {
      id: "ImperativeHandle",
      page: <ImperativeHandle/>,
    },
    {
      id: "Form",
      page: <Form/>,
    },
    {
      id: "Router",
      page: <Router />,
    },
  ];

  let display = ""
  dataList.map((e) => e.id === materiSelect? display = e.page : e)
  
  // getData.filter(({list, materi}) => {
  //   const valid = list.indexOf(materiSelect) || materi.indexOf(materiSelect)
  //   display = valid ? valid : ""
  // })

  return (
    <div>
      {display}
    </div>
  );
};

export default DisplayMateri;
