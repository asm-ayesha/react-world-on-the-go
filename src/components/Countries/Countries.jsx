import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])

        const handelVisitedCountries = (country) =>{
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }

    const countriesData =use(countriesPromise);
    const countries = countriesData.countries;
    
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <div id='countries'>
                 {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country} handelVisitedCountries={handelVisitedCountries}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;