import { Divider } from 'antd';
import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { RxDividerHorizontal } from 'react-icons/rx';

const Section4Right = () => {

    const cards =[{
        profile:"/profile.webp",
        name: "Aziz Bakree",
        years: 24,
        state : "Pending",
        style: "text-amber-600"
    },
    {
        profile:"/doctor1.webp",
        name: "Griezerman",
        years: 24,
        state : "On Recovery",
        style: "text-blue-600"
    },
    {
        profile:"/doctor2.webp",
        name: "Oconner",
        years: 24,
        state : "Rejected",
        style: "text-red-500"
    },
    {
        profile:"/doctor3.webp",
        name: "Uli Trumb",
        years: 24,
        state : "Recovered",
        style: "text-green-500"
    },
]
  return (
    <div className='bg-white w-4/12 px-6 py-5 nunito flex-c gap-y-2 rounded '>
        <div className='flex-r justify-between font-bold text-sm w-full'>
            <h1 className='text-black'>Recent Patient</h1>
            <a className='text-g flex-r gap-x-1'>View more <HiChevronDoubleRight/></a>
        </div>
        <div className='w-full'>
            {
                cards.map(value=>{
                    return(
                        <>
                        <Card profile={value.profile} name={value.name} years={value.years} state={value.state} styles={value.style}/>
                        <hr />
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Section4Right


const Card = (props)=>{
    return(
        <div className='nunito flex-r justify-between bg-white py-2'>
            <div className='flex-r gap-x-2'>
            <img src={props.profile} alt="" className='w-8 h-8 rounded-full object-cover'/>
            <div>
                <h1 className='text-black text-xs font-bold'>{props.name}</h1>
                <p className='text-xs'>{props.years} Years</p>
            </div>
            </div>
            <p className={`${props.styles} text-xs`}>{props.state}</p>

        </div>
    )
}