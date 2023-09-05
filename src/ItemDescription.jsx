import React from "react";

function ItemDescription({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        <i>{description}</i>
      </p>
    </div>
  );
}

export default ItemDescription;
