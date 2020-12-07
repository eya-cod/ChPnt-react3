import React from "react";

const user = {
    FirstName: 'Eya',
    LastName: 'Sahli',
      }


const FullName =() =>{
    const myStyle = {
        color: 'gray',
        };



    return(

        <div>
        <label className="FirstName-label">First name</label>
        <h3 style={myStyle}>{user.FirstName}</h3>
        <label className="LastName-label">Last name</label>
        <h3 style={myStyle}>{user.LastName}</h3>   
        </div>

    ) ;

};



export default  FullName