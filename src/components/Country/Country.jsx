import React from 'react';
import './country.css'

const Country = ({ country }) => {
    // console.log(country);
    return (
        <div className='country'>
            <h1>Name:
                {country.name.common}
            </h1>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Capital:
                {country.capital.capital}
            </h2>
            <p>population:
                {country.population.population}
                {country.population.population > 300000 ? "big country" : "small country"}
            </p>
        </div>
    );
};

export default Country;