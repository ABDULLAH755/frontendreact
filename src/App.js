import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Account';
import Account from './components/Account';
import Security from './components/Security';
import Notification from './components/Notification';
import Profile from './components/Profile';
import Table from './components/Table';
import img1 from './images/image6.png';
import img2 from './images/image11.png';
import img3 from './images/image10.png';

function App() {
  return (
    <div className="App">
      
      <div className="navbar">
        <div className="navleft">
          <a href="#"><img src={img1} id="img1" alt={"img"}/> </a>
          <a id="app" href="/">Account</a>
          <a id="app" href="/Security">Security</a>
          <a id="app" href="/Notification">Notification</a>
          <a id="app" href="/Profile">Profile</a>
          <a id="app" href="/Table">Table</a>
        </div>
        <div className="navright">
          <a href="#"><img src={img2} id="img2" alt={"img"}/> </a>
          <a href="#"><img src={img3} id="img3" alt={"img"}/> </a>
        </div>
      </div>

      <Switch>
      <Route path='/' component={Account} exact/>
      <Route path='/Security' component={Security} />
      <Route path='/Notification' component={Notification} />
      <Route path='/Profile' component={Profile} />
      <Route path='/Table' component={Table} />
                
      </Switch>

      

    </div>
  );
}

export default App;
