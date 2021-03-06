import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    //using State
    const [countries,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
            <h1>Hello From Countries: {countries.length}</h1>
            <div className='countries-container'>
            {
                countries.map(country=><Country country={country} key={country.cca3}></Country>)
            }
            
            </div>

        </div>
    );
};

export default Countries;