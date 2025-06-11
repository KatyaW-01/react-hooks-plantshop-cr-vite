import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState(null)

  async function loadPlantData() {
    try {
      const response = await fetch("http://localhost:6001/plants")
      const plantData = await response.json()
    } catch(error) {
      console.log('Failed to load plant data', error)
    }
  }

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
