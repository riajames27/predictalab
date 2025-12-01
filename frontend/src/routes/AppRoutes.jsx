// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Public Pages
import LandingPage from "../pages/LandingPage";
import RoleSelectPage from "../pages/RoleSelectPage";
import ClerkSignIn from "../pages/ClerkSignIn";
import ClerkSSOCallback from "../pages/ClerkSSOCallback";
import RoleRedirect from "./RoleRedirect";
import Unauthorized from "../pages/Unauthorized";

// Layout
import { Sidebar } from "../components/Sidebar";
import AtoSidebar from "../components/AtoSidebar";
import ToSidebar from "../components/ToSidebar";
import { Header } from "../components/Header";
import watermarkLogo from "../assets/ncvlogo.png";

// NCVET Dashboard Pages
import Home from "../dashboard/NCVET/Home";
import MapPage from "../dashboard/NCVET/MapPage";
import BranchesPage from "../dashboard/NCVET/BranchesPage";
import BranchDetailsPage from "../dashboard/NCVET/BranchDetailsPage";
import ComplaintsPage from "../dashboard/NCVET/ComplaintsPage";
import MaintenancePage from "../dashboard/NCVET/MaintenancePage";
import ReportsPage from "../dashboard/NCVET/ReportsPage";
import AuctionPage from "../dashboard/NCVET/AuctionPage";
import ManufacturersPage from "../dashboard/NCVET/ManufacturersPage";

// ATO Dashboard
import AtoHome from "../dashboard/ATO/AtoDashboard";
import AtoLogbookPage from "../dashboard/ATO/AtoLogbookPage";
import AttendancePage from "../dashboard/ATO/AttendancePage";
import TaskPage from "../dashboard/ATO/TaskPage";
import AtoMaintenance from "../dashboard/ATO/AtoMaintenance";
import AtoReports from "../dashboard/ATO/AtoReports";
import AtoNotifications from "../dashboard/ATO/AtoNotifications";

// TO Dashboard
import ToDashboard from "../dashboard/TO/ToDashboard";
import TOLogbookPage from "../dashboard/TO/TOLogbookPage";
import AttendanceMonitoring from "../dashboard/TO/AttendanceMonitoring";
import MachineMonitoring from "../dashboard/TO/MachineMonitoring";
import SchedulingPage from "../dashboard/TO/SchedulingPage";
import TasksPage from "../dashboard/TO/TasksPage";
import TOReports from "../dashboard/TO/TOReports";
import TOMaintenancePage from "../dashboard/TO/TOMaintenancePage";
import TONotificationsPage from "../dashboard/TO/NotificationsPage";

// ⭐ Dashboard Layout Wrapper
const DashboardLayout = ({ children, role }) => {
  const getSidebar = () => {
    if (role === "ASSISTANT_TRAINING_OFFICER") return <AtoSidebar />;
    if (role === "TRAINING_OFFICER") return <ToSidebar />;
    return <Sidebar />;
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#f5f7fa]">
      <Header />
      <div className="flex flex-1 overflow-hidden relative">
        {getSidebar()}
        {/* Watermark - Fixed Position */}
        <div className="fixed top-[55%] left-[57%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 z-0">
          <img 
            src={watermarkLogo} 
            alt="Watermark" 
            className="w-[600px] h-auto"
          />
        </div>
        <div className="flex-1 overflow-y-auto p-6 relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

// ⭐ Route Configuration Object
const routeConfig = {
  public: [
    { path: "/", element: <LandingPage /> },
    { path: "/select-role", element: <RoleSelectPage /> },
    { path: "/sign-in", element: <ClerkSignIn /> },
    { path: "/sign-in/sso-callback", element: <ClerkSSOCallback /> },
    { path: "/role-redirect", element: <RoleRedirect /> },
    { path: "/unauthorized", element: <Unauthorized /> },
  ],

  redirects: [
    { from: "/ncv/dashboard", to: "/ncv/dashboard/home" },
    { from: "/ato/dashboard", to: "/ato/dashboard/home" },
    { from: "/to/dashboard", to: "/to/dashboard/home" },
  ],

  protected: {
    POLICY_MAKER: [
      { path: "/ncv/dashboard/home", component: Home },
      { path: "/ncv/dashboard/map", component: MapPage },
      { path: "/ncv/dashboard/branches", component: BranchesPage },
      { path: "/ncv/dashboard/branches/:id", component: BranchDetailsPage },
      { path: "/ncv/dashboard/complaints", component: ComplaintsPage },
      { path: "/ncv/dashboard/maintenance", component: MaintenancePage },
      { path: "/ncv/dashboard/reports", component: ReportsPage },
      { path: "/ncv/dashboard/auction", component: AuctionPage },
      { path: "/ncv/dashboard/manufacturers", component: ManufacturersPage },
    ],
    ASSISTANT_TRAINING_OFFICER: [
      { path: "/ato/dashboard/home", component: AtoHome },
      { path: "/ato/dashboard/logbook", component: AtoLogbookPage },
      { path: "/ato/dashboard/attendance", component: AttendancePage },
      { path: "/ato/dashboard/tasks", component: TaskPage },
      { path: "/ato/dashboard/maintenance", component: AtoMaintenance },
      { path: "/ato/dashboard/reports", component: AtoReports },
      { path: "/ato/dashboard/notifications", component: AtoNotifications },
    ],
    TRAINING_OFFICER: [
      { path: "/to/dashboard/home", component: ToDashboard },
      { path: "/to/logbook", component: TOLogbookPage },
      { path: "/to/attendance", component: AttendanceMonitoring },
      { path: "/to/machine-monitoring", component: MachineMonitoring },
      { path: "/to/scheduling", component: SchedulingPage },
      { path: "/to/tasks", component: TasksPage },
      { path: "/to/reports", component: TOReports },
      { path: "/to/maintenance", component: TOMaintenancePage },
      { path: "/to/notifications", component: TONotificationsPage },
    ],
  },
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      {routeConfig.public.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* 🔀 Dashboard Redirects */}
      {routeConfig.redirects.map(({ from, to }) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}

      {/* 🔒 Protected Routes by Role */}
      {Object.entries(routeConfig.protected).map(([role, routes]) =>
        routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute allowedRoles={[role]}>
                <DashboardLayout role={role}>
                  <Component />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        ))
      )}
    </Routes>
  );
}
