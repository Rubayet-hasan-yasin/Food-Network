"use client"

import React, { useEffect, useState } from 'react';


import Image from 'next/image';
import Social from '@/app/components/social/Social';
import details from '@/app/fakeData/Details';
import { Rating } from '@mui/material';
import { fruitsAndVegetables } from '@/app/fakeData/Data';

const MainContent = ({paragraphFont, active}) => {
    const [content, setContent] = useState(details[1]);
    const [itemName, setItemName] = useState('')


    useEffect(()=>{
        const {name, category} = fruitsAndVegetables.find(data=> data.id == active)
        const filterdDetails = details.find(detail=>detail.category == category);

        setItemName(name)
        
        setContent(filterdDetails)

    },[active])


    return (
        <section className="bg-white xl:w-[66%] rounded-2xl p-7 md:flex md:flex-row-reverse"> {/*TODO- 44 px padding */}
            

            <div className='w-full md:pl-6'> {/*TODO- 44 px padding */}
                {/* top text and image part */}
                <div className='md:flex gap-4'>
                    <div className='w-full text-[#212121]'>
                        <h3 className=' text-3xl font-black text-[#212121] mb-7'>{content.title} {itemName}</h3>


                        {/* helth 1 */}
                        <p className='font-bold text-lg'>Supports eye health: </p>
                        <p className={` font-normal mb-7`} style={{fontSize: `${paragraphFont}px`}}>{content.health1}</p>

                        {/* helth 2 large screen*/}
                        <p className='font-bold text-lg md:hidden 2xl:block'>Supports eye health: </p>
                        <p className={` font-normal md:hidden 2xl:block`} style={{fontSize: `${paragraphFont}px`}}>{content.health2}</p>
                    </div>
                    <div className='w-full'>
                        {content.image1 &&
                            <Image src={content.image1} alt='img' className='ml-auto'/>
                        }
                    </div>
                </div>

                {/* helth 2 in small screen */}
                <p className='font-bold text-lg hidden md:block 2xl:hidden'>Supports eye health: </p>
                <p className={` font-normal mb-7 hidden md:block 2xl:hidden`} style={{fontSize: `${paragraphFont}px`}}>{content.health2}</p>

                {/* helth 3 */}
                <p className='font-bold text-lg'>Supports eye health: </p>
                <p className={`font-normal mb-7`} style={{fontSize: `${paragraphFont}px`}}>{content.health3}</p>

                <div className="md:flex gap-6">
                    <div className='w-full'>
                        {content.image2 &&
                            <Image src={content.image2} alt='img' />
                        }
                    </div>

                    <div className='w-full'>
                        <p className='font-bold text-lg'>Supports eye health: </p>
                        <p className={` font-normal mb-7`} style={{fontSize: `${paragraphFont}px`}}>{content.health4}</p>
                    </div>
                </div>

                <p className="text-lg font-black">Was this helpful?</p>
                <Rating
                    name="simple-controlled"
                    size="large"
                />
            </div>

            {/* social icons part from component */}
            <Social></Social>
        </section>
    );
};

export default MainContent;