import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Signup() {

  const [user_name, setusername] = useState("");
  const [user_phone, setphone] = useState("");
  const [user_gender, setgender] = useState("");
  const [user_email, setemail] = useState("");
  const [user_password, setpassword] = useState("");

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

      const formData = {
        user_name,
        user_phone,
        user_gender,
        user_email,
        user_password,
      };
      const formDataLogin = {
        user_email,
        user_password,
        userrole: 'user',
      };

    try {
      await axios.post("http://localhost:8070/user/new_user_registor", formData).then(() => {
        axios.post("http://localhost:8070/login/add_login_registor_new_user", formDataLogin)
       }).then(() => {
        Swal.fire({
          title: "User Registered Successfully!",
          text: "You can now log in with your credentials.",
          icon: "success",
        });
       })
       
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Cannot Register this email",
        text: "Please Enter a different email!"
      });
      console.error(err);
      setError('There was an issue with the registration. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e)=>{ setusername(e.target.value);}}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e)=>{ setphone(e.target.value);}}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={(e)=>{ setgender(e.target.value);}}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=>{ setemail(e.target.value);}}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=>{ setpassword(e.target.value);}}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Signup;