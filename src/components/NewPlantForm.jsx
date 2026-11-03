import React, { useState } from "react";

const EMPTY_FORM = { name: "", image: "", price: "" };

function NewPlantForm({ onAddPlant, apiUrl }) {
  // Controlled form: one state object holding all three inputs
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Update the field whose input fired the event (matched by its name attribute)
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // POST the new plant to the backend, then add the saved plant to the page
  function handleSubmit(e) {
    e.preventDefault();

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        onAddPlant(newPlant);
        setFormData(EMPTY_FORM); // clear the form after a successful add
      })
      .catch((err) => console.error("Failed to add plant:", err));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
