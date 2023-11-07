import Image from 'next/image'
import MainBar from './home/main bar/MainBar'
import SettingFrame from './home/settingFrame/SettingFrame'
import MainContent from './home/mainContent/MainContent'


export default function Home() {
  return (
    <div className="bg-[#EEF0F2] ml-[70px] rounded-ss-3xl pt-3 pl-4 flex justify-between pb-40">

      <MainBar/>

      <MainContent/>

      <SettingFrame/>
    </div>
  )
}
