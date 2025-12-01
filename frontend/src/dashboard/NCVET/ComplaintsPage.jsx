import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

const complaintsData = [
  {
    name: "Branch A",
    raised: 25,
    inProgress: 10,
    solved: 15,
    severity: "High",
    score: 60,
    updated: "2025-11-15",
  },
  {
    name: "Branch B",
    raised: 30,
    inProgress: 5,
    solved: 25,
    severity: "Medium",
    score: 83,
    updated: "2023-11-14",
  },
  {
    name: "Branch C",
    raised: 20,
    inProgress: 15,
    solved: 5,
    severity: "Critical",
    score: 25,
    updated: "2023-11-13",
  },
  {
    name: "Branch D",
    raised: 15,
    inProgress: 5,
    solved: 10,
    severity: "Low",
    score: 67,
    updated: "2023-11-12",
  },
  {
    name: "Branch E",
    raised: 33,
    inProgress: 10,
    solved: 23,
    severity: "Medium",
    score: 70,
    updated: "2023-11-11",
  },
];

const severityStyle = {
  High: "bg-gray-200 text-gray-700",
  Medium: "bg-gray-200 text-gray-700",
  Critical: "bg-gray-200 text-gray-700",
  Low: "bg-gray-200 text-gray-700",
};

export default function ComplaintsPage() {
  return (
    <div className="bg-[#f4f7fb] min-h-screen px-6 pt-6">

      {/* Search Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-[500px]">
          <AiOutlineSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search Complaints"
            className="w-full h-[48px] border border-[#dbe4f0] rounded-2xl bg-white pl-12 pr-4 text-sm shadow-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-5">
          <FiSliders className="text-2xl text-gray-600 cursor-pointer" />
          <MdPersonOutline className="text-2xl text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Raised" value="123" change="+12%" color="text-red-500" />
        <StatCard title="In Progress" value="45" change="-5%" color="text-green-500" />
        <StatCard title="Solved" value="78" change="+10%" color="text-green-500" />
      </div>

      {/* Table Title */}
      <h2 className="text-lg font-semibold mb-4">
        Branch-level Complaints
      </h2>

      {/* Table */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl overflow-hidden">
        <table className="w-full text-sm">

          {/* Header */}
          <thead className="bg-[#f8fbff] text-gray-600">
            <tr className="border-b">
              <th className="text-left p-4">Branch Name</th>
              <th className="text-center p-4">Issue Raised</th>
              <th className="text-center p-4">In Progress</th>
              <th className="text-center p-4">Solved</th>
              <th className="text-center p-4">Highest Severity</th>
              <th className="text-center p-4">ITI Score</th>
              <th className="text-center p-4">Last Updated</th>
              <th className="text-center p-4"></th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {complaintsData.map((row, i) => (
              <tr key={i} className="border-b last:border-none bg-[#fcfdff] hover:bg-[#f8fbff]">

                <td className="p-4 font-medium text-gray-800">
                  {row.name}
                </td>

                <td className="p-4 text-center text-blue-600 font-medium">
                  {row.raised}
                </td>

                <td className="p-4 text-center text-blue-600 font-medium">
                  {row.inProgress}
                </td>

                <td className="p-4 text-center text-blue-600 font-medium">
                  {row.solved}
                </td>

                {/* Severity */}
                <td className="p-4 text-center">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-medium ${severityStyle[row.severity]}`}
                  >
                    {row.severity}
                  </span>
                </td>

                {/* ITI Score Bar */}
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-[70px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${row.score}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-700 text-xs">{row.score}</span>
                  </div>
                </td>

                {/* Date */}
                <td className="p-4 text-center text-blue-600 text-xs font-medium">
                  {row.updated}
                </td>

                {/* View More */}
                <td className="p-4 text-center text-sm text-blue-600 font-medium cursor-pointer hover:underline">
                  View More
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, change, color }) => (
  <div className="bg-white border border-[#dbe4f0] rounded-xl px-6 py-5 text-center shadow-sm">
    <div className="text-sm font-medium text-gray-700 mb-1">
      {title}
    </div>
    <div className="text-2xl font-bold text-black">
      {value}
    </div>
    <div className={`text-xs mt-1 font-medium ${color}`}>
      {change}
    </div>
  </div>
);
