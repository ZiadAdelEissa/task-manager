import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
export default function Taskitems({ items, editItems, deleteItems }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedname, setName] = useState(items.name);
  const [updatedDescription, setUpdatedDescription] = useState(items.desc);
  const [updatedStatus, setUpdatedStatus] = useState(items.status);

  const handleEdit = () => {
    editItems(items.id, {
      ...items,
      name: updatedname,
      desc: updatedDescription,
      status: updatedStatus,
    });
    setIsEditing(false);
  };

  const statusColor = {
    "Not Started": "red",
    "In Progress": "yellow",
    Finished: "green",
  }[items.status];
  return (
    <div className="task-item  flex flex-col justify-center items-center gap-3 ">
      {isEditing ? (
        <div
          className="card flex flex-col p-2 relative  w-[250px] h-[350px] justify-centre gap-6 items-center border-2 border-white rounded-md   text-black text-xl max-lg:w-[200px] max-lg:h-[300px] "
          style={{ backgroundColor: ` ${statusColor}` }}
        >
          <input
            className="bg-[#282727] w-[80%]  p-1 rounded-lg text-[#ffff] drop-shadow-xl text-lg  hover:scale-[1.05] hover:transition-all break-words line-clamp-3"
            type="text"
            value={updatedname}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-[#282727] w-[80%]  p-1 rounded-lg text-[#ffff] drop-shadow-xl text-lg hover:scale-[1.05] hover:transition-all break-words line-clamp-3"
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <select
            className="bg-[#282727] w-[80%]  p-1 rounded-lg text-[#ffff] drop-shadow-xl text-lg  hover:scale-[1.05] hover:transition-all"
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
          <button
            className=" absolute bottom-[5px]  p-1 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-[#c6c6c6c6] hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl w-[80px]"
            onClick={handleEdit}
          >
            save
          </button>
        </div>
      ) : (
        <div
          className="card flex flex-col p-2 relative w-[250px] h-[350px] justify-centre gap-6 items-center border-2 border-white rounded-md   text-black text-xl max-lg:w-[200px] max-lg:h-[300px]  "
          style={{ backgroundColor: ` ${statusColor}` }}
        >
          <h1 className="bg-[#282727] w-[80%]  p-1 rounded-lg text-[#ffff] drop-shadow-xl text-lg hover:scale-[1.05] hover:transition-all">
            {items.name}
          </h1>
          <p className=" content break-words line-clamp-3 bg-[#282727] w-[80%]  p-1 rounded-lg text-[#ffff] drop-shadow-xl text-lg hover:scale-[1.05] hover:transition-all">
            {items.desc}
          </p>
          <h2 className="bg-[#282727] w-[80%]  p-1 rounded-lg text-[#ffff] drop-shadow-xl text-lg hover:scale-[1.05] hover:transition-all">
            {items.status}
          </h2>
          <div className="buttons flex flex-wrap absolute  bottom-[5px]  gap-9 justify-between items-centre w-fit h-fit">
            <button
              className=" flex flex-wrap  justify-around items-center p-1 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-[#c6c6c6] hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl"
              onClick={() => setIsEditing(true)}
            >
            <BiSolidEdit className="w-[25px] h-[25px]" />
            </button>
            <button
              className=" flex flex-wrap  justify-around items-center p-1 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-[#c6c6c6] hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl"
              onClick={() => deleteItems(items.id)}
            >
              <MdDeleteForever className="w-[25px] h-[25px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
