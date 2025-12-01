import React from "react";
import { MdArrowDropDown, MdRefresh, MdPerson } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const MapPage = () => {
  return (
    <div className="bg-white w-full min-h-screen px-8 pt-6">

      {/* Search + Icons Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-[640px]">
          <AiOutlineSearch className="absolute top-3.5 left-4 text-gray-400 text-lg" />
          <input
            type="text"
            defaultValue="Chennai"
            className="w-full border border-[#dbe4f0] rounded-[14px] px-12 py-3 text-sm shadow-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-5">
          <MdRefresh className="text-xl text-gray-700 cursor-pointer" />
          <MdPerson className="text-xl text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Filters Row */}
      <div className="flex gap-4 mb-5">
        {["City", "State", "District", "Severity", "Manufacturer"].map((label) => (
          <div
            key={label}
            className="flex items-center justify-between border border-[#dbe4f0] rounded-lg px-4 py-2 text-sm w-[150px] bg-white shadow-sm"
          >
            <span className="text-gray-600">{label}</span>
            <MdArrowDropDown />
          </div>
        ))}
      </div>

     {/* Map Section */}
<div className="border border-[#dbe4f0] rounded-[16px] overflow-hidden shadow-sm mb-6">
  <iframe
    title="map"
    src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
    className="w-full h-[420px]"
    loading="lazy"
  />
</div>


      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Total Issues" value="24" label="Issues" />
        <StatCard title="Reported" value="1" label="New" />
        <StatCard title="In Progress" value="5" label="Progressing" />
        <StatCard title="Total Resolved" value="8" label="Done" />
      </div>
    </div>
  );
};

export default MapPage;

const StatCard = ({ title, value, label }) => {
  return (
    <div className="bg-white border border-[#dbe4f0] rounded-[16px] p-5 text-center shadow-sm">
      <h3 className="text-sm font-semibold text-gray-700 mb-1">{title}</h3>
      <h1 className="text-2xl font-bold text-black">{value}</h1>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
};
