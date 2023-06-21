import React from 'react'
import Navbar from '../navbar'

function MainLayout({children}) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout
