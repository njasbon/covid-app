import React, {useState} from 'react';
import './App.css';
import CountryStat from './CountryStat.js'

function App() {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [countryStats, setCountryStats] = useState([])
   
  const showCountries = () => {
    fetch("https://api.covid19api.com/countries")
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setFiltered(data)
      })
        
  }


  window.onload= showCountries

  const covidCountries = countries.map(
  (country, i) => <div key={i}> {country.Country}</div>
  )

  const updateCountries = () 

  return (
    <div className="App">
      <form className="form" onSubmit={updateCountries}>
        <label for="input">Search by Country </label>
        <input type="text" id="country-search"/>
        <input type="submit" value="Submit"/> 
      </form>
      {covidCountries}
    </div>
  );
}

export default App;
