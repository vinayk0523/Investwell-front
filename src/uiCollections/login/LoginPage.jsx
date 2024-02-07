import React from 'react';
import '../../media/css/style.css';
import {Link } from 'react-router-dom'

const LoginPage = ({email, password, setEmail, setPassword, handleLogin}) => {


  return (
    <div className="container">
      <div className="formContainer">
        <h2 className="heading">Login</h2>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


        </form>
        <div>          <button className="switchButton" onClick={handleLogin}>
            Login
          </button></div>

          <div class="newUserBtn">
          <Link to='/signup'><button className="switchButton">New User?</button></Link>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;










