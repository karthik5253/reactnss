import React from 'react';
import './login.css'

const Login = () => {
  return (
    <div className='Login-bg'>
     <div className="Login-Page">
    <h2 className='Login-h2'>Welcome !</h2>
    <form>
      <div className="Login-form">
        <label for="username">EMail:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username"></input>
      </div>
      <div className="Login-form">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password"></input>
      </div>
      <div className="Login-form">
        <button type="submit">Login</button>
      </div>
      <div className="Login-forget">
        <a href='#'>Forget Password?</a>
      </div>
      
    </form>
    
  </div>
    
  </div>
  );
}

export default Login;