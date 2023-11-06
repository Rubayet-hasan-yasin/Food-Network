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
            <nav className='flex items-center justify-between h-16 bg-white pl-6 pr-4 z-10 sticky'>
                <Image src={navIcon} alt='icon'></Image>

                {/* search  part */}
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

                {/* nav right part */}
                <div className="flex gap-5 items-center">
                    {/* img 1 */}
                    <div className="bg-[#ffded1] w-8 h-8 grid justify-center items-center rounded-md border-2 border-[#fcc6b0]">
                        <Image
                            src={sun}
                            alt='sun'
                            className=" h-5 w-5"
                        />
                    </div>
                    {/* img 2 */}
                    <div className="bg-[#ffded1] w-8 h-8 grid justify-center items-center rounded-md border-2 border-[#fcc6b0]">
                        <Image
                            src={nintendoSwitch}
                            alt='switch'
                            className=" h-5 w-5"
                        />

                    </div>
                    {/* img 3 */}
                    <div className="bg-[#1010101a] w-8 h-8 grid justify-center items-center rounded-md">
                        <Image
                            src={menu}
                            alt='menu'
                            className=" h-5 w-5"
                        />

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;