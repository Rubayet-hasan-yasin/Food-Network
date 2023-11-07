"use client"

import React, { useState } from 'react';
import textSquare from '@/app/assets/settings/text-square.svg';
import arrow from '@/app/assets/settings/arrow.svg';
import arrowBlack from '@/app/assets/settings/arrowBlack.svg';
import Image from 'next/image';

// slider from MUI
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SettingFrame = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [paragraphFont, setParagraphFont] = useState(19);
    const [isChecked, setIsChecked] = useState(false);

    console.log(isChecked);


    const handleChange = (event, newValue) => {
        setParagraphFont(newValue)
    };

    return (
        <div className="bg-white w-[16%] h-fit rounded-2xl p-[15px]">
            <div className="p-[10px] border w-full h-full rounded-lg">

                {/* Settings top part */}
                <div className="flex items-center justify-between">
                    {/* settings text img and text  */}
                    <div className="flex items-center gap-4">
                        <Image src={textSquare} alt='icon' />
                        <p className="text-[#E55527] text-sm font-semibold">Settings</p>
                    </div>

                    <Image
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isOpen ? " " : "rotate-180"}`}
                        src={arrow}
                        alt='icon' />
                </div>

                {/* Paragraph Font size  */}
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">Paragraph font size</p>
                        <p className="text-xs text-[#E55527] font-medium">{paragraphFont}</p>
                    </div>

                    <Slider
                        min={0}
                        max={40}
                        value={paragraphFont}
                        onChange={handleChange}
                        size="small"
                        aria-label='small'
                        sx={{
                            color: '#E55527',
                            '& .MuiSlider-rail': {
                                backgroundColor: "#10101050"
                            },
                        }}
                    />
                </div>

                {/* Choose Vitamin Type */}
                <div>
                    <p className="text-sm font-medium">Choose Vitamin Type</p>

                    <div className='mt-[10px]'>
                        <div className='flex justify-between items-center bg-[#d4d4d4] p-[10px]
                        rounded'>
                            <p className='text-xs font-normal '>All Vitamin</p>

                            <Image src={arrowBlack} alt='icon' />
                        </div>
                    </div>


                    {/* Turn Off Subtitle */}
                    <div className='flex items-center mt-6 justify-between'>
                        <p className='text-sm font-medium'>Turn Off Subtitle</p>


                            <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                           
                                <div className="relative">
                       
                                    <input onClick={()=>setIsChecked(!isChecked)} type="checkbox" id="toggleB" className="sr-only"/>
                                
                                        <div className="block bg-white w-8 h-5 rounded-full border"></div>
                              
                                        <div className={`${isChecked ? "translate-x-[100%]":"translate-x-0"} absolute left-1 top-1 bg-[#D9D9D9] w-3 h-3 rounded-full transition`}></div>
                                </div>
                            </label>

                        



                    </div>
                </div>

            </div>
        </div>
    );
};

export default SettingFrame;