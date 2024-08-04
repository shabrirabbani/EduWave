import React from 'react'
import CardInformation from '../../components/CardInformation'

export default function DashboardAdmin() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardInformation
          title={"Sekolah yang terdaftar"}
          value={12}
          color={"bg-gray-700"}
        />
        <CardInformation
          title={"Sekolah yang terdaftar"}
          value={12}
          color={"bg-gray-700"}
        />
        <CardInformation
          title={"Sekolah yang terdaftar"}
          value={12}
          color={"bg-gray-700"}
        />
        <CardInformation
          title={"Sekolah yang terdaftar"}
          value={12}
          color={"bg-gray-700"}
        />
      </div>
    </div>
  );
}
