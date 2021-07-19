import React, {useState} from 'react';
import './Table.css';

function Table() {
    const Users = [
        {
          id: '01',
          name: 'Mario Rossi',
          service: 'Student Visa',
          date: '11/12/21',
          price: '$200'
        },
        {
            id: '02',
            name: 'Mario Rossi',
            service: 'Student Visa',
            date: '11/12/21',
            price: '$200'
          },

          {
            id: '03',
            name: 'Mario Rossi',
            service: 'Student Visa',
            date: '11/12/21',
            price: '$200'
          },
      ];

  return (
    <div className="main1">  
        <div className="head1">Manage Applications</div>
        <div className="detailsbox">       
            <ul>
                <li className="headinglists">
                    <p className="headinglist">User</p>
                    <p className="headinglist">Service</p>
                    <p className="headinglist">Date</p>
                    <p className="headinglist">Price</p>
                </li>
            {Users.map((data) => (
                <li key={data.id} className="list"> 
                <p>{data.name}</p>
                <p>{data.service}</p>
                <p>{data.date}</p>
                <p>{data.price}</p>
                
                </li>
            )
            )}
            </ul>
        </div> 
      </div>

);
}

export default Table;