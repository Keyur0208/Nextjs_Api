"use client"
import React, { useState } from "react";

const countriesData = [
  {
    name: "BCA",
    states: ["CLASS","FYBCA", "SYBCA", "TYBCA"]
  },
  {
    name: "BBA",
    states: ["ClASS","FYBBA", "SYBBA", "TYBBA"]
  },
  {
    name: "BCOM",
    states: ["CLASS", "FYBCOM", "SYBCOM", "TYBCOM"]
  }
];

function Form() {
  const [{ country, state }, setData] = useState({
    country: "BCA",
    state: ""
  });

  const countries = countriesData.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const states = countriesData.find(item => item.name === country)?.states.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ));

  function handleCountryChange(event) {
    setData(data => ({ state: '', country: event.target.value }));
  }

  function handleStateChange(event) {
    setData(data => ({ ...data, state: event.target.value }));
  }

  return (
    <form onSubmit={() => console.log("Submitted")}>
      <div>
        <select value={country} onChange={handleCountryChange}>
          {countries}
        </select>
      </div>

      <div>
        <select value={state} onChange={handleStateChange}>
          {states}
        </select>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Form;