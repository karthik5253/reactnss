import React from 'react';
import './events.css';
import event1 from '../Images/event1.png';
import event2 from '../Images/event2.png';
import event3 from '../Images/event3.png';

const Events = () => {
  return (
   <div>
    
  <section class="services">
      <div class="title">
        <h1><span>Latest Events </span></h1>
      </div>
      <div class="services_boxes">
        <div class="box">
          <img src={event1} width={250} height={200}></img>
          <h3>25th May, 2023</h3>
          <p>The objective of the National Youth Parliament Festival (NYPF) is to hear the voice of the youth, who will join various careers in coming years, including public services.</p>
          <div className="event-button">
            <button type="submit">Register</button>
          </div>
        </div>

        <div class="box">
        <img src={event3} width={250} height={200}></img>
        <h3>19th June, 2023</h3>
          <p>The Youth Parliament Program would be a debate between the best debaters, policymakers, and opinion-makers. The platform is meant to inspire the youth to express their views in an organized way.</p>
          <div className="event-button">
            <button type="submit">Register</button>
          </div>      
        </div>

        <div class="box">
        <img src={event2} width={250} height={200}></img>
        <h3>30th June, 2023</h3>
          <p>The 4th edition of National Youth Parliament Festival, 2023 was launched with the theme “Ideas for a Better tomorrow: India for the World”.</p>
          <div className="event-button">
            <button type="submit">Register</button>
          </div>       
        </div>
      
        
        
      </div>
  
  </section>

    </div> 
  );
}

export default Events;