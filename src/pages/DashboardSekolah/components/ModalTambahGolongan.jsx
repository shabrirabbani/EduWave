import React, { useEffect, useState } from 'react'

export default function ModalTambahGolongan({onClose, isOpen, data, onSave, mode}) {
    if (!isOpen) return null

    const [name, setName] = useState("")
    const [tagihan, setTagihan] = useState("")

    useEffect(() => {
        if (mode === 'edit' && data) {
            setName(data.nama || "")
            setTagihan(data.jumlah || "")
        } else {
            setName("")
            setTagihan("")
        }
    }, [mode,data])

    const handleSave = (event) => {
      event.preventDefault()
      const newData = {
            id: mode === 'edit' ? data.id : "",
            nama: name,
            jumlah: tagihan
        }
        onSave(newData)
    }

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
          <h2 className="text-lg font-bold mb-4">
            {mode === "edit" ? "Edit Golongan SPP" : "Tambah Golongan SPP"}
          </h2>
          <form>
            <div>
              <label
                for="nama"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Nama Golongan
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 mb-5"
                placeholder="Golongan 1"
              />
            </div>
            <div>
              <label
                for="jumlahtagihan"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Jumlah Tagihan
              </label>
              <input
                id="tagihan"
                type="text"
                value={tagihan}
                onChange={(e) => setTagihan(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2 "
                placeholder="Rp.200.000"
              />
            </div>
            <button
              onClick={handleSave}
              className="text-white bg-primary hover:bg-green-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4">
              {mode === "edit" ? "Simpan" : "Tambah"}
            </button>
            <button
              className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4 ms-4"
              onClick={onClose}>
              Batal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
