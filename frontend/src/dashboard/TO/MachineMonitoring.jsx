import React, { useEffect, useState } from "react";

export default function MachineMonitoring() {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch from InfluxDB (auto-refresh every 5 sec)
  const fetchData = async () => {
    try {
      const fluxQuery = `from(bucket: "iot_machines")
  |> range(start: -1h)
  |> filter(fn: (r) => r._measurement == "machine_sensors")
  |> filter(fn: (r) => r._field == "current" or r._field == "temperature" or r._field == "vibration_status")
  |> sort(columns: ["_time"], desc: true)
  |> limit(n: 300)`;

      const res = await fetch(
        "https://us-east-1-1.aws.cloud2.influxdata.com/api/v2/query?org=openai",
        {
          method: "POST",
          headers: {
            Authorization: "Token 2ad_GwjeafS_FZvseQb_5zTrNJOn8MzuvdBr4NKRHkkcFIAzXScPkoFfoF6fyLkrXzLOEOfgSX2xs_adSKy6Jw==",
            "Content-Type": "application/vnd.flux",
            Accept: "application/csv",
          },
          body: fluxQuery,
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("InfluxDB Error Response:", errorText);
        throw new Error(`InfluxDB Error: ${res.status}`);
      }

      const text = await res.text();
      console.log("InfluxDB Raw Response:", text); // Debug log
      
      const rows = text.trim().split("\n");
      if (rows.length < 2) {
        console.log("No data rows found");
        setMachines([]);
        setLoading(false);
        return;
      }
      
      const headers = rows[0].split(",");
      console.log("Headers:", headers);
      
      const machineMap = {};
      
      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        
        const cols = rows[i].split(",");
        const record = {};
        
        headers.forEach((header, idx) => {
          record[header.trim()] = cols[idx]?.trim();
        });
        
        const machineId = record.machineId || record.machine_id;
        const field = record._field;
        const value = record._value;
        
        if (!machineId) continue;
        
        if (!machineMap[machineId]) {
          machineMap[machineId] = {
            machine_id: machineId,
            machine_type: record.machineType || record.machine_type || "Unknown",
            timestamp: record._time,
          };
        }
        
        // Map field values
        if (field === "current") {
          machineMap[machineId].current = value;
        } else if (field === "temperature") {
          machineMap[machineId].temperature = value;
        } else if (field === "vibration_status") {
          machineMap[machineId].vibration = value;
        }
        
        // Get prediction label from overall_status or source
        if (record.overall_status) {
          machineMap[machineId].prediction_label = record.overall_status;
        }
      }
      
      const machineArray = Object.values(machineMap);
      console.log("Parsed Machines:", machineArray);
      setMachines(machineArray);
      setLoading(false);
    } catch (err) {
      console.error("InfluxDB Fetch Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // auto-refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Machine Monitoring</h1>

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-600 font-medium">
              <th className="py-3 px-4">Machine ID</th>
              <th className="py-3 px-4">Machine Type</th>
              <th className="py-3 px-4">Temp</th>
              <th className="py-3 px-4">Vibration</th>
              <th className="py-3 px-4">Current (A)</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-500">
                  Loading machine data...
                </td>
              </tr>
            ) : (
              machines.map((m, index) => {
                // Use the prediction label from InfluxDB
                const predictionLabel = m.prediction_label || m.prediction || "Unknown";
                const statusLower = predictionLabel.toLowerCase();
                
                let statusColor = "bg-gray-200 text-gray-700"; // default
                if (statusLower === "good" || statusLower === "healthy") {
                  statusColor = "bg-green-200 text-green-700";
                } else if (statusLower === "alert" || statusLower === "warning") {
                  statusColor = "bg-orange-200 text-orange-700";
                } else if (statusLower === "critical" || statusLower === "danger") {
                  statusColor = "bg-red-200 text-red-700";
                }

                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{m.machine_id}</td>
                    <td className="py-3 px-4">{m.machine_type}</td>
                    <td className="py-3 px-4">{m.temperature}°C</td>
                    <td className="py-3 px-4">{m.vibration}</td>
                    <td className="py-3 px-4">{m.current}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${statusColor}`}
                      >
                        {predictionLabel}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
