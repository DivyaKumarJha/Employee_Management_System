import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  );
};


export default EmployeeDashboard