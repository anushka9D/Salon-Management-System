import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';

function User_update() {
  const [formData, setFormData] = useState({
    user_name: '',
    phone: '',
    gender: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8070/user/new_user_registor", formData);
      await axios.post("http://localhost:8070/user/new_user_registor", formData);

        Swal.fire({
          title: "User Registered Successfully!",
          text: "You clicked the button!",
          icon: "success"
        });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header/>
    <div className="user-upadet-container">
      <div className="profile-edit-container">
        <h2>Edit Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-update-form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="user-update-form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="user-update-form-group">
            <label htmlFor="email">Gender:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="user-update-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="user-update-form-group">
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="user-update-submit-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
);
};



export default User_update;
