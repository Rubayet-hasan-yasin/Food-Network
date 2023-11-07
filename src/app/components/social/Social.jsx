import Image from 'next/image';
import React from 'react';

import facebook from '@/app/assets/social/facebook.png'
import linkedin from '@/app/assets/social/linkedin.png'
import twitter from '@/app/assets/social/twitter.png'

const Social = () => {
    return (
        <div className='flex flex-col gap-6 pt-16 bg-white w-7 h-full'>
            <Image src={facebook} alt='fb' />
            <Image src={linkedin} alt='in' />
            <Image src={twitter} alt='tw' />

            <div className='bg-[#E55527] w-7 h-7 rounded-full flex justify-center gap-[2px] items-center'>
                <div className='w-[3.5px] h-[3.5px] bg-white rounded-full'></div>
                <div className='w-[3.5px] h-[3.5px] bg-white rounded-full'></div>
                <div className='w-[3.5px] h-[3.5px] bg-white rounded-full'></div>
            </div>
        </div>
    );
};

export default Social;