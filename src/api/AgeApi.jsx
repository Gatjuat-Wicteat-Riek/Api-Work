import Axios from "axios";
import React, { useEffect, useState } from "react";

function AgeApi() {
  const [name, setName] = useState("");
  const [predictData, setPredictData] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then(
      (res) => setPredictData(res.data)
      //   console.log(res.data)
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="move">
      <input
        type="text"
        placeholder="Colombia..."
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <div className="move-button">
        <button onClick={fetchData}>Predict</button>
      </div>
      <div className="content">
        <h3>Name:{predictData?.name}</h3>
        <h3>Predicted Age:{predictData?.age}</h3>
        <h3>Count:{predictData?.count}</h3>
      </div>
    </div>
  );
}

export default AgeApi;
