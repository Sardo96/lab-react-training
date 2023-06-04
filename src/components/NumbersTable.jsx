import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-table">
      {numbers.map((number, index) => (
        <div
          key={number}
          className={`number ${index % 2 === 0 ? 'even' : 'odd'}`}
          style={{ backgroundColor: number % 2 === 0 ? 'red' : 'transparent' }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
