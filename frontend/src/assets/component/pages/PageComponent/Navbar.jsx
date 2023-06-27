import React from 'react'
import Activity from '../../../image/icon/Activity.svg'
import Finance from '../../../image/icon/Finance.svg'
import HomeIcon from '../../../image/icon/HomeIcon.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='drop-shadow-2xl bg-main-color left-0 bg-fixed p-4 m-0 bottom-0 fixed w-full rounded-t-lg z-50'>
            <ul className='flex justify-between'>
                <li><Link to='/activity'><img src={Activity} alt="" /></Link></li>
                <li><Link to='/'><img src={HomeIcon} alt="" /></Link></li>
                <li><Link to='/finance'><img src={Finance} alt="" /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar