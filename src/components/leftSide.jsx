import React from 'react'
import {CgMenuBoxed} from "react-icons/cg"
import {RiArrowDownSLine} from "react-icons/ri"
import {MdSupervisedUserCircle, MdChevronRight} from "react-icons/md"
import {BsGlobe, BsArrowRight,BsMenuButtonWide} from "react-icons/bs"
import {GrSettingsOption} from "react-icons/gr"
import {GiNotebook} from "react-icons/gi"

const LeftSide = () => {

    const list1 =["Dashboard Light","Dashboard Dark",
"Patient", "Patient Details", "Doctor", "Doctor Details","Review"
]

    const list2 = [{
        title: "Staff",
        icon: <MdSupervisedUserCircle/>
    },
    {
        title: "Apps",
        icon: <MdSupervisedUserCircle/>
    },
    {
        title: "Charts",
        icon: <MdSupervisedUserCircle/>
    },
    {
        title: "Bootstrap",
        icon: <MdSupervisedUserCircle/>
    },
    {
        title: "Plugins",
        icon: <MdSupervisedUserCircle/>
    },
]
const list3 = [{
    title: "Forms",
    icon: <GiNotebook/>
},
{
    title: "Table",
    icon: <MdSupervisedUserCircle/>
},
{
    title: "Pages",
    icon: <MdSupervisedUserCircle/>
},
]


  return (
    <div className='flex-c  bg-white w-full h-screen '>
        <div className='flex  w-full gap-x-3 py-4 pl-5'>
            <span><img src="/logo.webp" alt="" /></span>
            <p className='uppercase font-bold text-2xl text-green-700'>eres</p>
        </div>
        <div className='w-full nunito pl-5 pr-4'>
            <h1 className='flex-r gap-x-3 green text-xs py-2 ml-[-1.2rem] pl-8 text-white font-semibold rounded-tr-[999px] rounded-br-[4000px] '>
                <span className=""><BsMenuButtonWide className="fill-gray-200"/></span>
                Dashboard
                <span className="ml-5 text-white"><RiArrowDownSLine className="fill-white" size="1.2rem"/></span>
            </h1>
            <ul className="text-xs py-2 flex-c gap-y-2">
                {
                    list1.map(value=>{
                        return(
                            <li className={`w-3/5  ${value === 'Dashboard Light' ? 'text-g' : ''}`}>{value}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='w-full  pl-5 '>
            <h1 className='flex-r gap-x-3 my-2 text-sm'>
                <span><CgMenuBoxed size="1.3rem"/></span>
                Appointment
                </h1>
                <ul className="text-xs pr-5">
                    
                {
                    list2.map(value=>{
                        return(
                            <li className='flex-r gap-x-5 py-1'><p className="flex-r flex-1 gap-x-5"><span className="text-xl ">{value.icon}</span> {value.title}</p> <span ><MdChevronRight/></span></li>
                        )
                    })
                }
                </ul>
        </div>

        <div className='w-full pl-5'>
            <h1 className='flex-r gap-x-3 my-2 text-sm'><span><GrSettingsOption className="fill-gray-400"/></span> Widget</h1>
            <ul className="text-xs pr-5">
                {
                    list3.map(value=>{
                        return(
                            <li className='flex-r gap-x-5 py-1 '><p className="flex-r flex-1 gap-x-5 "><span className="text-xl">{value.icon}</span> {value.title}</p> <span ><MdChevronRight/></span></li>
                        )
                    })
                }
            </ul>
        </div>

        <div className="red py-3 px-2 rounded-lg w-5/6 text-xs flex flex-col pl-5 gap-y-2 mt-2">

            <p className="text-white">Check your job <br/> schedule</p>
            <span ><BsArrowRight className="fill-white"/></span>
        </div>

    </div>
  )
}

export default LeftSide