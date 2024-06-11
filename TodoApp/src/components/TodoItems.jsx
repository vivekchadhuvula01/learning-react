import React from 'react'
import tick from '../assets/check-black.png'
import not_tick from '../assets/not_check-black.png'
import delete_icon from '../assets/delete-black.png'

const TodoItems = ({ text, id, isCompleted, deleteTodo }) => {

    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer'>
                <img src={tick} alt="tick" className='w-7' />
                <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
            </div>
            <img src={delete_icon} onClick={() => { deleteTodo(id) }} alt="delete_icon" className='w-7 cursor-pointer' />
        </div>
    )
}

export default TodoItems
