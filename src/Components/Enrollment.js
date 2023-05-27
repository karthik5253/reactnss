import React from 'react';
import './enrollment.css';
import image from '../Images/header.png'

const Enrollment = () => {
  return (
    <>
    
    <div className='enroll-img'>
        <img src={image}></img>
    </div>
    <h1 className='en'>Fill the Application form!</h1>
    <div className='enroll-form'>
   <div className='enroll'>
        <h2>NSS Enrollment Form</h2>
  <form >
    <label for="name">Name:  </label>
    <input type="text" id="name" name="name" required/><br/><br/>

    <label for="email">Email:  </label>
    <input type="email" id="email" name="email" required/><br/><br/>

    <label for="phone">Phone:  </label>
    <input type="tel" id="phone" name="phone" required/><br/><br/>

    <label for="address">Address:  </label>
    <textarea id="address" name="address" rows="4" required></textarea><br/><br/>

    <label for="college">College/University:  </label>
    <input type="text" id="college" name="college" required/><br/><br/>
    <label for="department">Department:   </label>
    <select  >
											<option disabled selected >...Department...</option>
									
											
											<option value="3">B.A. (Hons) English</option>
											
											<option value="1064">B.A. (Hons) Mathematics</option>
											
											<option value="1036">B.A. (Hons) Philosophy</option>
											<option value="11">B.A. (Hons) Pol. Science</option>
											<option value="12">B.A. (Hons) Psychology</option>
											
											<option value="18">B.Sc (Hons) Mathematics</option>
											<option value="19">B.Sc (Hons) Physics</option>
											
											<option value="1028">B.Sc. Computer Application</option>
											
											<option value="1123">Bachelor Programme in Film Making</option>
											<option value="1124">Bachelor Programme in Journalism and Mass Communication</option>
											<option value="1026">BBA</option>
											
											
											<option value="1069">M.A-English</option>
										
											
										
											<option value="1065">M.A-Mathematics</option>
											
											<option value="1070">M.A-Philosophy</option>
											<option value="1051">M.A-Pol. Science</option>
											<option value="1056">M.A-Psychology</option>
											<option value="1119">M.A-Public Administration</option>
											
											<option value="1043">M.Sc-Mathematics</option>
											<option value="1044">M.Sc-Physics</option>
											
											<option value="1022">MBA</option>
											<option value="22">MCA</option>
											<option value="1023">MSc. Computer Science</option>

											<option value="1107">Ph.D in Computer Science</option>
											<option value="1099">Ph.D in Economics</option>
											<option value="1087">Ph.D in English</option>
											<option value="1105">Ph.D in Environmental Science</option>
											
											<option value="1095">Ph.D in Mathematics</option>
											
											

										</select><br/><br/>

    <label for="year">Year of Study:  </label>
    <input type="text" id="year" name="year" required/><br/><br/>
  </form>
  </div> 
  <div className='enroll-od'> 
        <h1>
            Other Details!
        </h1><br/><br/>
        <h4><b>Frequently Asked Questions</b></h4><br/>
      
        <h5 >
					    Have you ever been convicted by a criminal court and if so in which circumstances and what was the sentence ?
				</h5>
        <select >
								<option selected="selected" disabled="">...Select...</option>
								<option value="No">No</option>
								<option value="Yes">Yes</option>
				</select>

        <h5 >
	              Are you willing to be enrolled under National Service Scheme ?
			  </h5>

        <select>
									<option selected="selected" disabled="">.....Select.....</option>
									<option value="No">No</option>
									<option value="Yes">Yes</option>
				</select>

        <h5 >
					       Are you willing to undergo service training as specified in the Act and the rules made there under ?
       </h5>
        <select>
								<option selected="selected" disabled="">...Select...</option>
								<option value="No">No</option>
								<option value="Yes">Yes</option>
			 </select>
       
       <h5>
					       Are you willing to serve in the National Service Scheme ?
				</h5>
        <select >
									<option selected="selected" disabled="">...Select...</option>
									<option value="No">No</option>
									<option value="Yes">Yes</option>
				</select>

        <h5>
					        Have you ever previously applied for appointment?
				</h5>
        <select>
									<option selected="selected" disabled="">...Select...</option>
									<option value="No">No</option>
									<option value="Yes">Yes</option>
				</select>
                     
        <h5>
					          Have you ever been dismissed from the National Service Scheme?
				</h5>
        <select>
									<option selected="selected" disabled="">...Select...</option>
								  <option value="No">No</option>
									<option value="Yes">Yes</option>
				</select><br/><br/>
        <input className='enroll-but' type="submit" value="Submit"/>
        </div>
        </div>

    </>
  );
}

export default Enrollment;