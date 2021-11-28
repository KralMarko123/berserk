import React from "react";

const Quote = ({ quote, person, color }) => {
  return (
    <p className="quote">
      {quote}
      <span className="person" style={{ color: `${color}` }}>
        - {person}
      </span>
    </p>
  );
};

export default Quote;
