import React, { useEffect } from 'react'
import CardInformation from '../../components/CardInformation'
import ChartComponent from './components/ChartComponent';
import PieChartComponent from './components/PieChartComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSekolahData } from '../../redux/features/sekolahSlice';


const studentsData = [
  {name: "John Doe", status: "Lunas", contact: "123456789"},
  {name: "Jane Smith", status: "Belum Lunas", contact: "987654321"},
  {name: "Jim Beam", status: "Lunas", contact: "555555555"},
];

const lunasCount = studentsData.filter(
  (student) => student.status === "Lunas"
).length;
const belumLunasCount = studentsData.filter(
  (student) => student.status === "Belum Lunas"
).length;

export default function DashboardSekolah() {
  const {username} = useParams();
  const dispatch = useDispatch()
  const school = useSelector((state) => state.sekolah.data);

  useEffect(() => {
    if (username) {
      dispatch(fetchSekolahData(username));
    }
  }, [dispatch, username]);


  return (
   
    <div>
      <h1 className="text-3xl font-semibold mb-5 uppercase">{school ? school.sekolah : "none"}</h1>
      <h1 className='bg-red-500/25 my-5 p-2 font-bold text-center'>Daftarkan golongan terlebih dahulu sebelum mendaftarkan murid!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardInformation
          title={"Total Murid"}
          value={12 + " Murid"}
          color={"bg-red-500"}
        />
        <CardInformation
          title={"Lunas Bulan Ini"}
          value={12 + " Murid"}
          color={"bg-blue-500"}
        />
        <CardInformation
          title={"Belum Lunas Bulan Ini"}
          value={12 + " Murid"}
          color={"bg-green-500"}
        />
        <CardInformation
          title={"Total"}
          value={12 + " Murid"}
          color={"bg-yellow-500"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div className="lg:col-span-2">
          <div className="bg-white p-5 rounded-lg shadow-lg h-full border border-gray-200">
            <ChartComponent />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-3 text-center">
              Status Pembayaran Bulan Ini
            </h3>
            <PieChartComponent
              lunas={lunasCount}
              belumLunas={belumLunasCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
