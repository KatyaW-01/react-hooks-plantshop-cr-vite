import React from "react";

function NewPlantForm({formData, setFormData, setPlants}) {
  function handleChange(event) {
    const {name,value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData, [name]:value
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    const newPlant = {
      ...formData,
    }

    try {
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlant)
      });
      if (!response.ok) {
        throw new Error (`Error! Status: ${response.status}`)
      }
      const addedPlant = await response.json()
      setPlants(prevPlants => [...prevPlants, addedPlant]);
    } catch (error) {
      console.error("Error adding plant:", error)
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
