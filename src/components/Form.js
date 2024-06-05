import React, { useState } from 'react';
import './Form.css';

function Form({ addToMedicines }) {
  const [medicine, setMedicine] = useState({
    name: '',
    desc: '',
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMedicines(medicine);
    setMedicine({ name: '', desc: '', price: 0 });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Medicine Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Medicine Name"
            value={medicine.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Enter Description"
            value={medicine.desc}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            value={medicine.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
            <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
