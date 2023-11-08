"use client"

import Image from 'next/image'
import MainBar from './home/main bar/MainBar'
import SettingFrame from './home/settingFrame/SettingFrame'
import MainContent from './home/mainContent/MainContent'
import { useState } from 'react';

import menu from '@/app/assets/menu-01.svg';
import arrow from '@/app/assets/settings/arrowBlack.svg';


export default function Home() {
  const [paragraphFont, setParagraphFont] = useState(12);
  const [isMainBarOpen, setIsMainBarOpen] = useState(false);
  const [active, setActive] = useState(1);
  



  return (
    <div className="bg-[#EEF0F2] lg:ml-[70px] lg:rounded-ss-3xl pt-3 pl-4 pr-4 sm:pr-4 lg:flex gap-4 justify-between relative pb-20 lg:pb-0">

      <MainBar active={active} setActive={setActive}/>

      {/* for mobile */}
      <div onClick={()=>setIsMainBarOpen(false)} className={`bg-[#1010109a] w-screen h-screen absolute lg:hidden duration-500 rounded-s-3xl ${isMainBarOpen? "top-0 left-0":"top-0 -left-[1100px]"}`}>
        <MainBar isMainBarOpen={isMainBarOpen} setIsMainBarOpen={setIsMainBarOpen} active={active} setActive={setActive}/>
        
      </div>

      <div onClick={() => setIsMainBarOpen(true)} className='lg:hidden flex justify-between items-center bg-white mb-4 py-3 px-4 rounded-lg'>
        <div className='flex items-center'>
          <Image src={menu} alt='menu' />
          <p>Select Food Item</p>
        </div>
        <Image src={arrow} alt='arrow' height={20} width={20} />
      </div>

      <MainContent paragraphFont={paragraphFont} active={active}/>

      <SettingFrame paragraphFont={paragraphFont} setParagraphFont={setParagraphFont} />
    </div>
  )
}
