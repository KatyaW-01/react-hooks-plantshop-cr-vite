import React from "react";
import { useState, useEffect } from 'react'
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState(null)

  useEffect(() => {
    loadPlantData()
  },[])

  async function loadPlantData() {
    try {
      const response = await fetch("http://localhost:6001/plants")
      const plantData = await response.json()
      setPlants(plantData)
    } catch(error) {
      console.log('Failed to load plant data', error)
    }
  }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
