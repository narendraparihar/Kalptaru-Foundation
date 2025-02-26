import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Manage Blogs</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">Manage Events</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
