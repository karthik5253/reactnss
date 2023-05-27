import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './home.css';
import img1 from  '../Images/PM.jpg';
import img2 from  '../Images/12.jpg';
import img3 from  '../Images/15.jpg';
import img4 from '../Images/Motto.jpg';
import nsslogo from '../Images/logo.jpeg';

const Home = () => {
  return (
    <>
    <div className='App'>
      <AliceCarousel autoPlay autoPlayInterval={2000}>
      <p><img src={img1} className='slidering'/></p>
      <p><img src={img2} className='slidering'/></p>
      <p><img src={img3} className='slidering'/></p>
      <p><img src={img4} className='slidering'/></p>
      </AliceCarousel>
   </div>
   <div className='dis1'>
        <h3>National Service Scheme (NSS)</h3>
        <p> <h5> The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities &programmes.The sole aim of the NSS is to provide hands on experience to young students in delivering community service. Since inception of the NSS in the year 1969, the number of students strength increased from 40,000 to over 3.8 million up to the end of March 2018 students in various universities, colleges  of higher
        </h5></p>  
        <p> <h5>learning have volunteered to take part in various community programmes.</h5></p>
  </div>
  <div className='dis2'>
        <h3>The NSS Badge Proud to Serve the Nation:</h3><br/>
        <img src={nsslogo} width="150" height="150" alt="Circle Image"/><br/><br/>
        <p> <h5><b>All the youth volunteers who opt to serve the nation through the NSS led community service wear the NSS badge with pride and a sense of responsibility towards helping needy.

        The Konark wheel in the NSS badge having 8 bars signifies the 24 hours of a the day, reminding the wearer to be ready for the service of the nation round the clock i.e. for 24 hours.

        Red colour in the badge signifies energy and spirit displayed by the NSS volunteers.

        The Blue colour signifies the cosmos of which the NSS is a tiny part, ready to contribute its share for the welfare of the mankind. </b> </h5></p>  
  </div>
  <div className='dis3'>
        <p > <h3>Major Activities </h3></p> <br/>
        <p> <h4><b>National Integration Camp (NIC) </b> </h4></p> 
        <p> <h5><b>The National Integration Camp (NIC) is organized every year and the duration of each camp is of 7 days with day-night boarding & lodging. These camps are held in different parts of the country. Each camp involves 200 NSS volunteers to undertake the scheduled activities.</b> </h5></p> 
        <p> <h3>Objectives of the National Integration Camp</h3></p>
        <p> <h5>Make the NSS volunteers aware of the following:
                Rich cultural diversity of India
                History of our diversified culture
                National pride through knowledge about India
                To integrate the nation through social service  </h5></p> <br/><br/><br/>
  </div>
</>
  );
}

export default Home;