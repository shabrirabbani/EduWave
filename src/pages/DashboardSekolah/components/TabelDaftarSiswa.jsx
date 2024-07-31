import React, {useState} from "react";
import {IconEdit, IconInfoCircle, IconTrash} from "@tabler/icons-react";
import ModalSiswa from "./ModalSiswa";
import Pagination from "./Pagination"; // Import komponen Pagination
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function TabelDaftarSiswa({data, currentPage, setCurrentPage}) {
  const [checkedItem, setCheckedItem] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(30); 

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

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

  const handleResetPembayaran = () => {
    if (checkedItem.length === 0) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
      }).fire({
        icon: "error",
        title: "Tidak ada data yang dipilih",
      });
      return;
    }

    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Status pembayaran yang dipilih akan direset",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Berhasil", "Status pembayaran telah direset", "success");
        setCheckedItem([]);
      }
    });
  };

  return (
    <div className="bg-gray-300 rounded-lg p-2">
      <div className="flex justify-between mb-2">
        <div className="text-sm">
          <label className="px-3 text-gray-700">Row</label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className=" text-sm bg-transparent border-0 border-b-2 border-b-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 p-2 rounded-lg text-white text-sm font-semibold"
          onClick={handleResetPembayaran}>
          Reset Pembayaran
        </button>
      </div>
      <div className="relative overflow-x-auto rounded-md">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-gray-700 text-center">
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
              <th scope="col" className="py-1 px-2">
                No
              </th>
              <th scope="col" className="px-6 py-3 text-start border-r">
                Nama
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                NIS
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                No HP ortu
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                Tgl Pembayaran Terakhir
              </th>
              <th scope="col" className="px-6 py-3 border-r">
                Status Pembayaran
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
              currentItems.map((item) => (
                <tr
                  className="bg-white border border-gray-300 text-center"
                  key={item.id}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        checked={checkedItem.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        type="checkbox"
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                      />
                    </div>
                  </td>
                  <td className="text-center">
                    {startIndex + currentItems.indexOf(item) + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-start overflow-hidden text-ellipsis max-w-64">
                    {item.nama}
                  </td>
                  <td className="px-6 py-4">{item.nis}</td>
                  <td className="px-6 py-4">{item.noHpOrtu}</td>
                  <td className="px-6 py-4">{item.tglpembayaran}</td>
                  <td className="px-6 py-4">
                    {item.status === "Lunas" ? (
                      <span className="bg-green-500 text-white text-xs font-medium me-2 p-2 rounded-lg">
                        {item.status}
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white text-xs font-medium me-2 p-2 rounded-lg">
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
                    <Link 
                      to={`/dashboard/edit/${item.id}`}
                      className="bg-blue-500 p-2 rounded-lg text-white me-2"
                      >
                      <IconEdit size={15} />
                    </Link>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
}
