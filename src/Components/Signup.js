import React from 'react';
import './Signup.css'

const Signup = () => {
  return (
    <div className='Signup-bg'>
     <div className="Signup-Page">
    <h2 className='Signup-h2'>Create an account</h2>
    <form>
      <input type="text" className="Signup-form" placeholder="First Name" id="fname" name="fname"/>
      <input type="text" className="Signup-form" placeholder="Last Name" id="lname" name="lname"/><br/>
      <select className="Signup-form" id="gender" name="gender">
                    <option disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select><br/>
      <input type="text" className="Signup-form" placeholder="Phone" id="phone" name="phone"/>
      <input type="date" className="Signup-form" placeholder="DOB" id="dob" name="dob"/>
      <input type="text" className="Signup-form" placeholder="Email" id="email" name="email"/>
      <input type="password" className="Signup-form" placeholder="Password" id="password" name="password"/>
      <input type="password" className="Signup-form" placeholder="Confirm Password" id="cpassword" name="cpassword"/><br/>
      <button className="Signup-formb" type="button" name="submit" id="submit">Register</button>
             
    </form>
  </div>
  
  </div>
  );
}

export default Signup;