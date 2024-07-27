import {IconEdit, IconInfoCircle, IconTrash} from "@tabler/icons-react";
import React, {useState} from "react";
import ModalSiswa from "./ModalSiswa";

export default function TabelDaftarSiswa({data}) {
  const [checkedItem, setCheckedItem] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleCheckboxChange = (id) => {
    if (checkedItem.includes(id)) {
      setCheckedItem(checkedItem.filter((item) => item !== id));
    } else {
      setCheckedItem([...checkedItem, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setCheckedItem([]);
    } else {
      setCheckedItem(data.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleInfoClick = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 text-center">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    checked={selectAll}
                    onChange={handleSelectAll}
                    type="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                  />
                </div>
              </th>
              <th scope="col" className="py-3 px-2">
                No
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                NIS
              </th>
              <th scope="col" className="px-6 py-3">
                No HP ortu
              </th>
              <th scope="col" className="px-6 py-3">
                tgl pembayaran terakhir
              </th>
              <th scope="col" className="px-6 py-3">
                Status pembayaran
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr className="bg-white border-b text-center">
                <td colSpan="8" className="py-4">
                  Data tidak ada
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr className="bg-white border-b text-center" key={index}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        checked={checkedItem.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        type="checkbox"
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded "
                      />
                    </div>
                  </td>
                  <td className="text-center">{index + 1}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-start">
                    {item.nama}
                  </td>
                  <td className="px-6 py-4">{item.nis}</td>
                  <td className="px-6 py-4">{item.noHpOrtu}</td>
                  <td className="px-6 py-4">{item.tglpembayaran}</td>
                  <td className="px-6 py-4">
                    {item.status === "Lunas" ? (
                      <span className="bg-green-500 text-white text-xs font-medium me-2 p-2 rounded-lg ">
                        {item.status}
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white text-xs font-medium me-2 p-2 rounded-lg ">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    <button
                      className="bg-green-500 p-2 rounded-lg text-white me-2"
                      onClick={() => handleInfoClick(item)}>
                      <IconInfoCircle size={15} />
                    </button>
                    <button className="bg-blue-500 p-2 rounded-lg text-white me-2">
                      <IconEdit size={15} />
                    </button>
                    <button className="bg-red-500 p-2 rounded-lg text-white">
                      <IconTrash size={15} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <ModalSiswa
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={modalData}
        />
      </div>
    </div>
  );
}
