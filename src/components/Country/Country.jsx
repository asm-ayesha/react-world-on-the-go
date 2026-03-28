import React from 'react';
import './country.css'
import { useState } from 'react';

const Country = ({country, handelVisitedCountries}) => {
    const [visited, setVisited] = useState(false)
    // console.log(country.languages.languages)

    const handleVisited = () =>{
        setVisited(visited? false:true)
        handelVisitedCountries(country)
    }

    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            {/* <p>Language: {country.languages.languages}</p> */}
            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area >300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited': 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;