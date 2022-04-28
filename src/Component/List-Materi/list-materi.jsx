import React from "react";
import "./list-materi.css"

const ListMateri = ({setMateriSelect}) => {

  const listMateri = [
    {
      id: 0,
      judul: "Styling",
      materi: ["ModuleCss", "PlainCss", "InlineCss", "Sass"],
    },
    {
      id: 1,
      judul: "Komponen",
      materi: ["ClassComponent", "FunctionalComponent"],
    },
    {
      id: 2,
      judul: "Hook",
      materi: ["UseState", "UseEffect", "UseReducer"],
    },
    {
      id: 3,
      judul: "Form",
      materi: ["Form", "Validation"],
    },
  ];

  return (
    <div className="list_materi-data">
      {listMateri.map(({ id, judul, materi }) => {
        return (
          <article key={id} className="list_materi-article">
            <div className="list_materi-judul">
              <h3>{judul}</h3>
            </div>
            <div className="list_materi-materi">
              {materi.map((list) => (
                <p  key={list} className="list_materi-nama" onClick={() => setMateriSelect((prev) => prev = list)}>{list}</p>))}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListMateri;
