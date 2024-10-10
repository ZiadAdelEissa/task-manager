import React from 'react'
import logo from '../img/logo.png'
import Addtask from '../Addtasks/Addtask'
export default function Home() {
  return (
    <div className='main flex flex-col items-center w-full h-full mt-3 font-["Protest"]'>
       <img src={logo} alt='logo' loading='lazy loading' className='logo w-[75px] h-[75px]' />
       <hr className='w-[50%] text-left m-3 h-[2px] bg-[#252525] ' />
        <div className='addtask flex flex-col justify-center items-center w[200px] h-fit '>
        <h1>Start Adding Tasks</h1>
        <hr className='w-[50%] text-left m-3 h-[2px]  ' />
       <Addtask />
       <hr className='w-[50%] text-left m-3 h-[2px]  ' />
       <div className='itemlist grid grid-rows-2 grid-cols-2 justify-items-center self-center '>
        <span className='text-lg text-yellow-600 '>Items List</span>
        <ul className='list-items'>

        </ul>
       </div>
        </div>
        
    </div>
  )
}
