import React from 'react'

function HomeProfile({pageData}) {
    return (
        <div className='flex gap-2.5'>
            <div className="rounded-full image w-10 h-10 bg-slate-600"></div>
            <div className="profile-info flex flex-col justify-center">
                <h1 className='text-second-text-color font-bold capitalize'>
                    {pageData.userName}
                </h1>
                <span className='text-second-text-color text-xs'>
                    {pageData.email}
                </span>
            </div>
        </div>
    )
}

export default HomeProfile
