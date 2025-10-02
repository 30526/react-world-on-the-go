import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedFlags = (flags) => {
        const updateVisitedFlags = [...visitedFlags, flags]
        // console.log(visitedFlags)
        setVisitedFlags(updateVisitedFlags)
    }

    const handleVisitedCountries = (country) => {
        // console.log('Handle visited countries clicked', country)
        const updateVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(updateVisitedCountries)
    }

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total countries visited: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country =>
                        <li
                            key={country.cca3.cca3}>{country.name.common}</li>
                    )
                }

                <div className='handle-flags'>{
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt="" />)
                }
                </div>

            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;