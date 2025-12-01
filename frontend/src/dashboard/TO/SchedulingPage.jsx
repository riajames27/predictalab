import React from "react";

export default function SchedulingPage() {
  const schedules = [
    {
      machineId: "MCH-012",
      machineName: "Lathe Machine",
      workerId: "WRK-10345",
      workerName: "Aravind",
      studentId: "STD-20057",
      studentName: "Gobi",
      time: "10:00 AM – 12:30 PM",
    },
    {
      machineId: "MCH-012",
      machineName: "Lathe Machine",
      workerId: "WRK-10345",
      workerName: "Aravind",
      studentId: "STD-20057",
      studentName: "Gobi",
      time: "01:00 PM – 02:00 PM",
    },
    {
      machineId: "MCH-012",
      machineName: "Lathe Machine",
      workerId: "WRK-10345",
      workerName: "Aravind",
      studentId: "STD-20057",
      studentName: "Gobi",
      time: "10:00 AM – 12:30 PM",
    },
  ];

  return (
    <div className="p-8 w-full">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Scheduling Dashboard</h1>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="py-3">Machine ID</th>
              <th className="py-3">Machine Name</th>
              <th className="py-3">Worker ID</th>
              <th className="py-3">Worker Name</th>
              <th className="py-3">Student ID</th>
              <th className="py-3">Student Name</th>
              <th className="py-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {schedules.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50 text-gray-700 text-sm"
              >
                <td className="py-4">{item.machineId}</td>
                <td className="py-4">{item.machineName}</td>
                <td className="py-4">{item.workerId}</td>
                <td className="py-4">{item.workerName}</td>
                <td className="py-4">{item.studentId}</td>
                <td className="py-4">{item.studentName}</td>
                <td className="py-4 whitespace-nowrap">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
