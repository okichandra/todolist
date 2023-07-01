import React, { useState } from 'react'
import SignLayout from '../../layout/SignLayout'
import Toggle from './Toggle'

function Login() {

    const [value, setValue] = useState("show")
    const [type, setType] = useState("password")

    const Change = () => {
        if (value === "hide") {
            setValue("Show")
            setType("password")
        } else {
            setValue("hide")
            setType("text")
        }
    }

    return (
        <SignLayout signData="login">
            <Toggle info="left-1" />
            <form action="">
                <input type="email" placeholder='Enter Email' className='pl-4 text-sm font-light text-second-text-color  w-full p-2 rounded-lg bg-main-color mt-4 border border-second-color' />
                <div className="pw mt-4 relative">
                    <input type={type} placeholder='Password' className='pl-4 font-light text-sm text-second-text-color  w-full p-2 rounded-lg bg-main-color border border-second-color' />
                    <span onClick={() => Change()} className='absolute top-1/2 -translate-y-1/2 text-text-color-900 font-medium text-xs capitalize right-4'>{value}</span>
                </div>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 font-medium mt-4 w-full p-3 rounded-lg text-sm text-text-color-900'>Continue</button>
            </form>
        </SignLayout>
    )
}

export default Login
