import React, { useState } from 'react';
import '../signUp/signup.css';
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Correct placement

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v2/users/login', { 
      username: formData.username,
      password: formData.password,
    })
    .then(result => {
      console.log('Signin successful', result);
      if (result.data.success === true) {
        navigate('/home'); // Redirect to home on success
      }
    })
    .catch(err => {
      console.error('Signin error', err);
      if (err.response && err.response.data) {
        alert(`Error: ${err.response.data.message}`);
      } else {
        alert('An unexpected error occurred.');
      }
    });
  };

  const navigateBack = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="form-heading">VartaVibe</h1>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Log In</button>
        <button type="button" className="signup-button" onClick={navigateBack}>Back</button>
      </form>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default SignIn;
