import React, {useState} from "react";
import TabelGolongan from "./components/TabelGolongan";
import ModalTambahGolongan from "./components/ModalTambahGolongan";

const initialdata = [
  {id: 1, nama: "Golongan 1", jumlah: "Rp.1.500.000"},
  {id: 2, nama: "Golongan 2", jumlah: "Rp.2.000.000"},
  {id: 3, nama: "Golongan 3", jumlah: "Rp.2.500.000"},
  {id: 4, nama: "Golongan 4", jumlah: "Rp.3.000.000"},
];

export default function Golongan() {
  const [data, setData] = useState(initialdata);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("edit");

  const handleOpenModal = (modeType = "edit", item = null) => {
    setMode(modeType);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSave = (updatedData) => {
    if (mode === "edit") {
      setData(
        data.map((item) => (item.id === updatedData.id ? updatedData : item))
      );
    } else {
      setData([...data, {...updatedData, id: data.length + 1}]);
    }
    handleCloseModal();
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Golongan SPP</h1>
      <div className="flex justify-end mb-6">
        <button
          className="bg-primary p-2 rounded-lg text-white text-sm hover:bg-green-600"
          onClick={() => handleOpenModal("add")}>
          Tambah Golongan
        </button>
      </div>
      <TabelGolongan
        data={data}
        onEditClick={(item) => handleOpenModal("edit", item)}
      />
      <ModalTambahGolongan
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        mode={mode}
        initialData={selectedItem}
      />
    </div>
  );
}
