import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="form_user">
        <label>
          UserName
          <input type="text" name="name" />
        </label>
      </div>
      <div className="form_user">
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="new-password current-passwword"
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
