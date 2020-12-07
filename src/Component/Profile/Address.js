import React  from "react";


const home = {
    City: 'Boumhal',
    Street: '23 rue Environnement',
        };



const Address  =()=>{


    return (

<div className="add">
    <h2>{home.City}</h2>
    <h2>{home.Street}</h2>
</div>

    )

};



export default Address;