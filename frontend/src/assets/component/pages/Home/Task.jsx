import * as React from 'react';
import List from './List';

function Task({ task }) {
    let taskLength = task.length
    console.log(task);
    return (
        <div className='mt-4'>
            <div className="title flex text-text-color-900 items-center">
                <h1 className='font-light capitalize'>Today's task</h1>
                <span className='ml-6 bg-second-color py-1 px-2 font-medium rounded-lg'>{taskLength}</span>
            </div>
            <List task={task}/>
        </div>
    )
}

export default Task
