import React from "react";
import { FiChevronRight } from "react-icons/fi";

export default function AtoReports() {
  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-[28px] font-bold mb-6">Reports Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">

        <StatCard title="Tasks Today" value="4" />
        <StatCard title="Pending Approvals" value="3" />
        <StatCard title="Active Machines" value="25" />
        <StatCard title="Attendance" value="96%" />
        <StatCard title="Log Book Enteries" value="120" />

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left – Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Reports categories</h2>

          <div className="grid grid-cols-2 gap-4">

            <CategoryCard label="Attendance" />
            <CategoryCard label="Logbooks" />
            <CategoryCard label="Tasks" />
            <CategoryCard label="Maintenance" />
            <CategoryCard label="Machines" />
            <CategoryCard label="Users" />

          </div>

          {/* Recent Generated Reports */}
          <h2 className="text-xl font-semibold mt-10 mb-4">
            Recent Generated Reports
          </h2>

          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">

            <RecentItem title="Monthly Attendance" date="Yesterday" />
            <RecentItem title="Daily Logbook Entries" date="Feb 25" />
            <RecentItem title="Task Completion Rate" date="Feb 25" />
            <RecentItem title="Quarterly Maintenance" date="Feb 25" />

          </div>
        </div>

        {/* Right – Quick Downloads */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Downloads</h2>

          <div className="space-y-4">

            <DownloadCard label="Attendance Summary" />
            <DownloadCard label="Monthly Report" />
            <DownloadCard label="Machine Overview" />

          </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Reusable Components */
/* ---------------------------------------------------------------------- */

const StatCard = ({ title, value }) => (
  <div className="bg-white shadow-sm rounded-xl border p-6 text-center">
    <div className="text-3xl font-bold text-gray-900">{value}</div>
    <div className="text-gray-500 text-sm">{title}</div>
  </div>
);

const CategoryCard = ({ label }) => (
  <div className="bg-white shadow-sm border rounded-xl p-4 text-center font-medium cursor-pointer hover:bg-gray-50 transition">
    {label}
  </div>
);

const RecentItem = ({ title, date }) => (
  <div className="flex justify-between items-center px-4 py-4 border-b last:border-none hover:bg-gray-50 transition">
    <span className="font-medium">{title}</span>
    <span className="text-gray-500 text-sm">{date}</span>
  </div>
);

const DownloadCard = ({ label }) => (
  <button className="w-full text-left bg-white border rounded-xl p-4 shadow-sm hover:bg-gray-50 flex items-center justify-between">
    <span className="font-medium text-[15px]">{label}</span>
    <FiChevronRight className="text-gray-500 text-xl" />
  </button>
);
