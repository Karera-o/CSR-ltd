import { Badge, Avatar } from 'antd';
import React from 'react'
import {MdOutlineNotificationsNone,MdOutlineMessage} from 'react-icons/md'
import {AiOutlineGift} from 'react-icons/ai'
import {CgMenuRight} from 'react-icons/cg'
const Header = () => {
  return (
    <div className='flex-r justify-between px-5 bg-white h-20 sticky top-0 z-10"'>
        <div className='flex-r gap-x-3'>
            <span className='text-g '><CgMenuRight /></span>
            <h1 className='nunito font-bold text-black'>Dashboard</h1>
        </div>
        <div className='flex-r gap-x-2'>
            <div className='relative'>
                <span className='bg-green-500 block text-white text-[7px] absolute left-4 bottom-5 h-4 w-4 flex-r justify-center rounded-full'>12</span>
                <div className='border rounded-full p-1'>
                <MdOutlineNotificationsNone className='fill-green-500'/>
                </div>
            </div>
            <div className='relative'>
                <span className='bg-green-500 block text-white text-[7px] absolute left-4 bottom-5 h-4 w-4 flex-r justify-center rounded-full'>5</span>
                <div className='border rounded-full p-1'>
                <MdOutlineMessage className='fill-green-500'/>
                </div>
                </div>
                <div className='relative'>
                <span className='bg-gray-800 block text-white text-[7px] absolute left-4 bottom-5 h-4 w-4 flex-r justify-center rounded-full'>2</span>
                <div className='border rounded-full p-1'>
                <AiOutlineGift className='fill-gray-600'/>
                </div>
        </div> 
        <div className='flex-r  rounded-l-[99999px] rounded-r-[90000px] pr-4 bg-gray-100'>
            <img src="/profile.webp" alt="" className='rounded-full w-8 h-8 object-cover' />
            <p className=' p-1 text-xs text-g'>Hello, <span className=' font-semibold'>Roberto</span></p>
        </div>
        </div>
    </div>
  )
}

export default Header