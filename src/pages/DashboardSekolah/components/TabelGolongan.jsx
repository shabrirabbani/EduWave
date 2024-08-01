import { IconEdit, IconTrash } from '@tabler/icons-react';
import React from 'react';

export default function TabelGolongan({ data, onEditClick, onDeleteClick }) {
  if (!Array.isArray(data)) {
    return <p>Data tidak tersedia atau format salah.</p>;
  }

  return (
    <div className="relative overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-white uppercase bg-gray-700 text-center">
          <tr>
            <th scope="col" className="px-1 py-3">No</th>
            <th scope="col" className="px-6 py-3 text-start">Golongan</th>
            <th scope="col" className="px-6 py-3">Jumlah Uang</th>
            <th scope="col" className="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="bg-white border-b text-center">
              <td className="text-center">{index + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-start">
                {item.golongan}
              </th>
              <td className="px-6 py-4"><span>Rp. </span> {item.spp}</td>
              <td className="px-6 py-4 flex justify-center">
                <button
                  className="bg-blue-500 p-2 rounded-lg text-white me-2"
                  onClick={() => onEditClick(item)}>
                  <IconEdit size={15} />
                </button>
                <button
                  className="bg-red-500 p-2 rounded-lg text-white"
                  onClick={() => onDeleteClick(item.id)}>
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
