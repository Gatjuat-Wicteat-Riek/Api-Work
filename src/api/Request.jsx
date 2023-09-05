import React, { useEffect, useState } from "react";
import Axios from "axios";

function Request() {
  const [data, setData] = useState("");

  const generateHandler = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setData(res.data.fact);
    });
  };
  useEffect(() => {
    generateHandler();
  }, []);

  return (
    <div>
      <button onClick={generateHandler}>Generate</button>
      <p>{data}</p>
    </div>
  );
}

export default Request;
