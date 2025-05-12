import React, { useState } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-2 flex flex-col ">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <div className="flex-1">
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;