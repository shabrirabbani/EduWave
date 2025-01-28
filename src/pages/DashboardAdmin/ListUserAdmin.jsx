import React, {useContext, useEffect, useState} from "react";
import {IconEdit, IconTrash} from "@tabler/icons-react";
import {SekolahContext} from "../../context/AdminContext";
import Swal from "sweetalert2";
import ModalEdit from "./components/ModalEdit";

export default function ListUserAdmin() {
  const {
    sekolahList,
    getAllSekolah,
    updateSekolah,
    deleteSekolah,
    status,
    error,
  } = useContext(SekolahContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    getAllSekolah();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak bisa dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSekolah(id);
      }
    });
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (updatedData) => {
    const formData = new FormData();

    // Append only updated fields
    if (updatedData.sekolah) {
      formData.append(
        "sekolah_request",
        JSON.stringify({
          id: updatedData.id,
          sekolah: updatedData.sekolah,
          npsn: updatedData.npsn,
          email: updatedData.email,
          no_hp: updatedData.no_hp,
        })
      );
    }

    // Append file if it exists
    if (updatedData.logo && updatedData.logo instanceof File) {
      formData.append("logo", updatedData.logo);
    }

    updateSekolah(formData);
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      {console.log(sekolahList)}
      <div className="flex justify-between items-center mb-5 mx-2">
        <h1 className="text-lg font-semibold">List Sekolah</h1>
      </div>
      <div>
        <div className="relative overflow-x-auto">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" && (
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-gray-700">
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
                  <th scope="col" className="px-6 py-3">
                    Kontak Sekolah
                  </th>
                  <th scope="col" className="px-6 py-3 flex justify-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {sekolahList.length === 0 ? (
                  <tr className="bg-white border-b text-center">
                    <td colSpan="8" className="py-4">
                      Data tidak ada
                    </td>
                  </tr>
                ) : (
                  sekolahList.map((sekolah) => (
                    <tr
                      key={sekolah.id}
                      className="bg-white border-b dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {sekolah.sekolah}
                      </th>
                      <td className="px-6 py-4">{sekolah.npsn}</td>
                      <td className="px-6 py-4">{sekolah.email}</td>
                      <td className="px-6 py-4">{sekolah.no_hp}</td>
                      <td className="px-6 py-4 flex justify-center">
                        <button
                          className="bg-blue-500 p-2 rounded-lg text-white me-2"
                          onClick={() => handleOpenModal(sekolah)}>
                          <IconEdit size={17} />
                        </button>
                        <button
                          className="bg-red-500 p-2 rounded-lg text-white"
                          onClick={() => handleDelete(sekolah.id)}>
                          <IconTrash size={17} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <ModalEdit
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        selectedItem={selectedItem}
      />
    </div>
  );
}
