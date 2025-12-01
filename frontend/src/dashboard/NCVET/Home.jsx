import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-[#f4f7fb] w-full min-h-full px-8 pt-6 pb-10">

      {/* Top Bar: Search + Icons */}
      <div className="flex items-center justify-between mb-6">

        {/* Search */}
        <div className="relative w-[600px] max-w-full">
          <AiOutlineSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[48px] border border-[#dbe4f0] rounded-2xl bg-white pl-12 pr-4 text-sm shadow-sm outline-none"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <FiSliders className="text-2xl text-gray-600 cursor-pointer" />
          <MdPersonOutline className="text-2xl text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <StatCard title="Total Branches" value="256" />
        <StatCard title="Students" value="14,520" />
        <StatCard title="Machines" value="1564" />
        <StatCard title="Complaints Raised" value="85" />
        <StatCard title="Technicians" value="423" />
      </div>

      {/* Map */}
      <div className="bg-white border border-[#dbe4f0] rounded-xl p-3 mb-6 shadow-sm">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[440px] rounded-xl"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Complaints */}
        <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Recent Complaints</h3>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="text-left pb-2">Branch</th>
                <th className="text-left pb-2">Issue</th>
                <th className="text-left pb-2">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {["Pune", "Chennai", "Kerala", "Kerala"].map((city, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-2">{city}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ITI Score */}
        <div className="bg-white border border-[#dbe4f0] rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">ITI SCORE</h3>

          <div className="flex items-end justify-between h-[200px]">
            {[
              "Chennai","Gujarat","Kerala","Bihar","Mumbai",
              "Delhi","Goa","Nashik","Punjab","Pune"
            ].map((name, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-6 h-[110px] bg-gray-200 rounded"></div>
                <div className="w-6 h-[55px] bg-blue-400 rounded -mt-2"></div>
                <span className="text-[11px] text-gray-500 mt-2">{name}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-200 rounded-full"></span> Volume
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full"></span> Service
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;

const StatCard = ({ title, value }) => (
  <div className="bg-white border border-[#dbe4f0] rounded-xl p-5 text-center shadow-sm">
    <div className="text-xl font-bold text-black">{value}</div>
    <div className="text-sm text-gray-500 mt-1">{title}</div>
  </div>
);
