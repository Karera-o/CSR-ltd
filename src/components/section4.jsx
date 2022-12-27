import React from 'react'
import { BiCaretLeft, BiCaretRight, BiStar } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsStar, BsStarFill, BsTwitter } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { RiFacebookFill } from 'react-icons/ri';

const Section4 = () => {

    const cards = [{
        profile: '/doctor1.png',
        name: 'Dr. Alexandro Jr.',
        occupation:'Dentist',
        description:'Amet laboris nostrud occaecat aliquip laboris proident cillum sint cupidatat fugiat culpa.',    
    },
    {
        profile: '/doctor2.png',
        name: 'Dr. Samantha',
        occupation:'Phsyical Therapy',
        description:'Esse excepteur fugiat labore elit elit nostrud cupidatat exercitation nostrud officia incididunt.',    
    },
    {
        profile: '/doctor3.png',
        name: 'Dr. Aliandro M',
        occupation:'Nursing',
        description:'In laboris ullamco sunt dolore irure commodo exercitation esse labore aliquip ut.',    
    }
]
  return (
    <div className='bg-white px-6 py-5 justify-center w-7/12 nunito flex flex-col gap-y-2 rounded-lg relative'>

        <span className='absolute text-g p-2 drop-shadow-xl rounded left-[-1rem] bg-white'><BiCaretLeft/></span>
        <span className='absolute text-g p-2 drop-shadow-xl rounded right-[-1rem] bg-white'><BiCaretRight/></span>
        <div className='flex-r justify-between font-bold text-sm'>
            <h1 className='text-black'>Top Rated Doctors</h1>
            <a className='text-g flex-r gap-x-1'>View more <HiChevronDoubleRight/></a>
        </div>
        <div className='flex-r gap-x-5'>
        {
            cards.map(value=>{
                return(
                    <Card profile={value.profile} name={value.name} occupation={value.occupation} description={value.description}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default Section4

const Card = (props)=>{
    return(
        <div className='nunito  flex-c gap-y-4 py-3 bg-white'>
            <div className='relative '>
                <img src={props.profile} alt="" />
                <p className='text-[.50rem] flex-r justify-center gap-x-1 py-[.10rem] bg-green-500 w-[2.5rem] absolute top-[4rem] left-5 rounded-lg text-white'><BsStarFill color='yellow'/> <span className='text-[]'>42</span></p>
            </div>
            <div className=' flex-c gap-y-1'>
                <h1 className='text-black font-bold text-xs'>{props.name}</h1>
                <h2 className='text-g text-xs'>{props.occupation}</h2>
                <p className='text-xs text-center w-5/6'>{props.description}</p>
            </div>
            <div className='flex-r gap-x-2'>
                <span className='bg-[#edf7f1] p-2 rounded-full'><BsInstagram fill='#22C55E' /></span>
                <span className='bg-[#edf7f1] p-2 rounded-full'><RiFacebookFill fill='#22C55E' /></span>
                <span className='bg-[#edf7f1] p-2 rounded-full'><BsTwitter color='#22C55E'/></span>
            </div>
        </div>
    )
}