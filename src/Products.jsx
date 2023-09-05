import React from "react";
import ItemDescription from "./ItemDescription";
import ClassItemDes from "./ClassItemDes";

function Products({ name, description, price }) {
  //destructing of the props instead of (props) in use it later as props.name
  return (
    <div>
      <ItemDescription name={name} description={description} />
      <h3>${price}</h3>
    </div>
  );
}

export default Products;
