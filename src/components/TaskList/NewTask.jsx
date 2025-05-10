import React from 'react'

const NewTask = ({task}) => {
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-3 bg-green-700 rounded-xl'>
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
     <div className='mt-4'>
          <button className='bg-yellow-500 flex justify-between rounded py-1 px-2 text-sm'>Accept New Task</button>
     </div>
     
</div>
  )
}

export default NewTask