import React, { useState } from "react";

function CounterOneTwo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const ClickHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName}, ${lastName}`);
  };
  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>
      <button onClick={ClickHandler}>Summit</button>
    </div>
  );
}

export default CounterOneTwo;
