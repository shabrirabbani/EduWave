import React, { useState, useEffect } from 'react';

export default function ModalTambahGolongan({ onClose, isOpen, data, mode, onSave }) {
  const [formData, setFormData] = useState({
    golongan: "",
    spp: "",
  });

  const [nameError, setNameError] = useState("");
  const [tagihanError, setTagihanError] = useState("");

  useEffect(() => {
    if (mode === "edit" && data) {
      setFormData({
        golongan: data.golongan || "",
        spp: String(data.spp || ""),
      });
    } else {
      setFormData({
        golongan: "",
        spp: "",
      });
    }
  }, [mode, data]);

  const parseCurrency = (value) => {
    const parsedValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    return isNaN(parsedValue) ? "" : parsedValue;
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (validateInputs()) {
      const newData = {
        id: mode === "edit" ? data.id : null,
        golongan: formData.golongan,
        spp: parseCurrency(formData.spp), // Parse the formatted value before sending
      };
      try {
        await onSave(newData);
      } catch (error) {
        console.error("Failed to save golongan:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "spp") {
      const cleanedValue = value.replace(/[^\d]/g, ""); // Remove non-digit characters
      setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
      if (/^\d*$/.test(cleanedValue)) {
        setTagihanError("");
      } else {
        setTagihanError("Jumlah Tagihan hanya bisa berisi angka.");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "golongan") setNameError("");
    }
  };

  const validateInputs = () => {
    let valid = true;
    if (!formData.golongan.trim()) {
      setNameError("Nama Golongan tidak boleh kosong.");
      valid = false;
    }
    if (!/^\d*$/.test(formData.spp)) {
      setTagihanError("Jumlah Tagihan hanya bisa berisi angka.");
      valid = false;
    }
    return valid;
  };

  const isFormValid = () => {
    return (
      formData.golongan.trim() &&
      /^\d+$/.test(formData.spp)
    );
  };

  return (
    isOpen && 
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
          <h2 className="text-lg font-bold mb-4">
            {mode === "edit" ? "Edit Golongan SPP" : "Tambah Golongan SPP"}
          </h2>
          <form onSubmit={handleSave}>
            <div>
              <label
                htmlFor="golongan"
                className="block mb-2 text-sm font-medium text-gray-900">
                Nama Golongan
              </label>
              <input
                id="golongan"
                name="golongan"
                type="text"
                value={formData.golongan}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
                placeholder="Golongan A"
              />
              {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
            </div>
            <div>
              <label
                htmlFor="spp"
                className="block mb-2 text-sm font-medium text-gray-900 mt-5">
                Jumlah Tagihan
              </label>
              <input
                id="spp"
                name="spp"
                type="text"
                value={formatCurrency(parseCurrency(formData.spp))}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2"
                placeholder="Rp."
              />
              {tagihanError && (
                <p className="text-red-500 text-sm">{tagihanError}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4 ${
                isFormValid()
                  ? "bg-primary hover:bg-green-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}>
              {mode === "edit" ? "Simpan" : "Tambah"}
            </button>
            <button
              type="button"
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
