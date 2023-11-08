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
            <aside className="w-[70px] hidden lg:flex h-screen bg-white flex-col items-center justify-center gap-[6%] fixed top-0">
                {/* home*/}
                <Link href={'/'}>
                    <div className="border w-9 h-9 flex justify-center items-center rounded-md border-[#fcc6b0] bg-[#ffded1]">
                        <Image src={home} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* dashboard */}
                <Link href={'/dashboard'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={dashboard} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* frame  */}
                <Link href={'/massage'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={frame} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* video replay */}
                <Link href={'/replay'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={replay} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* more  */}
                <Link href={'/more'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={more} alt='home' width={22} height={22} />
                    </div>
                </Link>

            </aside>





            {children}



{/* for < 1024px screen  */}

            <aside className="w-full h-16 lg:hidden bg-white flex items-center justify-center gap-[6%] fixed bottom-0 left-0 right-0">
                {/* home*/}
                <Link href={'/'}>
                    <div className="border w-9 h-9 flex justify-center items-center rounded-md border-[#fcc6b0] bg-[#ffded1]">
                        <Image src={home} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* dashboard */}
                <Link href={'/dashboard'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={dashboard} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* frame  */}
                <Link href={'/massage'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={frame} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* video replay */}
                <Link href={'/replay'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={replay} alt='home' width={22} height={22} />
                    </div>
                </Link>

                {/* more  */}
                <Link href={'/more'}>
                    <div className="w-9 h-9 flex justify-center items-center rounded-md bg-[#1010100d]">
                        <Image src={more} alt='home' width={22} height={22} />
                    </div>
                </Link>

            </aside>

        </main>
    );
};

export default SideNavbar;