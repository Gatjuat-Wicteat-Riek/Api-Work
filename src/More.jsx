import React from "react";
import "./App.css";

const myList = ["avocado", "blueberry", "strawberry", "apple", "orange"];

// component to generate listItems
function ListComponent(props) {
  // making the list without using key props
  const listItems = myList.map((item) => <li>{item}</li>);

  // returning the list
  return <ul>{listItems}</ul>;
}

// rendering the react app

export default ListComponent;
