import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Enrollment from './Components/Enrollment';
import Events from './Components/Events';
import FeedBack from './Components/Feedback';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <div >
      <BrowserRouter>
      < Navbar/>
      <Switch>
      <Route path="/" exact component ={Home} />
      <Route path="/Enrollment" exact component ={Enrollment} />
      <Route path="/Events" exact component ={Events} />
      <Route path="/About" exact component ={About} />
      <Route path="/Feedback" exact component ={FeedBack} />
      <Route path="/Login" exact component ={Login} />
      <Route path="/Signup" exact component ={Signup} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
