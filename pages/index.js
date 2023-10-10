import React from "react";
export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return { props: { countries: data } };
}

export default function Home({ countries }) {
   if(!countries){
    return null;
   }
  return (
    <>
      <div>
      <ul className="text-black">
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    
      </div>
    </>
  );
}
