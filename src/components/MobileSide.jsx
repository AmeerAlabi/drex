import React from 'react';
import logo from '../assets/Union.svg';
import unfold from '../assets/unfold_more.png';
import chat from '../assets/Chat.svg';
import chart from '../assets/Chart.svg';
import graph from '../assets/Graph.svg';
import user from '../assets/User.png';
import setting from '../assets/Setting.svg';
import danger from '../assets/Danger.svg';
import document from '../assets/Document.svg';
import medium from '../assets/Medium.png';
import profile from '../assets/Group 1002.png';
import closeIcon from '../assets/close.svg'; // Assuming you have a close icon

const MobileSide = ({ handleToggle }) => {
    return (
        <div className='fixed top-0 left-0 w-[220px] h-full p-3 gap-2 flex-col text-white bg-[#183087]  flex lg:hidden z-50'>
            <div className="flex justify-between items-center mb-4">
                <img src={logo} alt="logo" className='w-[96px] p-1 cursor-pointer' />
                <img 
                    src={closeIcon} 
                    alt="close" 
                    className='w-[24px] h-[24px] cursor-pointer' 
                    onClick={handleToggle} 
                />
            </div>
            <div className='h-[1px] w-full bg-[#d9d9d9] mt-[12px]'></div>
            <div className='bg-indigo-500 p-3 rounded-lg flex justify-between items-center w-[160px] h-[70px] mt-[25px]'>
                <div className="bg-yellow-500 w-[30px] h-[30px] p-3 rounded-full flex items-center justify-center">D</div>
                <div className="p-1">
                    <p className="text-[14px] font-semibold">Dlex Designs <br /> <span className="text-[10px] text-[#d9d9d9] font-normal">general team</span></p>
                </div>
                <div>
                    <img src={unfold} alt="unfold" className=  ' cursor-pointer w-[24px]' />
                </div>
            </div>
            <div className='flex justify-start gap-[3px] mt-[18px]'>
                <img src={graph} alt="graph" className=' cursor-pointer' />
                <h3 className='font-semibold text-white text-[13px] p-1'>Dashboard</h3>
            </div>
            <div className='flex justify-start gap-[3px] mt-[8px]'>
                <img src={chart} alt="chart" className='cursor-pointer' />
                <h3 className='font-semibold text-white text-[13px] p-1'>Overview</h3>
            </div>
            <div className='flex justify-start gap-[3px] mt-[8px]'>
                <img src={chat} alt="chat" className='cursor-pointer' />
                <h3 className='font-semibold text-white text-[13px] p-1'>Chat</h3>
            </div>
            <div className='flex justify-start gap-[3px] mt-[8px]'>
                <img src={user} alt="user" className='cursor-pointer' />
                <h3 className='font-semibold text-white text-[13px] p-1'>Team</h3>
            </div>
            <h3 className='text-[#d9d9d9] text-[16px] mt-[5px]'>SHORTCUT</h3>
            <div className='flex justify-start gap-[3px] mt-[8px]'>
                <img src={document} alt="document" className='cursor-pointer' />
                <h3 className='font-semibold text-white text-[13px] p-1'>Tasks</h3>
            </div>
            <div className='flex justify-start gap-[3px] mt-[8px]'>
                <img src={danger} alt="danger"  className='cursor-pointer'/>
                <h3 className='font-semibold text-white text-[13px] p-1'>Reports</h3>
            </div>
            <div className='flex justify-start gap-[3px] mt-[8px]'>
                <img src={setting} alt="setting" />
                <h3 className='font-semibold text-white text-[13px] p-1'>Settings</h3>
            </div>
            <div className="bg-indigo-700 w-[165px] mx-auto h-[80px] p-3 rounded-lg mt-[15px]">
                <div className='flex justify-around'>
                    <h3 className='text-[15px] text-white'>Storage</h3>
                    <h4 className="text-[#d9d9d9] text-[15px]">Upgrade</h4>
                </div>
                <h3 className="text-white text-[16px] text-center">3.4 GB <span className="text-[#d9d9d9]">of 15 GB</span></h3>
                <img src={medium} alt="medium" className='mx-auto mt-[5px]' />
            </div>
            <div className='flex justify-between mt-[30px] items-center gap-[2px] p-[7px]'>
                <div>
                    <img src={profile} alt="profile" className='w-[35px]' />
                </div>
                <h1 className="font-bold text-[13px]">Jane Smith</h1>
                <div>
                    <img src={unfold} alt="unfold" className='w-[25px]' />
                </div>
            </div>
        </div>
    );
}

export default MobileSide;
