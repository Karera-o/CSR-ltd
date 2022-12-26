import React from 'react'
import {CgMenuBoxed} from "react-icons/cg"
import {RiArrowDownSLine} from "react-icons/ri"
import {MdSupervisedUserCircle, MdChevronRight} from "react-icons/md"
import {BsGlobe} from "react-icons/bs"
import {GrSettingsOption} from "react-icons/gr"
import {GiNotebook} from "react-icons/gi"
const LeftSide = () => {
  return (
    <div>
        <div>
            <span></span>
            <p className='uppercase'>eres</p>
        </div>
        <div>
            <h1>
                <span></span>
                Dashboard
                <span><RiArrowDownSLine /></span>
            </h1>
            <ul>
                <li>Dashboard Light</li>
            </ul>
        </div>
        <div>
            <h1>
                <span><CgMenuBoxed/></span>
                Appointment
                </h1>
                <ul>
                    <li><span><MdSupervisedUserCircle/></span> Staff <span>MdChevronRight</span></li>
                </ul>
        </div>

        <div>
            <h1><span><GrSettingsOption/></span> Widget</h1>
            <ul>
                <li><span><GiNotebook/></span> Forms</li>
            </ul>
        </div>

        <div>
            <p>Check your job schedule</p>
            <span></span>
        </div>

    </div>
  )
}

export default LeftSide