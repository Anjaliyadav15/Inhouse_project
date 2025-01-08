import React, { useState } from 'react';
import './signup.css';
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigateBack = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Form submitted', formData); // Moved inside handleSubmit
    
    axios.post('http://localhost:8000/api/v2/users/signup', { // Replace with actual API URL
      username : formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword : formData.confirmPassword

    })
    .then(result => console.log('signUp successful', result))
    .catch(err => console.error('signup error', err));
  };

  return (
    <div className="signup-container">
      <ShootingStars />
      <StarsBackground />
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="form-heading">VartaVibe</h1>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <button type="button" className="signup-button" onClick={navigateBack}>Back</button>
      </form>
    </div>
  );
};

export default SignUp;
