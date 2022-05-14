import React from "react";

const Validation = ({
  lowercaseValid,
  uppercaseValid,
  numberValid,
  characterValid,
  lengthValid,
}) => {
  return (
    <div className="validation">
      <h3>Password :</h3>
      <p className={lowercaseValid}>must contain lowercase letter</p>
      <p className={uppercaseValid}>must contain uppercase letter</p>
      <p className={numberValid}>must contain number</p>
      <p className={characterValid}>must contain special character</p>
      <p className={lengthValid}>must be eight characters or longer</p>
    </div>
  );
};

export default Validation;
