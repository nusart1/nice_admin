import React, { useState } from 'react';
import './Register.css';
import reglog from './assets/logo.jpeg';

const Register = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Account successfully created!');
      // ✅ Sahifani Dashboard ga o‘tkazamiz
      setActiveComponent('Dashboard');
    }
  };

  return (
    <div className='Register'>
      <div className='reg_content'>
        <div className='nalogo'>
          <img src={reglog} alt="logotip" />
          <h1>NiceAdmin</h1>
        </div>
        <div className='canat'>
          <div className='recep'>
            <h2>Create an Account</h2>
            <p>Enter your personal details to create account</p>
          </div>
          <form className='recanat' onSubmit={handleSubmit}>
            <ul>
              <li>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error-input' : ''}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </li>
              <li>
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error-input' : ''}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </li>
              <li>
                <span>Username</span>
                <div className='ustx'>
                  <button type="button">@</button>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? 'error-input' : ''}
                  />
                </div>
                {errors.username && <p className="error-text">{errors.username}</p>}
              </li>
              <li>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error-input' : ''}
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
              </li>
            </ul>
            <div className='itac'>
              <input type="checkbox" />
              <p>I agree and accept the <span>terms and conditions</span></p>
            </div>
            <button type="submit">Create Account</button>
            <p>Already have an account? <span>Log in</span></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
