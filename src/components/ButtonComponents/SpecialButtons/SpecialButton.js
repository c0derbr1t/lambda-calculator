import React from "react";

const SpecialButton = ({special}) => {
  {/* Display a button element rendering the data being passed down from the parent container on props */}
  return (
    <button className="special">
      {special}
    </button>
  );
};

export default SpecialButton;
