import React from 'react'

const TaskListNumber = ({data}) => {
     console.log("TaskListNumber data:", data);
     if (!data || !data.taskCounts) {
          return null; // or a loading indicator
        }
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
     <div className='rounded-xl bg-red-400 w-[45%] px-9 py-6'>
          <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
     </div>
     <div className='rounded-xl bg-blue-400 w-[45%] px-9 py-6'>
          <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
          <h3 className='text-xl font-medium'>Accepted Task</h3>
     </div>
     <div className='rounded-xl bg-yellow-400 w-[45%] px-9 py-6'>
          <h2 className='text-3xl text-black font-semibold'>{data.taskCounts.completed}</h2>
          <h3 className='text-xl text-black font-medium'>Complete Task</h3>
     </div>
     <div className='rounded-xl bg-green-400 w-[45%] px-9 py-6'>
          <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
     </div>



    </div>
  )
}

export default TaskListNumber