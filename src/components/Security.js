import React, {useState} from 'react';
import './Security.css';

function Security() {
  const [currentpw, setCurrentpw] = useState('');
  const [newpw, setNewpw] = useState('');
  const [verifypw, setVerifypw] = useState('');

  const Submitfunction = (event) => {
    event.preventDefault();
    alert("Current pw " +currentpw +" New pw "+newpw+ " Verify " + verifypw);
  }

  return (
    <div className="main">
            <div className="mainleft">
              <p>Security</p>
            </div>
            
              <form onSubmit={Submitfunction}>
                <div><label>Current Password</label></div>
                <div><input type="password" onChange={event => setCurrentpw(event.target.value)}/></div>
                
                <div><label>New Password</label></div>
                <div><input type="password" onChange={event => setNewpw(event.target.value)}/></div>
                
                <div><label>Verify Password</label></div>
                <div><input type="password" onChange={event => setVerifypw(event.target.value)}/></div>
                

                

                <div><input type="submit" value="Save Settings" className="btn"/></div>
              </form>
            
          </div>

);
}

export default Security;