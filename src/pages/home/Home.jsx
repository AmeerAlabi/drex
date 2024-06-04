import React from 'react';
import Left from '../../components/left-sidebar/Left';
import Right from '../../components/right-sidbar/Right';
import orange from '../../assets/orange-mark.png';
import blue from '../../assets/check_circle_outline.png';
import notification from '../../assets/notifications-outline.png';
import arrow from '../../assets/keyboard_arrow_right.png';
import germany from '../../assets/germany.png';
import progress from '../../assets/Group 883.png';
import writing from '../../assets/writing.png';
import vector from '../../assets/Vector.png';
import dictionary from '../../assets/dictionary.png';
import Mobile from '../../components/Mobile-nav';

const Home = () => {
  return (
    <div className='bg-white w-full  lg:w-[60%] mx-auto p-5'>
        <Mobile />
      <h1 className='mt-[20px] text-3xl font-bold ml-[15px]'>Progress DashBoard</h1>
      <section className='justify-center items-center'>
        <div className="p-2 mt-[25px]">
          {/* First row: Blue box spanning 2 columns, black boxes beside each other */}
          <div className="grid gap-[7px] lg:grid-cols-4">
            <div className="h-[170px] p-3 bg-[#28439D] rounded-lg col-span-4 lg:col-span-2">
              <h3 className="text-white">
                <span className="text-[#D9D9D9] mt-[5px]">Deadline</span> 12:00
              </h3>
              <h1 className="text-white font-bold text-3xl mt-[5px]">Exam-Unit-5</h1>
              <p className="text-[#D9D9D9] mt-[5px]">Spanish For Beginners</p>
            </div>
            <div className="h-[170px] w-full lg:w-[170px] p-3 rounded-lg bg-[#FFF8E1] col-span-2 lg:col-span-1">
              <img src={orange} alt="" className='mt-[8px]' />
              <h1 className="text-lg font-semibold mt-[3px]">HomeWork</h1>
              <p className="text-[#d9d9d9]">For Today's Lessons</p>
              <p className="mt-[35px]">35 min Ago</p>
            </div>
            <div className="h-[170px] w-full lg:w-[170px] bg-[#E1F5FD] rounded-lg p-3 col-span-2 lg:col-span-1">
              <img src={blue} alt="" className='mt-[8px]' />
              <h1 className="text-lg font-semibold mt-[3px]">HomeWork</h1>
              <p className="text-[#d9d9d9]">For Today's Lessons</p>
              <p className="mt-[35px]">35 min Ago</p>
            </div>
          </div>

          {/* Second row: Two boxes beside each other */}
          <div className="flex flex-col lg:flex-row gap-[5px] mt-[25px] justify-center">
            <div className="bg-white border-[1px] rounded-lg border-[#d9d9d9] h-[260px] w-full lg:w-[350px] justify-center col-span-4 items-center p-4 lg:col-span-2">
              <div className="flex justify-between">
                <h3 className='text-[#d9d9d9]'>
                  <span className='text-black font-bold'>Group Info</span><br /> 13 students in this group
                </h3>
                <div>
                  <img src={notification} alt="" className='mt-[5px]' />
                </div>
              </div>

              <div className='flex bg-[#FF9365] p-1 mt-[3px] items-center w-full h-[105px] justify-around rounded-lg'>
                <div>
                  <h3 className='text-white text-[18px]'>Group homework</h3>
                  <span className='text-[#ffffffe8] text-[13px]'>4 students from your group online now</span>
                </div>
                <div>
                  <img src={arrow} alt="" className='w-[22px] h-[22px]' />
                </div>
              </div>

              <h1 className="text-[17px] font-bold p-1">Today's lesson</h1>
              <p className="text-[13px] p-1">unit 6-Article</p>
            </div>
            <div className="border-[1px] border-[#d9d9d9] rounded-lg h-[260px] w-full lg:w-[350px] col-span-4 p-3 lg:col-span-2">
              <h1 className="font-bold mt-[3px]">Overall Progress</h1>
              <div className='flex justify-between items-center'>
                <h1 className="font-semibold text-2xl mt-[8px]">Germany for <br />beginners</h1>
                <img src={germany} alt="" />
              </div>
              <img src={progress} alt="" className='mt-[20px]' />
              <p className='p-1'>75%</p>

              <div className='h-[1px] bg-[#d9d9d9] mt-[18px] w-full'></div>

              <p className="text-[#3855B3] text-right mt-[20px] font-semibold">Explore more</p>
            </div>
          </div>

          {/* Third row: Two boxes beside each other */}
          <div className="grid gap-3 mt-[25px] lg:grid-cols-4  justify-center">
            <div className="bg-white p-3 rounded-lg h-[70px] w-[430px] lg:w-full flex justify-between col-span-4 lg:col-span-2 border-[1px]">
              <div className='flex gap-[1px] items-center'>
                <img src={writing} alt="" className='w-[45px] h-[45px]' />
                <p className="text-black font-semibold">Grammar<br />
                  <span className='text-[12px] text-[#d9d9d9]'>+30 grammar rules</span>
                </p>
              </div>
              <img src={vector} alt="" className='w-[13px] h-[13px] mt-[12px]' />
            </div>
            <div className="bg-white p-3 rounded-lg h-[70px] w-full flex justify-between items-center col-span-4 lg:col-span-2 border-[1px]">
              <div className='flex gap-[10px] items-center'>
                <img src={dictionary} alt="writing" className='w-[45px] h-[45px]' />
                <div>
                  <p className="text-black font-semibold">Dictionary</p>
                  <p className='text-[12px] text-[#d9d9d9]'>+10 New words</p>
                </div>
              </div>
              <img src={vector} alt="vector" className='w-[13px] h-[13px]' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
