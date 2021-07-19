import React, {useState} from 'react';
import './Account.css';

function Account() {
  const [email, setEmail] = useState('');
  const [phonenumber, setNumber] = useState('');
  const [code, setCode] = useState('');

  const Submitfunction = (event) => {
    event.preventDefault();
    alert("Hello " + email+"! Your number is "+code+phonenumber);
  }

  return (
    <div className="main">
            <div className="mainleft">
              <p>Account</p>
            </div>
            
              <form onSubmit={Submitfunction}>
                <div><label>Email</label></div>
                <div><input type="email" onChange={event => setEmail(event.target.value)}/></div>

                <div><label>Phone Number</label></div>
                <div id="contact">
                  <input  id="code" placeholder="+61" onChange={event => setCode(event.target.value)}/>
                  <input id="number" onChange={event => setNumber(event.target.value)}/>
                </div>

                <div><input type="submit" value="Save Settings" className="btn"/></div>
              </form>
            
          </div>

);
}

export default Account;