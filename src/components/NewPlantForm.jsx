import React from "react";

function NewPlantForm({formData, setFormData, setPlants}) {
  function handleChange(event) {
    const {name,value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData, [name]:value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("form data:",formData)
    const newPlant = {
      ...formData,
      id: Date.now()
    }

    setPlants(prevPlants => [...prevPlants, newPlant]);
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
