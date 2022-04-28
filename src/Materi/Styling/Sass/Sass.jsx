import React from "react";
import "./Sass";

export default class BelajarSass extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/"
          >
            Sass :
          </a>
        </p>
        <p>npm uninstall node-sass</p>
        <p>npm install sass</p>
        <br />
        <h3>belajar Sass/Scss</h3>
        <button className="btn btn-info">Go Eduwork</button>
        <button className="btn btn-other">Hallo World</button>
      </div>
    );
  }
}
