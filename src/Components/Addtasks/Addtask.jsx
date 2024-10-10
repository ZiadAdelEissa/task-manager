import React, { useState } from "react";
import adding from "../img/add.png";
export default function Addtask() {
  const [task, setTask] = useState("");
  console.log(task);
  function handleInputValue(event) {
    setTask(event.target.value);
  }
  return (
    <form className="addingdetails flex flex-col justify-evenly items-center w-full h-[200px] p-3 border-solid border-2 border-white rounded-md bg-[#90919191] drop-shadow-xl  ">
      <input
        className="itemname  bg-[#282727]  p-1 rounded-lg text-yellow-600 drop-shadow-xl hover:scale-[1.05] hover:transition-all"
        type="text"
        placeholder="Item Name        "
        onChange={handleInputValue}
      />
      <input
        className="itemname  bg-[#282727]  p-1 rounded-lg text-yellow-600 drop-shadow-xl hover:scale-[1.05] hover:transition-all "
        type="text"
        placeholder="Item description "
        onChange={handleInputValue}
      />
      <button className="addbtn flex flex-wrap  justify-around items-center p-3 bg-[#282727] text-white rounded-xl drop-shadow-lg hover:bg-yellow-600 hover:text-black hover:scale-[1.1] hover:transition-all hover:drop-shadow-xl">
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
