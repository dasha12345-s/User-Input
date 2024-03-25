import { useState } from "react";

export function useInput(defaultValue, validationFn){
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didAdded, setDidAdded] = useState(false);

    const  valueIsValid = validationFn(enteredValue);
  
  function handleInputChange(event){
    setEnteredValue(event.target.value);
    setDidAdded(false);
  }

  function handleInputBlur(){
    setDidAdded(true);
  }
  
  return{
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didAdded && !valueIsValid
  };
 }
