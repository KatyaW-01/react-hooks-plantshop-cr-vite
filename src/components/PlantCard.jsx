import React from "react";
import { useState } from 'react'

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true)

  function handleToggleStock() {
    setInStock(prev => !prev)
  }

  return (
    <li className="card" data-testid="plant-item" >
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggleStock} >In Stock</button>
      ) : (
        <button onClick={handleToggleStock} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
