import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({task, employeeId}) => {
  const { employees, updateEmployees } = useContext(AuthContext);

  const handleAcceptTask = () => {
    if (!employees) return;

    // Update the task status and counts for the employee
    const updatedEmployees = employees.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(t => {
          if (t.title === task.title && t.date === task.date) {
            return { ...t, newTask: false, active: true };
          }
          return t;
        });

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask - 1,
            active: emp.taskCounts.active + 1
          }
        };
      }
      return emp;
    });

    // Update both localStorage and context state
    updateEmployees(updatedEmployees);
  };

  const handleRejectTask = () => {
    if (!employees) return;

    // Update the employee's tasks by removing the rejected task
    const updatedEmployees = employees.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.filter(t => 
          !(t.title === task.title && t.date === task.date)
        );

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask - 1
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
        <h2>{task.date}</h2>
      </div>
      <h2 className='mt-5, font-semibold text-xl'>
        {task.title}
      </h2>
      <p className='text-sm mt-3'>
        {task.description}
      </p>
      <div className='mt-4 flex flex-col gap-2'>
        <button 
          onClick={handleAcceptTask}
          className='bg-green-500 flex justify-center rounded py-1 px-2 text-sm w-full hover:bg-green-600 transition'
        >
          Accept Task
        </button>
        <button 
          onClick={handleRejectTask}
          className='bg-red-500 flex justify-center rounded py-1 px-2 text-sm w-full hover:bg-red-600 transition'
        >
          Reject Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;