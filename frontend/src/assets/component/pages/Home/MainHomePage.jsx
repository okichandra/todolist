import React from 'react'
import HomeFinance from './HomeFinance'
import TaskList from './TaskList'

function MainHomePage({ mainHome }) {
    return (
        <div className='pt-4'>
            <h1 className='text-second-text-color text-3xl capitalize font-semibold'>good morning, {mainHome.firstName}</h1>
            <span className='text-second-text-color font-thin text-xs text-text-color-900'>start your day with smile</span>
            <HomeFinance homeData={mainHome}/>
            <TaskList />
        </div>
    )
}

export default MainHomePage
