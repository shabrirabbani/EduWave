import React from 'react'

export default function CardInformation({title, value}) {
  return (
    <div>
      <a
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-700">
          {value} Sekolah
        </p>
      </a>
    </div>
  );
}
