import React from "react";
import './feedback.css';
import instagram from '../Images/instagram.png';
import fb from '../Images/fb.png';
import twitter from '../Images/twitter.png';

function FeedBack() {
  return (
    <>
          <div className="feedback-title">
            <h2 className="title1">Your feedback is valuable for us</h2><br/><br/>
            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualise customer directed convergence without revolutionary ROI.</p>
          </div>
       
       
            <h3 className="title1">
              <small>Find us on social networks</small>
            </h3>
            <div className="sm-logo">
            <button>
            <a  href="https://twitter.com/nss_sju?t=Min8W5Um4PHO6hd2ss-Qvw&s=08" target="_blank">
            <img src={twitter} width={40} height={40}/>
                </a>
              
            </button>
            <button className="sm-b"><a  href=" https://www.facebook.com/groups/216085148408611/?ref=share" target="_blank">
            <img src={fb} width={40} height={40}/></a>
            </button>
            
            <button className="sm-b">
            <a  href="https://instagram.com/n.s.s__sjub?igshid=YmMyMTA2M2Y=" target="_blank">
            <img src={instagram} width={40} height={40}/></a>
            </button>
           
            </div>
        
            <h3 className="title1">
              Or drop us a note<br/>
            </h3>
            <form className="feedback-contact">
                  <input type="text" className="feedback-form" placeholder="Name" id="name" name="name"></input><br/>
                  <input type="text" className="feedback-form" placeholder="Email" id="email" name="email"></input><br/>
                  <input type="text" className="feedback-form" placeholder="Subject" id="sub" name="sub"></input><br/>
              <textarea className="feedback-form" placeholder="Message" rows="7" id="text" name="text"></textarea><br/>
                  <button className="feedback-button" id="fd_btn" name="fd_btn">Send </button>  
            </form>
            <h3 className="title1">
              Or come and visit
            </h3><br/><br/><br/><br/><br/>
          
      
        </>
  
  );
}

export default FeedBack;
