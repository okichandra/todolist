import React from 'react'

function HomeCategories({ category, task }) {
    let randomColor = ['bg-gradient-to-r from-cyan-500 to-blue-500', 'bg-gradient-to-r from-sky-500 to-indigo-500', 'bg-gradient-to-r from-violet-500 to-fuchsia-500', 'bg-gradient-to-r from-purple-500 to-pink-500']
    return (
        <div className='mt-8'>
            <div className="title flex text-text-color-900 items-center">
                <h1 className='font-light'>Categories</h1>
                <span className='ml-6 bg-second-color py-1 px-2 font-medium rounded-lg'>{category.length}</span>
            </div>
            <div className="categories grid grid-cols-2 mt-4 gap-3">
                {
                    category.map(category => (
                        <div key={category} className={`text-center rounded-lg text-text-color-900 font-medium text-sm p-4 ${randomColor[Math.floor(Math.random() * randomColor.length)]}`}>
                            <span className=''>{category}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCategories
