import React from "react";

export default function TOMaintenancePage() {
  return (
    <div className="w-full px-6 py-6">

      {/* ---------------- Header Title ---------------- */}
      <h1 className="text-3xl font-semibold mb-6">Maintenance Dashboard</h1>

      {/* ---------------- Stats Cards ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-3xl font-semibold">4</p>
          <p className="text-gray-600 text-sm mt-1">Active Machines</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-3xl font-semibold">3</p>
          <p className="text-gray-600 text-sm mt-1">Under Maintenance</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-3xl font-semibold">5</p>
          <p className="text-gray-600 text-sm mt-1">Upcoming Maintenance</p>
        </div>

      </div>

      {/* ---------------- Section Title ---------------- */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Recent Maintenance Requests</h2>
        <button className="text-blue-600 text-sm font-semibold">View All</button>
      </div>

      {/* ---------------- Recent Requests Table ---------------- */}
      <div className="bg-white shadow rounded-xl overflow-hidden mb-10">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-3 px-4">Machine</th>
              <th className="py-3 px-4">Request Type</th>
              <th className="py-3 px-4">Date Requested</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Machine A", "Breakdown", "Nov 25, 2025", "Pending"],
              ["Machine B", "Breakdown", "Nov 24, 2025", "Completed"],
              ["Machine C", "Breakdown", "Nov 20, 2025", "Completed"],
              ["Machine C", "Breakdown", "Nov 18, 2025", "Completed"],
            ].map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-3 px-4">{row[0]}</td>
                <td className="py-3 px-4">{row[1]}</td>
                <td className="py-3 px-4">{row[2]}</td>
                <td
                  className={`py-3 px-4 font-medium ${
                    row[3] === "Pending" ? "text-yellow-600" : "text-green-600"
                  }`}
                >
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- Maintenance Details Cards ---------------- */}
      <h2 className="text-lg font-semibold mb-3">Request Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl p-6 space-y-3">
          <div>
            <p className="text-gray-500 text-sm">Requester</p>
            <p className="font-medium">ATO Name</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Date Requested</p>
            <p className="font-medium">Nov 27, 2025</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Description</p>
            <p className="font-medium">Machine Oil Leakage</p>
          </div>

          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            View Full Details
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl p-6 space-y-3">
          <div>
            <p className="text-gray-500 text-sm">Requester</p>
            <p className="font-medium">ATO Name</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Date Requested</p>
            <p className="font-medium">Nov 27, 2025</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Description</p>
            <p className="font-medium">Machine Oil Leakage</p>
          </div>

          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            View Full Details
          </button>
        </div>

      </div>
    </div>
  );
}
