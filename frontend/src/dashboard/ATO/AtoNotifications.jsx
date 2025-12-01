import React from "react";
import { FaCircle } from "react-icons/fa";
import { BsCheck2All, BsTrash, BsBell } from "react-icons/bs";

export default function AtoNotifications() {
  const notifications = [
    {
      title: "Machine B Overheating Alert",
      description: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      category: "Maintenance",
    },
    {
      title: "Machine B Overheating Alert",
      description: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      category: "Attendance",
    },
    {
      title: "Machine B Overheating Alert",
      description: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      category: "Tasks",
    },
    {
      title: "Machine B Overheating Alert",
      description: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      category: "System",
    },
    {
      title: "Machine B Overheating Alert",
      description: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      category: "Attendance",
    },
    {
      title: "Machine B Overheating Alert",
      description: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      category: "Tasks",
    },
  ];

  return (
    <div className="p-6">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      {/* TOP STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: "4", label: "Tasks Today" },
          { value: "3", label: "Pending Approvals" },
          { value: "25", label: "Active Machines" },
          { value: "96%", label: "Attendance" },
          { value: "120", label: "Log Book Enteries" },
        ].map((box, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 shadow-sm text-center bg-white"
          >
            <p className="text-3xl font-semibold">{box.value}</p>
            <p className="text-gray-500 text-sm">{box.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* NOTIFICATIONS LIST */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {notifications.map((note, index) => (
              <div
                key={index}
                className="border bg-white p-4 rounded-lg shadow-sm flex justify-between items-start"
              >
                <div className="flex gap-4">
                  <FaCircle className="text-red-500 mt-1" size={10} />

                  <div>
                    <p className="font-semibold text-gray-700">{note.title}</p>
                    <p className="text-gray-500 text-sm">{note.description}</p>
                  </div>
                </div>

                <div className="text-right text-sm">
                  <p className="text-gray-500">{note.time}</p>
                  <p className="text-blue-600 font-medium">{note.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ACTIONS AREA */}
        <div className="space-y-6">

          {/* Quick Actions */}
          <div className="border bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>

            <div className="space-y-4 text-blue-600 font-medium text-sm">
              <button className="flex items-center gap-2 hover:underline">
                <BsCheck2All size={18} />
                Mark all as read
              </button>

              <button className="flex items-center gap-2 hover:underline">
                <BsTrash size={18} />
                Clear all Notification
              </button>

              <button className="flex items-center gap-2 hover:underline">
                <BsBell size={18} />
                Notification Checks
              </button>
            </div>
          </div>

          {/* Grouped Notification */}
          <div className="border bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Grouped Notification</h2>
            <p className="text-gray-500 text-sm">View all grouped alerts</p>
          </div>

          {/* Important Alerts */}
          <div className="border bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-2">Important Alerts</h2>
            <p className="text-gray-500 text-sm">
              Review high-priority notifications
            </p>
          </div>

          {/* Duplicate Quick Actions (Bottom) */}
          <div className="border bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>

            <div className="space-y-4 text-blue-600 font-medium text-sm">
              <button className="flex items-center gap-2 hover:underline">
                <BsCheck2All size={18} />
                Mark all as read
              </button>

              <button className="flex items-center gap-2 hover:underline">
                <BsTrash size={18} />
                Clear all Notification
              </button>

              <button className="flex items-center gap-2 hover:underline">
                <BsBell size={18} />
                Notification Checks
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
