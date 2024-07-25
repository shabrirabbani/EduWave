import { IconEdit, IconTrash } from '@tabler/icons-react';
import React from 'react'

export default function ListUserAdmin() {
  return (
    <div>
      <div className="flex justify-between items-center mb-5 mx-2">
        <h1 className="text-lg font-semibold">List Sekolah</h1>
      </div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Sekolah
                </th>
                <th scope="col" className="px-6 py-3">
                  NPSN
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 flex justify-center">
                Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  SMA NEGERI 26 JAKARTA
                </th>
                <td className="px-6 py-4">1234567</td>
                <td className="px-6 py-4">email@email.com</td>
                <td className="px-6 py-4 flex justify-center">
                  <button className="bg-blue-500 p-2 rounded-lg text-white me-2">
                    <IconEdit size={17} />
                  </button>
                  <button className="bg-red-500 p-2 rounded-lg text-white">
                    <IconTrash size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
