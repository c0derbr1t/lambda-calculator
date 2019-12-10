import React from "react";

const NumberButton = ({number}) => {
  // const {numberButton} = props
  return (
    /* Display a button element rendering the data being passed down from the parent container on props */
    <button className="number">
      {number}
    </button>
  );
};

export default NumberButton;
