import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
     if (!data || !data.tasks) {
          return null; // or a loading message
        }
     console.log(data)
  return (
    <div id='tasklist' className='h-[47%] flex overflow-x-auto items-center gap-5 justify-start flex-nowrap  py-5 mt-5'>
     {data.tasks.map((elem, index) => {
          if (elem.active) {
          return <AcceptTask key={index} task={elem} employeeId={data.id} />;
          }
          if (elem.newTask) {
          return <NewTask key={index} task={elem} employeeId={data.id} />;
          }
          if (elem.failed) {
          return <FailedTask key={index} task={elem} />;
          }
          if (elem.completed) {
           return <CompleteTask key={index} task={elem} />;
          }
          return null;
     })}
     {/* <AcceptTask/>
     <NewTask/>
     <CompleteTask/>
     <FailedTask/> */}
    
   


    </div>
  )
}

export default TaskList