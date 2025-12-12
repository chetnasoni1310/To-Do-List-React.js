import React from 'react'
import ToDoTask from './ToDoTask'

function ToDoList({taskData , editTask , deleteTask}) {

  if(taskData.length === 0)
  {
    return  <div 
    className=
        'mt-12 mx-auto w-2/5 py-4 px-2 bg-zinc-600 flex flex-col justify-center items-center gap-8 rounded-xl'>
          <p className='text-white font-semibold text-lg pb-0'>OOPs !</p>
          <p className='text-white text-md font-medium pt-0'>No task added yet!</p>
        </div>
  }

  return (
    <div 
    className=
        'mt-12 mx-auto w-5/6 py-14 px-2 bg-zinc-600 flex flex-col justify-center items-center gap-8 rounded-xl'>
          {
            taskData.map((item , index) => (
              <ToDoTask key={index} data = {item} editTask ={editTask} deleteTask ={deleteTask} />
            ))
          }
    </div>
  )
}

export default ToDoList
