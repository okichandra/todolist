import React from 'react'
import Toggle from '../pages/SignPage/Toggle'

function SignLayout({ children, signData }) {
    return (
        <div className='bg-main-color flex min-h-screen justify-center'>
            <div className="bg-main-color max-w-lg pb-32 font-poppins flex relative flex-col p-4">
                <h1 className='text-center text-text-color-900 font-black pt-5 text-2xl'>TaskFin</h1>
                <div className="page mt-4">
                    <h2 className='text-center capitalize text-text-color-900 font-black text-3xl'>User {signData}</h2>
                    <p className='text-center text-second-text-color capitalize text-sm'>enter your details to login in to your account or register if you dont have</p>
                    <div>
                        {children}
                    </div>
                </div>
                <p className='text-second-text-color text-center text-xs pt-4 absolute bottom-4'>Come to join with this. You can track your money and can also make to do list for your productifity. <span className='font-bold text-text-color-900'>TaskFin</span> always with you and can help you to track your money </p>
            </div>
        </div>
    )
}

export default SignLayout
