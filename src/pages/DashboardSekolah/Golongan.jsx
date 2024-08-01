import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGolongan, addGolongan, updateGolongan, deleteGolongan } from '../../redux/features/golonganSlice';
import TabelGolongan from './components/TabelGolongan';
import ModalTambahGolongan from './components/ModalTambahGolongan';
import Swal from 'sweetalert2';

export default function Golongan() {
  const dispatch = useDispatch();
  const golongan = useSelector((state) => state.golongan.list);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState('edit');

  useEffect(() => {
    dispatch(fetchAllGolongan());
  }, [dispatch]);


  const handleOpenModal = (modeType = 'edit', item = null) => {
    setMode(modeType);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    dispatch(fetchAllGolongan());
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSave = async (updatedData) => {
    try {
      if (mode === 'edit') {
        await dispatch(updateGolongan(updatedData)).unwrap();
      } else {
        await dispatch(addGolongan(updatedData)).unwrap();
      }
      handleCloseModal();      
    } catch (error) {
      console.error('Failed to save golongan:', error);
    }
  };
  
  const handleDelete = async (id) => { 
   Swal.fire({
     title: 'Apakah Anda yakin?',
     text: 'Data yang dihapus tidak bisa dikembalikan',
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Ya, hapus',
   }).then((result) => {
     if (result.isConfirmed) {
       dispatch(deleteGolongan(id));
     }
     dispatch(fetchAllGolongan());
   });
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Golongan SPP</h1>
      <div className="flex justify-end mb-6">
        <button
          className="bg-primary p-2 rounded-lg text-white text-sm hover:bg-green-600"
          onClick={() => handleOpenModal('add')}>
          Tambah Golongan
        </button>
      </div>
      <TabelGolongan
        data={golongan.data}
        onEditClick={(item) => handleOpenModal('edit', item)}
        onDeleteClick={handleDelete}
      />
      <ModalTambahGolongan
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        mode={mode}
        data={selectedItem}
      />
    </div>
  );
}
