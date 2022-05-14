import React, { useState } from "react";
import Validation from "../Validation/validation";
import "./form.css";

const Form = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [check, setCheck] = useState({
    lowercaseCheck : false,
    uppercaseCheck: false,
    numberCheck: false,
    charactereCheck: false,
    lengthCheck: false
  });
  const [data, setData] = useState([]);
  // const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validPassword.test(password)) return setValid(true)
    result(user, password)
    setUser("")
    setPassword("") 
  };

  const handleCheck = (e) => {
    const {value} = e.target
    const lowercaseCheck = /[a-z]/.test(value)
    const uppercaseCheck = /[A-Z]/.test(value)
    const numberCheck = /[0-9]/.test(value)
    const charactereCheck = /[!@#$%^&*]/.test(value)
    const lengthCheck = value.length >= 8
    setCheck({
      lowercaseCheck,uppercaseCheck,numberCheck,charactereCheck,lengthCheck
    })
  }
  const result = (user, password) => {
    const newResult = { id: 1, user: user, password: password };
    const listResult = [newResult]
    setData(listResult);
  };

  return (
    <div className="form_container">
      {/* ===================== Form ================== */}
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="form_user">
            <input
              type="text"
              name="name"
              value={user}
              onChange={(e) => setUser((prev) => (prev = e.target.value))}
              autoFocus
              required
            />
            <label>UserName</label>
          </div>
          <div className="form_user">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword((prev) => (prev = e.target.value))}
              onKeyUp={handleCheck}
              autoComplete="new-password current-passwword"
              autoFocus
              required
            />
            <label>Password</label>
            {valid && (<Validation 
            lowercaseValid={check.lowercaseCheck ? "valid" : "invalid"}
            uppercaseValid={check.uppercaseCheck ? "valid" : "invalid"}
            numberValid={check.numberCheck ? "valid" : "invalid"}
            characterValid={check.charactereCheck ? "valid" : "invalid"}
            lengthValid={check.lengthCheck ? "valid" : "invalid"}
            />)}
          </div>
          <button className="form_btn_submit" type='submit'>Login</button>
        </form>
      </div>
      {/* ===================== Form RESULT ================== */}
      <div className="result">
        {data.map(data => {
          return (
            <li key={data.id}>
              <h2>User List</h2>
              <h4>{`UserName : ${data.user}`}</h4>
              <h4>{`Password : ${data.password}`}</h4>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
