/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Form = ({ newLocation }) => {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === '' || !city) return;

    newLocation(city);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="btn btn-secondary input-group-text"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
