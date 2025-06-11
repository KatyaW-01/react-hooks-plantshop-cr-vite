import React from "react";
import { useState } from 'react'

function Search({setPlants, allPlants}) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleChange(event) {
    const value = event.target.value
    setSearchTerm(value)

    if(value.trim() === "") {
      setPlants(allPlants)
    } else {
      const filteredPlants = allPlants.filter((plant) => {
        return plant.name.toLowerCase().includes(value.toLowerCase())
      })

      setPlants(filteredPlants)
    }
    
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
