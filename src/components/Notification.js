import React, {useState} from 'react';
import './Notification.css';

function Notification() {
    const [on, setOnState] = useState(false);
  const toggle = () => setOnState(o => !o);

  const Submitfunction = (event) => {
    event.preventDefault();
     alert("Notificaions are now " +on);
  }

  return (
    <div className="main">
            <div className="mainleft">
              <p>Notifications</p>
            </div>
            
              <form onSubmit={Submitfunction} id='#form1'>
                <div><label>Email notifications</label></div>
                
                <div><button type='button' class={on ? 'on' : 'off'} on={on} onClick={toggle}><span class="pin"/></button></div>            

                <div><input type="submit" value="Save Settings" className="btn"/></div>
              </form>
            
          </div>

);
}

export default Notification;