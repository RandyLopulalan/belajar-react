import React from "react";
import { UseEffect, UseReducer, UseState } from "../../Materi/Hook";
import { ClassComponent, FunctionalComponent } from "../../Materi/Komponen";
import { InlineCss, ModuleCss, PlainCss, Sass } from "../../Materi/Styling";
import {Form} from "../../Materi/Form/index"

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
      id: "UseReducer",
      page: <UseReducer/>,
    },
    {
      id: "Form",
      page: <Form/>,
    },
  ];

  let display = ""
  dataList.map((e) => e.id === materiSelect? display = e.page : e)

  return (
    <div>
      {display}
    </div>
  );
};

export default DisplayMateri;
