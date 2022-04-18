import React from 'react';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-js-switch';
import Home from './Components/Pages';
import About from './Components/Pages/about';
import Events from './Components/Pages/events';
import AnnualReport from './Components/Pages/annual';
import Teams from './Components/Pages/team';
import Blogs from './Components/Pages/blogs';
import SignUp from './Components/Pages/signup';
import './App.css';

function App() {
  return (
    
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/events' component={Events} />
      <Route path='/annual' component={AnnualReport} />
      <Route path='/team' component={Teams} />
      <Route path='/blogs' component={Blogs} />
      <Route path='/sign-up' component={SignUp} />
      </Switch>
  </Router>
  );
}

export default App;
