import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-500">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
