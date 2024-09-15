import React from 'react'
import { mealData } from '../Data/Data'
const OurFood = () => {
  return (
    <>
    <div className='w-[90%] mx-auto'>
        <div >
          <h2 className='text-center text-[#81ecec] text-3xl font-bold py-5'>Our Food</h2>
        </div>

        <div className=' grid grid-cols-4 py-6 gap-4'>
            {mealData.map((meal)=>(
                <div className='flex justify-center flex-col items-center' >
                    <div>
                    <img src={meal.img} alt=""  className='w-[200px]  h-[200px] rounded-lg object-cover'/>
                    </div>
                     
                   <div className=" flex  justify-center py-2 px-4 flex-col items-center">
                    
                   <p className="text-xl font-semibold uppercase">{meal.name}</p>
                    <p className="text-xl font-semibold uppercase">${meal.price}</p>
                    <button className="bg-[black] w-[150px] text-white rounded-md my-6 py-[10px] text-[20px]  hover:text-[#e84393] font-semibold">
                  Add To Cart
                </button>
                   </div>
                </div>
            ))};
        </div>
    </div>
    </>
  );
};

export default OurFood