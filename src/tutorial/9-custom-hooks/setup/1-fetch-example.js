import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <ul className="cs-grid">
        {products.map((product) => {
          const {
            id,
            fields: { image, name },
          } = product;
          console.log(name);
          return (
            <div className="cs-grid-item" key={id}>
              <img
                className="cs-grid-item__img"
                src={image[0].url}
                alt={name}
              />
              <p className="cs-grid-item__name">{name}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Example;
