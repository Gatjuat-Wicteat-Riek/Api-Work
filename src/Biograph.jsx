import React from "react";
import ReactDOM from "react-dom";

// making a collection
const myList = ["100", "200", "300", "400", "500"];

// ListComponent to map through items and return list element
function ListComponent({ myList }) {
  const items = myList.map((item) => <li>{item}</li>);

  return <ul>{items}</ul>;
}

ReactDOM.render(
  <ListComponent myList={myList} />,
  document.getElementById("root")
);
export default ListComponent;
