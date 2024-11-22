import React, { useEffect, useState } from 'react';

export default function CountriesDisplay() {
  const [countries, setCountries] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data); // Store API data in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {countries.map((country) => (
          <div key={country.cca3} className="col-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={country.flags.svg}
                className="card-img-top"
                alt={`${country.name.common} flag`}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">
                  <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                </p>
                <p className="card-text">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="card-text">
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
