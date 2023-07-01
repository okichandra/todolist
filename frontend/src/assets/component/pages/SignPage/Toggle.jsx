import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Toggle({ info }) {
    return (
        <div className='text-text-color-900 mt-4 capitalize text-center relative flex justify-between m-1 rounded-lg p-1 w-4/5 mx-auto bg-second-color'>
            <span className='p-3 w-full login toggle relative z-10 rounded-lg'>
                <Link to='/login'>
                    login
                </Link>
            </span>
            <span className='p-3 w-full register toggle relative z-10 rounded-lg'>
                <Link to='/register'>
                    register
                </Link>
            </span>
            <div id='animate' className={`animate duration-300 bg-main-color w-1/2 h-5/6 rounded-lg top-1/2 -translate-y-1/2 absolute ${info}`}></div>
        </div>
    )
}

export default Toggle
