import React from "react";
import { useState, useEffect } from 'react'
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [formData, setFormData] = useState({name: "", image: "", price: ""})
  const [allPlants, setAllPlants] = useState([])

  useEffect(() => {
    loadPlantData()
  },[])

  async function loadPlantData() {
    try {
      const response = await fetch("http://localhost:6001/plants")
      const plantData = await response.json()
      setPlants(plantData)
      setAllPlants(plantData)
    } catch(error) {
      console.log('Failed to load plant data', error)
    }
  }
  
  return (
    <main>
      <NewPlantForm formData={formData} setFormData={setFormData} setPlants={setPlants}/>
      <Search setPlants={setPlants} allPlants={allPlants}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
