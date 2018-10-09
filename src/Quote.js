import React from "react";

const Quote = ({ mySimpson }) => (
  <figure>
    <img src={mySimpson.image} alt={mySimpson.character} />
    <figcaption>
      <blockquote>{mySimpson.quote}</blockquote>
      <cite>{mySimpson.character}</cite>
    </figcaption>
  </figure>
);

export default Quote;