import React, { useState } from "react";
import { IconCircleCheck, IconEdit, IconInfoCircle, IconXboxX } from "@tabler/icons-react";
import ModalSiswa from "./ModalSiswa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSiswa,
  fetchAllSiswa,
  updateStatus,
} from "../../../redux/features/siswaSlice";

export default function TabelDaftarSiswa({ data, currentPage, setCurrentPage, itemsPerPage }) {
  const [checkedItem, setCheckedItem] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const username = useSelector((state) => state.auth.username);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const startIndex = (currentPage - 1) * itemsPerPage;

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
        dispatch(updateStatus(checkedItem));
        Swal.fire("Berhasil", "Status pembayaran telah direset", "success");
        setCheckedItem([]);
        dispatch(fetchAllSiswa());
      }
    });
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Ingin mengubah status siswa?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
      });
      if (result.isConfirmed) {
        await dispatch(deleteSiswa(id));
        await dispatch(fetchAllSiswa());
      }
    } catch (error) {
      Swal.fire("Terjadi Kesalahan!", "Gagal menghapus data.", "error");
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
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
              <th scope="col" className="px-6 py-2 text-start border-r">
                Nama
              </th>
              <th scope="col" className="px-6 py-2 border-r">
                NIS
              </th>
              <th scope="col" className="px-6 py-2 border-r">
                No HP ortu
              </th>
              <th scope="col" className="py-2 border-r">
                Status Pembayaran
              </th>
              <th scope="col" className="px-3 py-2 border-r">
                Aksi
              </th>
              <th scope="col" className="max-w-12 py-2">
                Status Siswa
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
                  <td className="text-center">{startIndex + index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-start overflow-hidden text-ellipsis max-w-64">
                    {item.nama}
                  </td>
                  <td className="px-6 py-4">{item.NIS}</td>
                  <td className="px-6 py-4">{item.no_hp_ortu}</td>

                  <td className="py-4">
                    {item.status === "LUNAS" ? (
                      <span className="bg-green-500 text-white text-xs font-medium me-2 p-2 rounded-lg">
                        {item.status}
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white text-xs font-medium me-2 p-2 rounded-lg">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-4 flex justify-center">
                    <button
                      onClick={() => handleInfoClick(item)}
                      className="bg-green-500 p-1.5 rounded-full text-white me-2">
                      <IconInfoCircle size={17} />
                    </button>
                    <Link
                      to={`/dashboard/${username}/edit/${item.id}`}
                      className="bg-blue-500 p-1.5 rounded-full text-white">
                      <IconEdit size={17} />
                    </Link>
                  </td>
                  <td className="py-4">
                    {item.is_active ? (
                      <button onClick={() => handleDelete(item.id)}>
                        <IconCircleCheck size={20} color="green" />
                      </button>
                    ) : (
                      <button onClick={() => handleDelete(item.id)}>
                        <IconXboxX size={20} color="red" />
                      </button>
                    )}
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
