import React from "react";
import { Link } from "react-router-dom";

const itis = [
  {
    name: "ANNA ITI",
    address: "1st Main Road, Guindy, Chennai",
    status: "Active",
    machines: 80,
    working: 65,
    students: 250,
    workforce: 25,
  },
  {
    name: "CHROMPET ITI",
    address: "Chrompet Main Road, Chennai",
    status: "Critical",
    machines: 78,
    working: 70,
    students: 290,
    workforce: 35,
  },
  {
    name: "ADYAR TECH ITI",
    address: "Gandhinagar 2nd Street, Adyar",
    status: "Active",
    machines: 86,
    working: 75,
    students: 250,
    workforce: 25,
  },
  {
    name: "GUINDY ITI",
    address: "SIDCO Industrial Estate, Guindy",
    status: "Active",
    machines: 90,
    working: 83,
    students: 250,
    workforce: 25,
  },
  {
    name: "TAMBARAM ITI",
    address: "Mudichur Main Road, Tambaram",
    status: "Active",
    machines: 62,
    working: 55,
    students: 250,
    workforce: 25,
  },
  {
    name: "VELACHERY ITI",
    address: "Taramani Link Road, Velachery",
    status: "Maintenance",
    machines: 63,
    working: 60,
    students: 250,
    workforce: 25,
  },
];

const statusColor = {
  Active: "bg-green-100 text-green-600",
  Critical: "bg-red-100 text-red-600",
  Maintenance: "bg-yellow-100 text-yellow-600",
};

export default function BranchesPage() {
  return (
    <div className="bg-[#f6f9fc] min-h-screen p-4">

      <h1 className="text-xl font-semibold mb-6">
        Available ITIs in Selected Area :
      </h1>

      <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 mb-6">
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <span>Sort by : Location</span>
          <span className="px-4 py-1 rounded bg-blue-100 text-blue-600 cursor-pointer">
            All
          </span>
          <span className="cursor-pointer">Active</span>
          <span className="cursor-pointer">Maintenance</span>
          <span className="cursor-pointer">Critical</span>
        </div>
        <div className="text-sm text-gray-500">Showing 25 ITIs</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itis.map((iti, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-semibold text-sm">{iti.name}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${statusColor[iti.status]}`}
              >
                ● {iti.status}
              </span>
            </div>

            <p className="text-xs text-blue-500 mb-4">{iti.address}</p>

            <div className="grid grid-cols-2 gap-y-3 text-xs mb-5">
              <div>
                <p className="text-gray-500">Total Machines</p>
                <p className="font-semibold">{iti.machines}</p>
              </div>
              <div>
                <p className="text-gray-500">Working Machines</p>
                <p className="font-semibold">{iti.working}</p>
              </div>
              <div>
                <p className="text-gray-500">Students</p>
                <p className="font-semibold">{iti.students}</p>
              </div>
              <div>
                <p className="text-gray-500">Workforce</p>
                <p className="font-semibold">{iti.workforce}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-center">
              {/* ✅ FIXED PATH ONLY */}
              <Link
                to={`/ncv/dashboard/branches/${index}`}
                className="text-sm text-blue-600 font-medium hover:underline"
              >
                View Full Details »
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
