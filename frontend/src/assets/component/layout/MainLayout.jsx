import React from 'react'
import Navbar from '../pages/PageComponent/Navbar'

function MainLayout({children}) {
    return (
        <div className='bg-main-color px-4 pt-4 pb-16 font-poppins'>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout
