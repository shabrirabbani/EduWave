import React from 'react'
import CardInformation from '../../components/CardInformation'

export default function DashboardAdmin() {
  return (
    <div>
        <div className='grid grid-cols-4 gap-4'>
            <CardInformation title={"Sekolah yang terdaftar"} value={12}/>
            <CardInformation title={"Sekolah yang terdaftar"} value={12}/>
            <CardInformation title={"Sekolah yang terdaftar"} value={12}/>
            <CardInformation title={"Sekolah yang terdaftar"} value={12}/>
        </div>
    </div>
  )
}
