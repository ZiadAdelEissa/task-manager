import React, { useState } from 'react'

export default function Taskitems({items , editItems, deleteItems}) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState(items.desc);
    const [updatedStatus, setUpdatedStatus] = useState(items.status);
  
    const handleEdit = () => {
      editItems(items.id, { ...items, description: updatedDescription, status: updatedStatus });
      setIsEditing(false);
    };
  
    const statusColor = {
      'Not Started': 'red',
      'In Progress': 'yellow',
      'Finished': 'green',
    }[items.status];
  return (
    <div className="task-item w-full flex gap-3 "   >
    {isEditing ? (
      <div>
        <input
          type="text"
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
        <select
          value={updatedStatus}
          onChange={(e) => setUpdatedStatus(e.target.value)}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Finished">Finished</option>
        </select>
        <button onClick={handleEdit}>Save</button>
      </div>
    ) : (
  
   <div className='card flex flex-col relative w-[300px] h-[350px] justify-centre gap-6 items-centre border-2 border-white rounded-md   text-black text-2xl  ' style={{ backgroundColor: ` ${statusColor}` }} >
    <h1>{items.name}</h1>
    <p className='line-clamp-3'>{items.desc}</p>
    <h2>{items.status}</h2>
    <div className='buttons flex flex-wrap absolute  bottom-[5px] justify-evenly items-end w-full h-fit'>
        <button className=' flex flex-wrap  justify-around items-center p-1 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-[#757575] hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl' onClick={() => setIsEditing(true)}>Edit</button>
        <button className=' flex flex-wrap  justify-around items-center p-1 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-[#707070] hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl' onClick={() => deleteItems(items.id)}>Delete</button>
        </div>
    
    </div>
    
   
    )}
  </div>
  )
}
