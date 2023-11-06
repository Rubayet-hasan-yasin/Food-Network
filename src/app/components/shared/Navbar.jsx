import Image from 'next/image';
import React from 'react';
import navIcon from '@/app/assets/header/food-network.svg'
import frame from '@/app/assets/header/Frame.svg'
import menu from '@/app/assets/header/menu-01.svg'
import nintendoSwitch from '@/app/assets/header/nintendo-switch.svg'
import sun from '@/app/assets/header/sun-01.svg'



const Navbar = () => {
    return (
        <header>
            <nav className='flex items-center justify-between h-16 bg-white'>
                <Image src={navIcon} alt='icon'></Image>

                <div className='h-10 w-[390px] border-2 border-[#F0F2F4] rounded-lg flex items-center py-1 pr-1'>
                    <input
                        type="text"
                        name="" id=""
                        className="outline-none h-full w-full pl-4 pr-1 placeholder:text-gray-700"
                        placeholder='Search Best Food'
                    />

                    <button className="bg-[#ffded1] h-full border-[#ffd2c1] border-2 rounded-md w-8">
                        <Image src={frame} alt='icon' />
                    </button>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;