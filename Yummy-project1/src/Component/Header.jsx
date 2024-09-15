import React, { useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Header = () => {

  const [navside ,setNavSide]=useState (false);
  
    

  return (
      <div className='flex justify-between py-[20px] px-[25px] text-[19px] font-semibold border-b relative'>
         <div>
         <Link to="/">
            <p  className='cursor-pointer'>
               Yummy<span className='text-[#fd79a8]'>Food</span>
            </p>
            </Link>
         </div>
          <div >
         
            <ul className='sm:flex gap-[25px]  cursor-pointer '>
               <Link to="/"><li className='hover:text-[#ff6b81]'>Home</li></Link>
                
                <Link to="/aboutus"> <li className='hover:text-[#ff4757]'>About <span className='text-[#0984e3]'>us</span> </li></Link>
               <Link to="/ourfood"> <li className='hover:text-[#ff6348]'>Our Food</li></Link>
                <Link to="/singin"><li className='hover:text-[#3742fa]'>SignIn</li></Link>
            </ul>
            
          </div>


          {
   navside? <div className='bg-white  w-[300px] top-0 right-0 text-center h-[100vh] flex justify-center items-center absolute'>
   <RxCross2  size={30}  className=' absolute top-3 right-3 cursor-pointer'
   onClick={()=>setNavSide(!navside)}
   />
     <ul className='flex gap-[25px]  cursor-pointer flex-col '>
         <li className='hover:text-[#ff6b81]'>Home</li>
         <li className='hover:text-[#ff4757]'>About <span className='text-[#0984e3]'>us</span> </li>
         <li className='hover:text-[#ff6348]'>Offers</li>
         <li className='hover:text-[#3742fa]'>SignIn</li>
    </ul>
    
  </div>:""
     }

           
           <div className='flex gap-5px'>
            <p><GiHamburgerMenu size={30} className='cursor-pointer block sm:hidden' onClick={()=>setNavSide(!navside)}/></p>
            <p><IoCartSharp size={30} className='cursor-pointer' /></p>
           </div>
      </div>
  )
}

export default Header;



