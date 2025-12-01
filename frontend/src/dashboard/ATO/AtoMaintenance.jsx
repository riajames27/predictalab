import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#2F80ED", "#F2C94C", "#EB5757"]; // Blue, Yellow, Red

const data = [
  { name: "Working", value: 60 },
  { name: "Idle", value: 25 },
  { name: "Waiting", value: 15 },
];

export default function AtoMaintenance() {
  return (
    <div className="w-full p-6">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-semibold mb-6">Maintenance</h1>

      {/* TOP CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <Card title="Tasks Today" value="4" />
        <Card title="Pending Approvals" value="3" />
        <Card title="Active Machines" value="25" />
        <Card title="Attendance" value="96%" />
        <Card title="Log Book Enteries" value="120" />
      </div>

      {/* MAIN GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT — PIE CHART */}
        <div className="col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Overall Machine Stats</h2>

          <div className="flex items-center">
            {/* Chart */}
            <div className="w-1/2 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {data.map((entry, idx) => (
                      <Cell key={idx} fill={COLORS[idx]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="w-1/2 text-sm space-y-2">
              <LegendItem color="#2F80ED" label="Working" />
              <LegendItem color="#F2C94C" label="Idle" />
              <LegendItem color="#EB5757" label="Waiting" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm mt-4 border-t pt-4">
            <div>
              <p>Inspection</p>
              <p>Temperature</p>
              <p>Vibration</p>
            </div>

            <div className="text-gray-600">
              <p>Feb 15</p>
              <p>67 C</p>
              <p>2.4 mn/s</p>
            </div>

            <button className="text-blue-600 hover:underline text-sm">
              View All
            </button>
          </div>
        </div>

        {/* RIGHT — UPCOMING */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming</h2>

          <UpcomingItem date="Feb 15" title="Full Maintenance" />
          <UpcomingItem date="May 20" title="Full Maintenance" />
          <UpcomingItem date="Nov 25" title="Full Maintenance" />

          <button className="text-blue-600 mt-4 hover:underline text-sm">
            Apply for Maintenance
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        {/* Bottom Left */}
        <div className="col-span-2 bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Overall Machine Stats</h2>

          <div className="flex justify-between text-sm">
            <div>
              <p>Temperature</p>
              <p>Vibration</p>
            </div>

            <div className="text-gray-600">
              <p>67 C</p>
              <p>2.4 mn/s</p>
            </div>

            <div>
              <p>Inspection</p>
              <p>Inspection</p>
              <p>Inspection</p>
            </div>

            <div className="text-gray-600">
              <p>Feb 15</p>
              <p>Feb 15</p>
              <p>Feb 15</p>
            </div>

            <button className="text-blue-600 hover:underline text-sm">
              View All
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

          <ActivityItem title="Machine A" time="30 mins" />
          <ActivityItem title="Machine B" time="20 mins" />
          <ActivityItem title="Machine C" time="2 hrs" />

          <button className="text-blue-600 mt-4 hover:underline text-sm">
            View Full Machine Status
          </button>
        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */

const Card = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col text-center">
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-gray-600 text-sm">{title}</p>
  </div>
);

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span
      className="w-3 h-3 rounded-full"
      style={{ backgroundColor: color }}
    ></span>
    <span className="text-gray-600">{label}</span>
  </div>
);

const UpcomingItem = ({ date, title }) => (
  <div className="flex justify-between text-sm mb-3">
    <span>{date}</span>
    <span>{title}</span>
  </div>
);

const ActivityItem = ({ title, time }) => (
  <div className="flex justify-between text-sm mb-3">
    <span>{title}</span>
    <span>{time}</span>
  </div>
);
