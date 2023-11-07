"use client"

import Image from 'next/image'
import MainBar from './home/main bar/MainBar'
import SettingFrame from './home/settingFrame/SettingFrame'
import MainContent from './home/mainContent/MainContent'
import { useState } from 'react';


export default function Home() {
  const [paragraphFont, setParagraphFont] = useState(0);

  console.log(paragraphFont);


  return (
    <div className="bg-[#EEF0F2] ml-[70px] rounded-ss-3xl pt-3 pl-4 flex justify-between pb-40">

      <MainBar/>

      <MainContent paragraphFont={paragraphFont}/>

      <SettingFrame paragraphFont={paragraphFont} setParagraphFont={setParagraphFont}/>
    </div>
  )
}
