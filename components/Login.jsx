import React, { useState } from 'react';
import './Login.css';
import loglo from './assets/logo.jpeg';

const Login = ({ setActiveComponent }) => {
  const [formData, setFormData] = useState({
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
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Login successful!');
      // 🔁 Dashboard sahifasiga o‘tamiz
      setActiveComponent('Dashboard');
    }
  };

  return (
    <div className='Login'>
      <div className='log_contend'>
        <div className='lologin'>
          <img src={loglo} alt="logotip" />
          <h1>NiceAdmin</h1>
        </div>
        <div className='lotya'>
          <div className='locep'>
            <h2>Login to Your Account</h2>
            <p>Enter your username & password to login</p>
          </div>
          <form className='locanat' onSubmit={handleSubmit}>
            <ul>
              <li>
                <span>Username</span>
                <div className='loustx'>
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
            <div className='lotac'>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <strong>Create an account</strong></p>
          </form>
          <div className='dbbm'>
            <p>Designed by <strong>BootstrapMade</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
