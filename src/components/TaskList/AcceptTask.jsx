import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({task, employeeId}) => {
  const { employees, updateEmployees } = useContext(AuthContext);

  const handleTaskStatus = (status) => {
    if (!employees) return;
    
    // Update the task status and counts for the employee
    const updatedEmployees = employees.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(t => {
          if (t.title === task.title && t.date === task.date) {
            return { 
              ...t, 
              active: false, 
              completed: status === 'completed',
              failed: status === 'failed'
            };
          }
          return t;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active - 1,
            completed: status === 'completed' ? emp.taskCounts.completed + 1 : emp.taskCounts.completed,
            failed: status === 'failed' ? emp.taskCounts.failed + 1 : emp.taskCounts.failed
          }
        };
      }
      return emp;
    });

    // Update both localStorage and context state
    updateEmployees(updatedEmployees);
  };

  return (
    <div
      className='flex-shrink-0 h-full overflow-auto w-[300px] p-3 bg-green-700 rounded-xl'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        div::-webkit-scrollbar {
        display: none;
        }`}
      </style>
      <div className='flex justify-between items-center px-1 py-1'>
        <h1 className='bg-red-500 text-sm px-3 py-1 rounded'>{task.category}</h1>
        <h2 className='text-sm'>{task.date}</h2>
      </div>
      <h2 className='mt-5, font-semibold text-xl'>
        {task.title}
      </h2>
      <p className='text-sm mt-3'>
        {task.description}
      </p>
      <div className='flex justify-between mt-4'>
        <button 
          onClick={() => handleTaskStatus('completed')}
          className='bg-green-500 py-1 px-2 text-sm rounded hover:bg-green-600 transition'
        >
          Mark as Completed
        </button>
        <button 
          onClick={() => handleTaskStatus('failed')}
          className='bg-red-500 py-1 px-2 text-sm rounded hover:bg-red-600 transition'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;