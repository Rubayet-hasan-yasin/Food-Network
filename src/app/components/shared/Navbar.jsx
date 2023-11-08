"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import navIcon from '@/app/assets/header/food-network.svg'
import frame from '@/app/assets/header/Frame.svg'
import menu from '@/app/assets/header/menu-01.svg'
import nintendoSwitch from '@/app/assets/header/nintendo-switch.svg'
import sun from '@/app/assets/header/sun-01.svg'
import Link from 'next/link';



const Navbar = () => {
    const [isSearchOpen, setSearchOpen] = useState(false)



    return (
        <header>
            <nav className='flex items-center justify-between h-16 bg-white pl-6 pr-4 z-10 sticky'>
                <Link href={"/"}>
                    <Image src={navIcon} alt='icon' />
                </Link>

                {/* search  part */}
                <div className={`h-10 w-[390px] border-[#F0F2F4] rounded-lg hidden sm:flex items-center py-1 pr-1 border-2`}>
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

                {/*search for moblile device  */}
                <div className={`h-10  sm:hidden border-2 border-[#F0F2F4] rounded-lg flex items-center py-1 pr-1 duration-1000 mx-5 ${isSearchOpen ? "border-2 w-full" : "border-opacity-0 w-0"}`}>
                    <input
                        type="text"
                        name="" id=""
                        className={"outline-none h-full  pl-4 pr-1 placeholder:text-gray-700 duration-700 w-full"}
                        placeholder='Search Best Food'
                    />
                </div>

                {/* nav right part */}
                <div className="flex gap-5 items-center">
                    {/* img 1 */}
                    <div className="bg-[#ffded1] w-8 h-8 hidden sm:grid justify-center items-center rounded-md border-2 border-[#fcc6b0] cursor-pointer">
                        <Image
                            src={sun}
                            alt='sun'
                            className=" h-5 w-5"
                        />
                    </div>
                    {/* img 2 */}
                    <div className="bg-[#ffded1] w-8 h-8 hidden sm:grid justify-center items-center rounded-md border-2 border-[#fcc6b0] cursor-pointer">
                        <Image
                            src={nintendoSwitch}
                            alt='switch'
                            className=" h-5 w-5"
                        />

                    </div>
                    {/* mobile search button  */}
                    <button onClick={() => setSearchOpen(!isSearchOpen)} className="bg-[#ffded1] h-full border-[#ffd2c1] sm:hidden border-2 rounded-md w-[32px]">
                        <Image src={frame} alt='icon' width={42} height={42} />
                    </button>
                    {/* img 3 */}
                    <div className="bg-[#1010101a] w-8 h-8 grid justify-center items-center rounded-md cursor-pointer">
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