import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  // const [numberButton, setNumberButton] = useState(props.button.value);

  return (
    /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
    <div className="buttonContainer numberButtons">
       {numbers.map((number) => <NumberButton number={number} />)}
    </div>
  );
};

export default Numbers;
