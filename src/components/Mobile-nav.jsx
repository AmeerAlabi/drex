import React, { useState } from 'react';
import flag from '../assets/flag.png';
import harm from '../assets/IconButton.png';
import profile from '../assets/avatar-2.png';
import search from '../assets/search.png';
import MobileSide from './MobileSide';

const Mobile = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <div className='flex lg:hidden p-1 justify-between items-center'>
                <div className='gap-[5px] flex'>
                    <img 
                        src={harm} 
                        alt="menu"  
                        className='w-[44px] cursor-pointer h-[44px]' 
                        onClick={handleToggle} 
                    />
                    <img src={search} alt="search" className='w-[44px] h-[44px] cursor-pointer ' />
                </div>
                <div className='flex gap-[12px]'>
                    <img src={flag} alt="flag" className='w-[44px] cursor-pointer h-[44px]' />
                    <img src={profile} alt="profile" className='w-[44px] cursor-pointer h-[44px]' />
                </div>
            </div>
            {toggle && <MobileSide handleToggle={handleToggle} />}
        </div>
    );
}

export default Mobile;
