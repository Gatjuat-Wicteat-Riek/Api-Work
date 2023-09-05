import React from "react";
const more = [
  {
    id: "1",
    name: "Colombia",
    age: "35",
    profession: "Software Developer",
  },
];

function MoreList(props) {
  const myMore = more.map((person) => <h1 key={myMore.id}>{myMore.age}</h1>);
  return (
    <div>
      <h2>{myMore.name}</h2>
    </div>
  );
}

export default MoreList;
