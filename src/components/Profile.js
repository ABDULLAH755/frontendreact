import React, {useState} from 'react';
import './Profile.css';
import img4 from '../images/Rectangle41.png';

function Profile() {
  
  return (
    <div className="main">
            <div className="mainleft">
              <p>Profile</p>
            </div>
            
            <div className="mainright">
                <a href="#"><img src={img4} id="img4" alt={"img"}/> </a> 

                <div><label className='lbl'>Mario</label> <a id="editlink" href="#">Edit First Name</a> </div>
                
                <div><label className='lbl'>Rossi</label><a id="editlink" href="#">Edit Last Name</a></div>
                
                <div><label className='lbl'>Italian</label><a id="editlink" href="#">Edit Nationality</a></div>
            </div>   
            
          </div>

);
}

export default Profile;