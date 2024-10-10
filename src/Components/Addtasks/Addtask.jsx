import React, { useState } from "react";
import adding from "../img/add.png";
import {v4 as uuidv4} from 'uuid'
export default function Addtask({ addItem }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("Not Started");
  const handleAdd = (event) => {
    event.preventDefault();
    addItem({id:uuidv4(), name, desc, status });
    setName("");
    setDesc("");
    setStatus("Not Started");
  };
  return (
    <form
      onSubmit={handleAdd}
      className="addingdetails flex flex-col  justify-evenly items-center w-full h-[300px] p-3 border-solid border-2 border-white rounded-md bg-[#90919191] drop-shadow-xl  "
    >
      <input
        className="itemname  bg-[#282727]  p-1 rounded-lg text-yellow-600 drop-shadow-xl hover:scale-[1.05] hover:transition-all"
        type="text"
        placeholder="Task Name        "
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="itemname  bg-[#282727]  p-1 rounded-lg text-yellow-600 drop-shadow-xl hover:scale-[1.05] hover:transition-all "
        type="text"
        placeholder="Task description "
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className=" bg-[#282727]  p-1 rounded-lg text-yellow-600 drop-shadow-xl hover:scale-[1.05] hover:transition-all"
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Finished">Finished</option>
      </select>
      <button className="addbtn flex flex-wrap  justify-around items-center p-3 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-yellow-600 hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl" type="submit">
        AddItem
        <img
          src={adding}
          alt="addicon"
          loading="lazy loading "
          className="w-[25px] h-[25px] ml-1"
        />
      </button>
    </form>
  );
}
