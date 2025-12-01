import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const itis = [
  {
    name: "ANNA ITI",
    machines: 13,
    working: 10,
    students: 180,
    workforce: 18,
  },
  {
    name: "CHROMPET ITI",
    machines: 15,
    working: 12,
    students: 210,
    workforce: 20,
  },
  {
    name: "ADYAR TECH ITI",
    machines: 18,
    working: 16,
    students: 240,
    workforce: 22,
  },
  {
    name: "GUINDY ITI",
    machines: 20,
    working: 18,
    students: 260,
    workforce: 24,
  },
  {
    name: "TAMBARAM ITI",
    machines: 17,
    working: 13,
    students: 200,
    workforce: 19,
  },
  {
    name: "VELACHERY ITI",
    machines: 16,
    working: 14,
    students: 190,
    workforce: 17,
  },
];

export default function BranchDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const iti = itis[id] || itis[0];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">

      <h1 className="text-2xl font-semibold mb-6">
        Branch Details - {iti.name}
      </h1>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Machines" value={iti.machines} />
        <StatCard title="Working Machines" value={iti.working} />
        <StatCard title="Students" value={iti.students} />
        <StatCard title="Workforce Count" value={iti.workforce} />
      </div>

      <div className="flex gap-6 border-b mb-6 text-sm font-medium">
        <span className="pb-2 border-b-2 border-blue-600 text-blue-600">
          Overview
        </span>
        <span className="text-gray-500">Complaints</span>
        <span className="text-gray-500">Maintenance</span>
        <span className="text-gray-500">Machines</span>
        <span className="text-gray-500">Workforce</span>
        <span className="text-gray-500">Scheduling</span>
      </div>

      <h2 className="text-lg font-semibold mb-4">Branch Summary</h2>

      <div className="grid grid-cols-2 gap-6 mb-10">
        <ChartBox title="Machine Health Trend" />
        <ChartBox title="Complaint Trend" />
      </div>

      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>

      <div className="grid grid-cols-2 gap-6 text-sm mb-6">
        <Activity num="1" title="Complaint Received" time="Nov 24, 11:30 A.M" />
        <Activity num="2" title="Maintenance Task Completed" time="Nov 16, 10:30 A.M" />
        <Activity num="3" title="Machine Service" time="Sep 24, 11:30 A.M" />
        <Activity num="4" title="Complaint Solved" time="Jun 16, 10:30 A.M" />
      </div>

      <div className="flex justify-end mt-10">
        {/* ✅ ONLY PATH FIXED */}
        <button
          onClick={() => navigate("/ncv/dashboard/reports")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Generate Report →
        </button>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="border rounded-lg p-4 text-sm">
      <p className="text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function ChartBox({ title }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="h-[180px] bg-gray-100 rounded"></div>
    </div>
  );
}

function Activity({ num, title, time }) {
  return (
    <div className="flex gap-4">
      <span className="font-bold">{num}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{time}</p>
      </div>
    </div>
  );
}
