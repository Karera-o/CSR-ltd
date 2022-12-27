import Search from 'antd/es/transfer/search';
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import {CiSettings} from "react-icons/ci"

const Section1 = () => {
  return (
    <div className='flex-r justify-between nunito px-10 pt'>
        <div className=''>
            <h1 className='text-sm font-bold text-black'>Welcome to Eres!</h1>
            <p className='text-xs'>Hospital Admin Dashboard Template</p>
        </div>
        <div className='flex-r gap-x-4'>
        <div className='flex-r bg-white rounded-lg px-3 '>
            <input type="text" placeholder='Search here' className='py-2 text-xs'/>
            <BsSearch size='.7rem'/>
        </div>
        <span className='red rounded-full block h-8 w-8 flex-r justify-center'>
        <CiSettings className="fill-white text-white" color='white'/>
        </span>
        </div>

    </div>
  )
}

export default Section1