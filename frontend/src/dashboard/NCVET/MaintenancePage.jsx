import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

export default function MachinePage() {
  return (
    <div className="bg-[#f4f7fb] min-h-screen px-6 pt-6">

      {/* Search Row */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-[500px]">
          <AiOutlineSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search Machine ID"
            className="w-full h-[48px] border border-[#dbe4f0] rounded-2xl bg-white pl-12 pr-4 text-sm shadow-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-5">
          <FiSliders className="text-2xl text-gray-600 cursor-pointer" />
          <MdPersonOutline className="text-2xl text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Machine Header Info */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 mb-6 shadow-sm grid grid-cols-2 gap-4">
        <InfoBox title="Machine ID" value="MC-2045" />
        <InfoBox title="Machine Name" value="Hydraulic Press A12" />
        <InfoBox title="Previous Faults" value="6" />
        <InfoBox title="Technician Assigned" value="R. Kumar" />
      </div>

      {/* Machine Metrics */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <MetricCard title="Temperature" value="78°C" />
        <MetricCard title="Vibration" value="2.3 mm/s" />
        <MetricCard title="Current Usage" value="16.4 A" />
      </div>

      {/* Graphs Section */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Machine Performance Graphs</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <GraphCard title="Time vs Heat" />
          <GraphCard title="Time vs Vibration" />
          <GraphCard title="Time vs Current" />

        </div>
      </div>

      {/* Maintenance Logs */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 shadow-sm">

        <h3 className="text-lg font-semibold mb-4">
          Past Maintenance Logs
        </h3>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Fault Description</th>
              <th className="text-left p-3">Technician</th>
              <th className="text-left p-3">Action Taken</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <LogRow
              date="2024-11-12"
              fault="Overheating detected"
              tech="R. Kumar"
              action="Replaced fan"
              status="Resolved"
            />
            <LogRow
              date="2024-10-21"
              fault="Abnormal vibration"
              tech="S. Raj"
              action="Alignment fixed"
              status="Resolved"
            />
            <LogRow
              date="2024-09-02"
              fault="Power fluctuation"
              tech="M. Anand"
              action="Wiring repaired"
              status="Resolved"
            />
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* ===== Reusable UI Components ===== */

const InfoBox = ({ title, value }) => (
  <div className="border border-[#dbe4f0] rounded-lg p-4 bg-[#f9fbff]">
    <p className="text-xs text-gray-500 mb-1">{title}</p>
    <p className="text-sm font-semibold text-gray-900">{value}</p>
  </div>
);

const MetricCard = ({ title, value }) => (
  <div className="bg-white border border-[#dbe4f0] rounded-xl px-6 py-5 text-center shadow-sm">
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

const GraphCard = ({ title }) => (
  <div className="border border-[#dbe4f0] rounded-xl p-4 bg-[#f9fbff]">
    <p className="text-sm font-medium mb-2 text-gray-700">{title}</p>
    <div className="h-[180px] bg-white rounded-lg flex items-center justify-center text-xs text-gray-400">
      {/* Replace with real chart later */}
      Chart Placeholder
    </div>
  </div>
);

const LogRow = ({ date, fault, tech, action, status }) => (
  <tr className="border-b last:border-none text-gray-700">
    <td className="p-3">{date}</td>
    <td className="p-3">{fault}</td>
    <td className="p-3">{tech}</td>
    <td className="p-3">{action}</td>
    <td className="p-3">
      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
        {status}
      </span>
    </td>
  </tr>
);
