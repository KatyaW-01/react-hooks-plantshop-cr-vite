import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  if (!plants) return <p>Loading plants...</p>;
  return (
    <ul className="cards"> 
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))} 
    </ul>
  );
}

export default PlantList;
