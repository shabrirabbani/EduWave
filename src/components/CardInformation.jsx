import React from 'react'

export default function CardInformation({title, value, color}) {
  const cardClass = `block max-w-sm p-6 border border-gray-200 rounded-lg shadow ${color}`;
  return (
    <div>
      <a
        className={cardClass}>
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-white bg">
          {title}
        </h5>
        <p className="font-normal text-gray-200">
          {value}
        </p>
      </a>
    </div>
  );
}
