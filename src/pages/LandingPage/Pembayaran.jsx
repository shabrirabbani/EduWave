import React from 'react'
import InputPembayaran from './components/InputPembayaran';
import mockup from '../../assets/images/mockup.svg'

export default function Pembayaran() {
  return (
    <div className="bg-white">
      <div className="text-center py-10">
        <h1 className="text-3xl font-semibold">Pembayaran SPP</h1>
        <h1 className="text-lg mt-5">
          Pilih sekolah anda dan masukkan Nomor Induk Siswa (NIS)
        </h1>
      </div>
      <div className='max-w-screen-md mx-auto'> 
        <InputPembayaran/>
        <div className='mt-20 flex flex-col sm:flex-row items-center justify-center pb-20'>
            <img src={mockup} alt="mockup" className="h-96" />
            <h1 className='text-lg w-64'>Anda dapat melihat riwayat pembayaran SPP melalui aplikasi Eduwave</h1>
        </div>
      </div>
    </div>
  );
}
