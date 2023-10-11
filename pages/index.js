import React from "react";
export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return { props: { countries: data } };
}

export default function Home({ countries }) {
  console.log(countries);
  if (!countries) {
    return null;
  }
  return (
    
      <main >
        <div  className="grid-container">
          {countries.map((country, index) => (
            <div key={index} className="card">
              <div className="card-img">
                <img src={country.flags.png} alt={country.name.common} height="auto" />
              </div>

              <h1>{country.name.common}</h1>
              <div className="flex flex-col items-center justify-center">
                <span>
                  <b>Population</b> : {country.population}
                </span>
                <span>
                  <b>Region</b> : {country.region}
                </span>
                <span>
                  <b>Capital</b> : {country.capital}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    
  );
}
