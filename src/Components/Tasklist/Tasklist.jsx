import React from 'react'
import Taskitems from '../Taskitems/Taskitems'

export default function Tasklist({ items , editItems , deleteItems }) {
  return (
    <div className='tasklist grid grid-cols-4 justify-items-center self-center w-full h-full gap-6 max-lg:grid max-lg:grid-cols-2 max-md:grid max-md:grid-cols-1  font-mono '>
      {  items.map((task)=>(
            <Taskitems key={task.id} items={task} editItems={editItems} deleteItems={deleteItems} />
        ))
      }
    </div>
  )
}
