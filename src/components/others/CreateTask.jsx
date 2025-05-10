import React from 'react'

const CreateTask = () => {
  return (
     <div className='mb-2 h-50'>
          <form className="flex w-full items-start mt-5 justify-between gap-5">
           {/* Left Side: Form Inputs */}
           <div className="w-full md:w-1/2 flex flex-col space-y-4">
             <div>
               <h3 className="text-white mb-2">Task Title</h3>
               <input
                 type="text"
                 placeholder="Make a UI design"
                 className="w-full p-3 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300"
               />
             </div>

             <div>
               <h3 className="text-white mb-2">Date</h3>
               <input
                 type="date"
                 className="w-full p-3 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300"
               />
             </div>

             <div>
               <h3 className="text-white mb-2">Assign to</h3>
               <input
                 type="text"
                 placeholder="Employee Name"
                 className="w-full p-3 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300"
               />
             </div>

             <div>
               <h3 className="text-white mb-2">Category</h3>
               <input
                 type="text"
                 placeholder="design, dev, etc"
                 className="w-full p-3 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300"
               />
             </div>
           </div>

           {/* Right Side: Description and Button */}
           <div className="w-full md:w-1/2 flex flex-col gap-2 space-y-4">
             <div>
               <h3 className="text-white mb-2">Description</h3>
               <textarea
                 name="description"
                 id="description"
                 cols="30"
                 rows="10"
                 className="w-full p-3 bg-gray-900 text-white border border-gray-500 rounded focus:outline-none focus:border-gray-300 resize-none"
               ></textarea>
             </div>
             <button className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
               Create Task
             </button>
           </div>
         </form>

     </div>
    
  )
}

export default CreateTask