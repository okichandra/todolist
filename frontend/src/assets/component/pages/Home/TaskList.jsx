import React from 'react'
import HomeCategories from './HomeCategories'
import ShortTimeData from '../../../../../../ShortTimeData.js'
import Task from './Task'

let category = []
let task = ShortTimeData.activityData.mainActivity.task
task.forEach(element => category.push(element.category))

const uniqueArr = [...new Set(category)]

function TaskList() {
    return (
        <div className='pb-32'>
            <HomeCategories category={uniqueArr} />
            <Task task={task}/>
        </div>
    )
}

export default TaskList
