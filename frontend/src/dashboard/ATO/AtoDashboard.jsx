import React from "react";
import { LuCalendarClock, LuMonitor, LuWrench, LuClipboardList } from "react-icons/lu";

export default function AtoDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">ATO DASHBOARD</h1>

      {/* 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Machine Scheduling */}
        <div className="bg-[#0A75C2] text-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#095fa8] transition">
          <LuCalendarClock size={50} />
          <div className="text-xl font-semibold">Machine Scheduling</div>
        </div>

        {/* Real-Time Monitoring */}
        <div className="bg-[#0A75C2] text-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#095fa8] transition">
          <LuMonitor size={50} />
          <div className="text-xl font-semibold">Real-Time Monitoring</div>
        </div>

        {/* Maintenance Log */}
        <div className="bg-[#0A75C2] text-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#095fa8] transition">
          <LuWrench size={50} />
          <div className="text-xl font-semibold">Maintenance Log</div>
        </div>

        {/* Attendance */}
        <div className="bg-[#0A75C2] text-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#095fa8] transition">
          <LuClipboardList size={50} />
          <div className="text-xl font-semibold">Attendance</div>
        </div>

      </div>
    </div>
  );
}
