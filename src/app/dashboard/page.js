import Image from 'next/image';
import React from 'react';
import error from '@/app/assets/error.png'

const Dashboard = () => {
    return (
        <div className='grid justify-center items-center h-[calc(100vh-70px)]'>
            <div>
                <Image src={error} alt='error' />
                <p className='text-3xl font-bold text-center mt-10'>This page is empty</p>
            </div>
        </div>
    );
};

export default Dashboard;