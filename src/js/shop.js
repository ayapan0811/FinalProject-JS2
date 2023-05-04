import React, { useState, useEffect } from "react";
function Item(props) {

  return (
    <figure>
      <img src={props.img} alt={props.name}/>
      <figcaption>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
      </figcaption>
    </figure>
  );
}
function Shop() {

  const [localProductList, setProductList] = useState([]);

  useEffect(function(){
    fetch("http://localhost:5500/product-api")
    .then((response) => response.json())
    .then(setProductList)
  }, []);

  return (
    <div>
      {localProductList.map((item) => (
        <Item 
          name={item.name}
          img={item.img}
          description={item.description}
          price={item.price}
          key={item.id}
        />
      ))}
    </div>
  );
  }
  
  export default Shop;
