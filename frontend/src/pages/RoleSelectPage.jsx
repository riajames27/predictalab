import React from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  "POLICY_MAKER",
  "LAB_PRINCIPAL",
  "TRAINING_OFFICER",
  "ASSISTANT_TRAINING_OFFICER",
  "MAINTENANCE",
  "STUDENTS",
];

export default function RoleSelectPage() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/sign-in?role=${role}`);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fa]">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-[400px] text-center">
        <h1 className="text-xl font-bold mb-6">Select Your Role</h1>

        <div className="flex flex-col gap-4">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleSelect(role)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
