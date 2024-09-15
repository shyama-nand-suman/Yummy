import React from 'react'

const Delivery = () => {
  return (
    <>
     

     <div className='w-full py-16 px-4'>
      <h3 className='text-[#fbc351] font-bold text-2xl text-center'>Quick Delivery APP</h3>

      <div className='grid grid-cols-2 w-[70%] mx-auto my-10'>
        <img src="https://www.91-img.com/pictures/xiaomi-mi-5s-mobile-phone-large-1.jpg" alt="" className='w-[550px]' />
    
      
       <div className='flex flex-col justify-center'>
        <p  className='font-bold text-[green] text-[30px]'>Get the App</p>
        <h2 className='font-bold text-5xl py-2'>The Fast Food Delivery In India</h2>
        <button className='bg-[black] w-[150px] text-white rounded-md my-6 py-[10px] text-[20px]  hover:text-[#e84393] font-semibold'>Get Started</button>
       </div>
     </div>
     </div>
    </>
  )
}

export default Delivery