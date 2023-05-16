import React from 'react';
import {BsFillMoonStarsFill} from "react-icons/bs"
const Navbar = () => {
  return (
    <div className='text-white mx-5 items-center md:text-white flex justify-between align-middle items-center text-center mx-12'>
    <div className=' mt-10 items-center text-center align-middle'>
     <h1 className='font-burtons mt-5 md:font-burtons text-center items-center font-bold text-2xl'>SIMPLEOG</h1>
     </div>
     <div className='flex mt-16 align-middle items-center justify-center'>
     <BsFillMoonStarsFill size={30} className='mx-10 text-center cursor-pointer'/>
     <button className='bg-teal-600 px-4 py-2 font-bold cursor-pointer rounded-lg hover:opacity-75 transition-all duration-500'>Resume</button>
     </div>
    </div>
  )
}

export default Navbar
