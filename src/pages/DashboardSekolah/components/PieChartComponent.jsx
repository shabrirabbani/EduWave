import React from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartComponent({lunas, belumLunas}) {
  const data = {
    labels: ["Lunas", "Belum Lunas"],
    datasets: [
      {
        label: "# of Students",
        data: [lunas, belumLunas],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
