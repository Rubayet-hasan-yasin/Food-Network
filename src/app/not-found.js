import Image from 'next/image'
import Link from 'next/link'
import error from '@/app/assets/error.png'

export default function NotFound() {
  return (
    <div className='grid justify-center items-center h-[calc(100vh-70px)]'>
      <div>
        <Image src={error} alt='error' />
        <p className='text-3xl font-bold text-center mt-10'>This page is empty</p>

        <p className='text-center mt-8'>
          <Link href="/" className='font-bold border px-5 py-2 rounded bg-[#f0f0f0]'>Return Home</Link>
        </p>
      </div>
    </div>
  )
}