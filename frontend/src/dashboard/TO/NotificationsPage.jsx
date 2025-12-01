import { FiBell, FiCheckCircle } from "react-icons/fi";

export default function TONotificationsPage() {
  const notifications = [
    {
      title: "Machine B Overheating Alert",
      message: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      tag: "Maintenance",
      color: "text-blue-600"
    },
    {
      title: "Machine B Overheating Alert",
      message: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      tag: "Attendance",
      color: "text-green-600"
    },
    {
      title: "Machine B Overheating Alert",
      message: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      tag: "Tasks",
      color: "text-gray-600"
    },
    {
      title: "Machine B Overheating Alert",
      message: "Temperature Exceed Threshold at 11:30AM",
      time: "10 min ago",
      tag: "System",
      color: "text-gray-600"
    }
  ];

  return (
    <div className="p-6 w-full">
      {/* ------------ Page Title ------------ */}
      <h1 className="text-3xl font-semibold mb-6">Notifications</h1>

      {/* ---------- Stats Row ---------- */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[
          { label: "Tasks Today", value: 4 },
          { label: "Pending Approvals", value: 3 },
          { label: "Active Machines", value: 25 },
          { label: "Attendance", value: "96%" },
          { label: "Log Book Enteries", value: 120 }
        ].map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 bg-white text-center shadow-sm"
          >
            <p className="text-3xl font-semibold">{item.value}</p>
            <p className="text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* ------------ Notifications List ------------ */}
        <div className="col-span-2 space-y-4">
          {notifications.map((n, index) => (
            <div
              key={index}
              className="w-full bg-white border rounded-xl p-4 shadow-sm flex justify-between items-start"
            >
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-red-600 mt-2"></div>

                <div>
                  <p className="font-medium">{n.title}</p>
                  <p className="text-gray-600 text-sm">{n.message}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-gray-400 text-sm">{n.time}</p>
                <p className={`font-medium text-sm ${n.color}`}>{n.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ------------ Right Section (Actions) ------------ */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="border bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-xl mb-4">Quick Actions</h2>

            <button className="text-blue-600 font-medium hover:underline block">
              Mark all as read
            </button>
            <button className="text-blue-600 font-medium hover:underline block mt-2">
              Clear all Notification
            </button>
            <button className="text-blue-600 font-medium hover:underline block mt-2">
              Notification Checks
            </button>
          </div>

          {/* Grouped Notifications */}
          <div className="border bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-xl">Grouped Notification</h2>
          </div>

          {/* Important Alerts */}
          <div className="border bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-xl">Important Alerts</h2>
          </div>

          {/* Quick Actions 2 */}
          <div className="border bg-white rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold text-xl mb-4">Quick Actions</h2>

            <button className="text-blue-600 font-medium hover:underline block">
              Mark all as read
            </button>
            <button className="text-blue-600 font-medium hover:underline block mt-2">
              Clear all Notification
            </button>
            <button className="text-blue-600 font-medium hover:underline block mt-2">
              Notification Checks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
