import { IconEdit, IconTrash } from '@tabler/icons-react';
import React from 'react'

export default function TabelGolongan({data, onEditClick}) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left  text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
          <tr>
            <th scope="col" className="px-6 py-3 text-start">
              Golongan
            </th>
            <th scope="col" className="px-6 py-3">
              Jumlah Uang
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Jumlah Siswa
            </th> */}
            <th scope="col" className="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
          <tr className="bg-white border-b text-center">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-start">
              {item.nama}
            </th>
            <td className="px-6 py-4">{item.jumlah}</td>
            {/* <td className="px-6 py-4">{item.jumlah_siswa}</td> */}
            <td className="px-6 py-4 flex justify-center">
              <button 
                className="bg-blue-500 p-2 rounded-lg text-white me-2"
                onClick={() => onEditClick(item)}
                >
                <IconEdit size={15} />
              </button>
              <button className="bg-red-500 p-2 rounded-lg text-white">
                <IconTrash size={15} />
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
}
