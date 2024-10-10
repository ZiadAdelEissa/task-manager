import React, { useState } from "react";
import logo from "../img/logo.png";
import Addtask from "../Addtasks/Addtask";
import Tasklist from "../Tasklist/Tasklist";
export default function Home() {
  const [itemlist, setItemList] = useState([]);
  console.log(itemlist);
  const addItem = (task) => {
    setItemList([...itemlist, task]);
  };
  const editItem = (id, updatedTask) => {
    setItemList(itemlist.map((task) => (task.id === id ? updatedTask : task)));
  };
  const deleteTask = (id) => {
    setItemList(itemlist.filter((task) => task.id !== id));
  };

  return (
    <div className='main flex flex-col items-center w-full h-full mt-3 font-["Protest"]'>
      <img
        src={logo}
        alt="logo"
        loading="lazy loading"
        className="logo w-[75px] h-[75px]"
      />
      <hr className="w-[50%] text-left m-3 h-[2px] bg-[#252525] " />
      <div className="addtask flex flex-col justify-center items-center w[200px] h-[fit] ">
        <h1>Start Adding Tasks</h1>
        <hr className="w-[50%] text-left m-3 h-[2px]  " />
        <Addtask addItem={addItem} />
        <hr className="w-[50%] text-left m-3 h-[2px]  " />
      </div>
      <div className="itemlist flex flex-col justify-center items-center  ">
        <span className="text-lg text-yellow-600 ">Items List</span>
        <div className="list-items m-7  ">
          <Tasklist
            items={itemlist}
            editItems={editItem}
            deleteItems={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}
