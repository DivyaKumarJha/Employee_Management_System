import { data } from 'autoprefixer'
import React from 'react'

const AcceptTask = ({task}) => {
     // console.log()
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-3 bg-green-700 rounded-xl'>
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
          <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Accepted</button>
          <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>

     </div>
     
</div>
  )
}

export default AcceptTask