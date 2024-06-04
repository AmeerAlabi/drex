import React from 'react'
import user from '../../assets/Group 1002.png'
import vector from '../../assets/Vector.png'
import grammar from '../../assets/reading.png'
import dictionary from '../../assets/document.png'

const Right = () => {
  return (
    <div className=' w-[25%] p-2 gap-2 flex-col    bg-[#f5f5f5] text-white lg:flex hidden '>
     
      <div>
        <img src={user} alt="" className=' w-[60px] h-[65px] flex justify-center mx-auto ' />
        <h2 className=" font-bold text-[25px] text-black text-center "> Harrison Philips </h2>
        <h3 className=" text-[#d9d9d9] text-[15px] text-center ">Business analyst</h3>
      </div>


      <div className=" flex justify-between rounded-lg mx-auto w-[283px]  h-[85px] p-5 mt-[25px] border-[1px] border-[#e6e7e9] "> 
        <h1 className=" text-[18px] text-black font-semibold "> Get-10% sell Price <br /> <span className=" text-[#d9d9d9] text-[13px]  font-normal ">for  "spanish A2" course </span>  </h1>
        <img src={vector} alt="" className=' w-[13px] h-[13px] my-auto ' />
      </div>

      
       <h1 className=" text-black text-[20px] font-semibold p-2 mt-[7px] ">Course Progress </h1>


       <div className=" flex  items-center gap-[6px] rounded-lg mx-auto w-[283px]  h-[85px] p-5 mt-[25px] border-[1px] border-[#e6e7e9] "> 
        <h1 className=" text-[18px] text-[#4A4DE6] font-semibold "> 63%  </h1>
        <div>
        <img src={grammar} alt="" className='  w-[38px] h-[38px]  ' />
        </div>
        <div>
        <h1 className=" text-[18px] text-black font-semibold "> Grammar  <br /> <span className=" text-[#d9d9d9] text-[13px]  font-normal "> Learn new rules </span>  </h1>  
        </div>
      </div>

       <div className=" flex  items-center gap-[6px] rounded-lg mx-auto w-[283px]  h-[85px] p-5 mt-[25px] border-[1px] border-[#e6e7e9] "> 
        <h1 className=" text-[18px] text-[#FF8F00] font-semibold "> 78%  </h1>
        <div>
        <img src={dictionary} alt="" className='  w-[38px] h-[38px]  ' />
        </div>
        <div>
        <h1 className=" text-[18px] text-black font-semibold "> Dictionary   <br /> <span className=" text-[#d9d9d9] text-[13px]  font-normal "> Learn 4 new words  </span>  </h1>  
        </div>
      </div>

       <div className=" flex  items-center gap-[6px] rounded-lg mx-auto w-[283px]  h-[85px] p-5 mt-[25px] border-[1px] border-[#e6e7e9] "> 
        <h1 className=" text-[18px] text-[#E83274] font-semibold "> 34%  </h1>
        <div>
        <div  className='  w-[38px]  bg-[#E83274] h-[38px] rounded-lg  ' />
        </div>
        <div>
        <h1 className=" text-[18px] text-black font-semibold "> Reading   <br /> <span className=" text-[#d9d9d9] text-[13px]  font-normal "> Train your skill  </span>  </h1>  
        </div>
      </div>

    </div>
  )
}

export default Right
