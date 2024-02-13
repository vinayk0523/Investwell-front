import React from 'react';
import '../../media/css/style.css';

import { Link } from 'react-router-dom'

const SignUpPage = ({name, email, password, setName, setEmail,setPassword, handleSignUp }) => {


  return (
    <div className="container">
      <div className="formContainer">
        <h2 className="heading">Sign Up</h2>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
          <div>
          <button className="switchButton" onClick={handleSignUp}>
            Sign Up
          </button>


         
          <Link to='/'><button className="switchButton">Login</button></Link>
          </div>


        </form>
        
      </div>
    </div>
  );
};

export default SignUpPage;




