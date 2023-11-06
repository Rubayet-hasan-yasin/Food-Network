import React from 'react';
import dashboard from '@/app/assets/sidebar/dashboard-circle.svg'
import frame from '@/app/assets/sidebar/frame.svg'
import home from '@/app/assets/sidebar/home-01.svg'
import more from '@/app/assets/sidebar/more-01.svg'
import replay from '@/app/assets/sidebar/video-replay.svg'
import Link from 'next/link';
import Image from 'next/image';

const SideNavbar = ({ children }) => {
    return (
        <main className="min-h-screen">

            {/* sidebar  */}
            <aside className="w-[70px] h-screen bg-white flex flex-col items-center justify-center gap-[6%] fixed top-0">
                {/* home*/}
                <Link href={'/home'}>
                    <div className="border w-9 h-9 flex justify-center items-center rounded-md border-[#fcc6b0] bg-[#ffded1]">
                        <Image src={home} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* dashboard */}
                <Link href={'/home'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={dashboard} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* frame  */}
                <Link href={'/home'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={frame} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* video replay */}
                <Link href={'/home'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={replay} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* more  */}
                <Link href={'/home'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={more} alt='home' width={22} height={22} />
                    </div>
                </Link>

            </aside>





            {children}

        </main>
    );
};

export default SideNavbar;