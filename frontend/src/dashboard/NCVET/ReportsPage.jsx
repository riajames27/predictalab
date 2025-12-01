import React, { useEffect, useState } from "react";

const ReportsPage = () => {
  const [report, setReport] = useState(null);

  // ✅ Simulated backend fetch
  useEffect(() => {
    const fetchReportData = async () => {
      // Replace this with real API later
      const data = {
        institute: {
          name: "ANNA ITI",
          address: "Guindy, Chennai",
          state: "Tamil Nadu",
          district: "Chennai",
          year: "1998",
          type: "Government",
          misCode: "TN-ITI-0098",
          trades: ["Fitter", "Electrician", "Welder"],
        },
        infrastructure: {
          classrooms: 12,
          workshops: 4,
          labs: 6,
          computerLab: 1,
          safetyEquipment: "Available",
          library: "Yes",
          hostel: "Available",
        },
        staff: {
          instructors: 18,
          qualifications: "Diploma / BE",
          academicCalendar: "2024–25",
          timetable: "Uploaded",
          attendance: "92%",
          industryTieups: "TATA, Ashok Leyland",
        },
        students: {
          total: 520,
          passRate: "87%",
          placements: 320,
          apprenticeships: 120,
          assessments: "Quarterly",
        },
        compliance: {
          audits: "Completed",
          inspections: "Quarterly",
          correctiveActions: "2 Pending",
          safetyCompliance: "100%",
          bestPractices: "ISO Certified",
        },
      };

      setReport(data);
    };

    fetchReportData();
  }, []);

  if (!report) {
    return <div className="p-8 text-gray-500">Loading report data...</div>;
  }

  return (
    <div className="bg-[#f6f9fc] min-h-screen p-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-8">Institute Report</h1>

      {/* Section Wrapper */}
      <Section title="Institute Profile">
        <Row label="Name" value={report.institute.name} />
        <Row label="Address" value={report.institute.address} />
        <Row label="State" value={report.institute.state} />
        <Row label="District" value={report.institute.district} />
        <Row label="Established Year" value={report.institute.year} />
        <Row label="Type" value={report.institute.type} />
        <Row label="MIS Code" value={report.institute.misCode} />
        <Row label="Trades Offered" value={report.institute.trades.join(", ")} />
      </Section>

      <Section title="Infrastructure Details">
        <Row label="Classrooms" value={report.infrastructure.classrooms} />
        <Row label="Workshops" value={report.infrastructure.workshops} />
        <Row label="Laboratories" value={report.infrastructure.labs} />
        <Row label="Computer Labs" value={report.infrastructure.computerLab} />
        <Row label="Safety Equipment" value={report.infrastructure.safetyEquipment} />
        <Row label="Library" value={report.infrastructure.library} />
        <Row label="Hostel Facility" value={report.infrastructure.hostel} />
      </Section>

      <Section title="Staff & Training">
        <Row label="Instructors" value={report.staff.instructors} />
        <Row label="Qualifications" value={report.staff.qualifications} />
        <Row label="Academic Calendar" value={report.staff.academicCalendar} />
        <Row label="Attendance" value={report.staff.attendance} />
        <Row label="Industry Tie-ups" value={report.staff.industryTieups} />
      </Section>

      <Section title="Student Performance">
        <Row label="Total Students" value={report.students.total} />
        <Row label="Pass Rate" value={report.students.passRate} />
        <Row label="Placements" value={report.students.placements} />
        <Row label="Apprenticeships" value={report.students.apprenticeships} />
        <Row label="Assessment Cycle" value={report.students.assessments} />
      </Section>

      <Section title="Compliance & Quality">
        <Row label="Audit Status" value={report.compliance.audits} />
        <Row label="Inspections" value={report.compliance.inspections} />
        <Row label="Corrective Actions" value={report.compliance.correctiveActions} />
        <Row label="Safety Compliance" value={report.compliance.safetyCompliance} />
        <Row label="Best Practices" value={report.compliance.bestPractices} />
      </Section>

      {/* ✅ Buttons (No Generate Report) */}
      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-2 rounded-lg border bg-white hover:bg-gray-50">
          Preview
        </button>
        <button className="px-6 py-2 rounded-lg border bg-white hover:bg-gray-50">
          Download PDF
        </button>
      </div>

    </div>
  );
};

export default ReportsPage;

/* ---------- Reusable UI Components ---------- */

const Section = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
      {children}
    </div>
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between border-b last:border-none py-1">
    <span className="text-gray-600 text-sm">{label}</span>
    <span className="font-medium text-sm text-gray-900">{value}</span>
  </div>
);
