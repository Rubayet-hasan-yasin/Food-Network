"use client"

import React, { useState } from 'react';


import Image from 'next/image';
import Social from '@/app/components/social/Social';
import details from '@/app/fakeData/Details';
import { Rating } from '@mui/material';

const MainContent = ({paragraphFont}) => {
    const [content, setContent] = useState(details[0]);

    console.log(content);

    return (
        <section className="bg-white w-[66%] rounded-2xl p-7 flex"> {/*TODO- 44 px padding */}
            {/* social icons part from component */}
            <Social></Social>

            <div className='w-full pl-6'> {/*TODO- 44 px padding */}
                {/* top text and image part */}
                <div className='flex gap-4'>
                    <div className='w-full text-[#212121]'>
                        <h3 className=' text-3xl font-black text-[#212121] mb-7'>{content.title}</h3>


                        {/* helth 1 */}
                        <p className='font-bold text-lg'>Supports eye health: </p>
                        <p className={` font-normal mb-7`}>{content.health1}</p>

                        {/* helth 2 large screen*/}
                        <p className='font-bold text-lg hidden 2xl:block'>Supports eye health: </p>
                        <p className={` font-normal hidden 2xl:block`}>{content.health2}</p>
                    </div>
                    <div className='w-full'>
                        <Image src={content.image1} alt='img' />
                    </div>
                </div>

                {/* helth 2 in small screen */}
                <p className='font-bold text-lg 2xl:hidden'>Supports eye health: </p>
                <p className={` font-normal mb-7 2xl:hidden`}>{content.health2}</p>

                {/* helth 3 */}
                <p className='font-bold text-lg'>Supports eye health: </p>
                <p className={`text-[${paragraphFont}px] font-normal mb-7`}>{content.health3}</p>

                <div className="flex gap-6">
                    <div className='w-full'>
                        <Image src={content.image2} alt='img' />
                    </div>

                    <div className='w-full'>
                        <p className='font-bold text-lg'>Supports eye health: </p>
                        <p className={` font-normal mb-7`}>{content.health4}</p>
                    </div>
                </div>

                <p className="text-lg font-black">Was this helpful?</p>
                <Rating
                    name="simple-controlled"
                    size="large"
                />
            </div>
        </section>
    );
};

export default MainContent;