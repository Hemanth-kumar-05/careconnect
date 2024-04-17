import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const validAccounts = [
  {
    email: "hemanthlaxvel@gmail.com",
    password: "123456"
  },
  {
    email: "22z225@psgtech.ac.in",
    password: "000111"
  }
];

const Login = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
    showPassword: false  // State to manage password visibility
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAccount(prevAccount => ({
      ...prevAccount,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setAccount(prevAccount => ({
      ...prevAccount,
      showPassword: !prevAccount.showPassword
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = account;

    if (email.trim() === '' || password.trim() === '') {
      alert("Fields cannot be empty");
      return;
    }

    const isValidAcc = validAccounts.some(acc => acc.email === email && acc.password === password);

    if (isValidAcc) {
      window.location.href = '/home';
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <section className="login" id="login">
      <div className='container'>
        <div className="image-container">
          <img src="../../assets/careconnect-logo.svg" alt="careconnect-logo" className="centered-image" />
        </div>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <h3>Login Page</h3>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              value={account.email}
              onChange={handleInputChange}
              className="box"
            />
            <div className="password-container">
              <input
                type={account.showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={account.password}
                onChange={handleInputChange}
                className="box"
              />
              <FontAwesomeIcon
                icon={account.showPassword ? faEye : faEyeSlash}
                onClick={togglePasswordVisibility}
                className="password-toggle"
              />
            </div>
            <input
              type="submit"
              value="Sign in"
              className="btn"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
