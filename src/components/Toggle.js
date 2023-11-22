import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const color = isOn ? "red" : "white"

  return <button onClick={handleClick} style={{background:color}}>{isOn ? 'ON' : 'OFF'}</button>;

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

}



export default Toggle;
