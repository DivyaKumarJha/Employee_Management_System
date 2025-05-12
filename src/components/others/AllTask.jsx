import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className='bg-gray-800 py-3 h-[calc(100vh-400px)] flex flex-col rounded'>
      <div className='bg-gray-700 mb-2 py-2 px-4 flex rounded justify-between'>
        <h2 className='text-white w-1/6 text-center'>Employee Name</h2>
        <h1 className='text-white w-1/6 text-center'>New Task</h1>
        <h3 className='text-white w-1/6 text-center'>Active Task</h3>
        <h4 className='text-white w-1/6 text-center'>Completed Task</h4>
        <h6 className='text-white w-1/6 text-center'>Failed</h6>
      </div>
      <div className='overflow-y-auto flex-1 pr-2 space-y-2'>
        {authData?.employees?.map((elem) => (
          <div key={elem.id || elem.firstName} className='bg-gray-800 py-2 px-3 flex justify-between hover:bg-gray-600 transition-colors rounded'>
            <h2 className='text-white w-1/6 text-center'>{elem.firstName}</h2>
            <h1 className='text-yellow-400 w-1/6 text-center'>{elem.taskCounts.newTask}</h1>
            <h3 className='text-blue-400 w-1/6 text-center'>{elem.taskCounts.active}</h3>
            <h4 className='text-green-400 w-1/6 text-center'>{elem.taskCounts.completed}</h4>
            <h6 className='text-red-400 w-1/6 text-center'>{elem.taskCounts.failed}</h6>
          </div>
        ))}
      </div>
      <style jsx>{`
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #4B5563 #1F2937;
        }
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1F2937;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #4B5563;
          border-radius: 4px;
          border: 2px solid #1F2937;
        }
      `}</style>
    </div>
  );
};

export default AllTask;