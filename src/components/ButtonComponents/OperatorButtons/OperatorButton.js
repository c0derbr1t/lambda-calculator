import React from "react";

const OperatorButton = ({operator}) => {
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
    <button className="operator">
      <span>{operator}</span>
    </button>
  );
};

export default OperatorButton;
