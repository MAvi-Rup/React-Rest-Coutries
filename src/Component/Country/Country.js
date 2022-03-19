import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,population,name,flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="Country pic" srcset="" />
            <h2>Country Name : {name.common}</h2>
            <p>Country Population : {population}</p>
            <p>Country Area : {area}</p>
        </div>
    );
};

export default Country;