import React , {useState }from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-2">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};



export default AdminDashboard