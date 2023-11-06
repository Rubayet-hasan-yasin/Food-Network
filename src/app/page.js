import Image from 'next/image'
import Navbar from './components/shared/Navbar'
import MainBar from './components/main bar/MainBar'
import SettingFrame from './components/settingFrame/SettingFrame'

export default function Home() {
  return (
    <div className="h-screen bg-[#EEF0F2] ml-[70px] rounded-ss-3xl pt-3 pl-4 flex justify-between">

      <MainBar/>

      <SettingFrame/>
    </div>
  )
}
