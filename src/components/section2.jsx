import React from 'react'
import {BiPulse} from 'react-icons/bi'
import {RiHeartPulseLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'
import {BiDollar} from 'react-icons/bi'

const Section2 = () => {

    const cards = [{
        title: 'Total Patient',
        number: '783k',
        sign: '+',
        icon: <RiHeartPulseLine size='1.6rem'/>,
        style: 'from-[#f59797] to-[#F46E6B]'
    },{
        title: 'Doctor',
        number: '76',
        sign: '-',
        icon: <RiHeartPulseLine size='1.6rem'/>,
        style: 'from-[#82da90] to-green-500'
    },{
        title: 'Appointment',
        number: '76',
        sign: '-',
        icon: <RxCalendar size='1.6rem'/>,
        style: 'from-[#82b2da] to-blue-500'
    },{
        title: 'Hospital Earning',
        number: '$56k',
        sign: '+',
        icon: <BiDollar size='1.6rem'/>,
        style: 'from-[#da82d3] to-purple-500'
    },
]
  return (
    <div className='flex gap-x-4'>
        {
            cards.map(value=>{
                return(
                    <Card title={value.title} number={value.number} sign={value.sign} icon={value.icon} styles={value.style}/>
                )
            })
        }
    </div>
  )
}

export default Section2



const Card = (props)=>{
    return(
        <div className={`red w-full rounded-xl text-white flex-r  justify-between px-5 py-3 bg-gradient-to-r  nunito ${props.styles}`}>
            <div className='flex-c flex-1'>
            <h1 className='text-sm text-white w-full'>{props.title}</h1>
            <div className='flex-r gap-x-2 w-full'>
                
                <span className='font-extrabold'>{props.number}</span>
                <div className=' text-sm mt-4'>
                    <span><BiPulse/></span>
                    <span>{props.sign}4%</span>
                </div>
            </div>
            </div>
            <span className='block rounded-full border border-white p-2'>
                {props.icon}
            </span>
        </div>
    )
}