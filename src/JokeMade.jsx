import React, { useEffect, useState } from "react";

function JokeMade() {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const generateJoke = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=Colombia&lastName=Riek`
      )
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value.joke);
        });
    generateJoke();
  }, []);
  return (
    <div>
      <h1>Generate a Jokes</h1>
      <h2>{joke}</h2>
      <button>Generate</button>
    </div>
  );
}

export default JokeMade;
