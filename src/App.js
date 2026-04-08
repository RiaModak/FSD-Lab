import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. STATES: These "remember" what the user types
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // 2. LOGIC: Handles the typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false); // Reset success message if they start typing again
  };

  // 3. LOGIC: Handles the "Submit" click
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Check for Empty Blocks
    if (!formData.name) newErrors.name = "Empty Block!";
    if (!formData.course) newErrors.course = "Empty Block!";
    
    // Check for Wrong Email Format
    const emailPattern = /\S+@\S+\.\S+/;
    if (!formData.email) {
      newErrors.email = "Empty Block!";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Wrong Email Format!";
    }

    setErrors(newErrors);

    // If no errors, show success message
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      console.log("Data Submitted:", formData);
    }
  };

  return (
    <div className="form-container">
      <h2>Student Data Form</h2>
      
      {success && <div className="success">Submission Successful! </div>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" name="name" 
          className={errors.name ? 'error-border' : ''} 
          onChange={handleChange} 
        />
        {errors.name && <small className="error-text">{errors.name}</small>}

        <br /><br />

        <label>Email:</label>
        <input 
          type="text" name="email" 
          className={errors.email ? 'error-border' : ''} 
          onChange={handleChange} 
        />
        {errors.email && <small className="error-text">{errors.email}</small>}

        <br /><br />

        <label>Course:</label>
        <input 
          type="text" name="course" 
          className={errors.course ? 'error-border' : ''} 
          onChange={handleChange} 
        />
        {errors.course && <small className="error-text">{errors.course}</small>}

        <br /><br />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;