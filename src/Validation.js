import React, { useState } from "react";
import "./Validation.css";

const Validation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };

    // Validation name field
    if (!formData.name) {
      updatedErrors.name = "Name is required";
      isValid = false;
    } else {
      updatedErrors.name = "";
    }

    // Validation email field
    if (!formData.email) {
      updatedErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      updatedErrors.email = "Invalid email address";
      isValid = false;
    } else {
      updatedErrors.email = "";
    }

    // Validation email Password
    if (!formData.password) {
      updatedErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      updatedErrors.password = "Password must be at least six characters long.";
      isValid = false;
    } else {
      updatedErrors.password = "";
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newSubmittedData = {
        ...formData,
      };
      setSubmittedData(newSubmittedData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="sty">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Validation;