import React, { useEffect, useRef, useState } from 'react'
import Title_icon from '../assets/todo_icon-black.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const inputRef = useRef()

    const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
    

    const add = () => {
        const inputText = inputRef.current.value.trim();
        console.log(todoList)
        if(inputText=== '') return null
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    }

    const deleteTodo = (id) => { 
        setTodoList((prev) => {
         return prev.filter((todo) => todo.id !== id)
        })
    }

    
    const Toggle = (id) => {
        setTodoList((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return {...todo , isCompleted: !todo.isCompleted}
                }
                return todo
            }
            )
        }
        )
    }

    useEffect(() => {
        // console.log(todoList)
        localStorage.setItem('todos',JSON.stringify(todoList))
     },[todoList])
    


    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            {/* title */}
            <div className='flex items-center mt-7 gap-2 '>
                <img src={Title_icon} alt="title" className='w-10' />
                <h1 className='text-3xl font-semibold '> Todo List</h1>
            </div>

            {/* input box */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" name="" id="" placeholder='Add your Task' ref={inputRef} />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer '>ADD +</button>
            </div>
            {/* todo list`` */}
            <div>
                {todoList.map((item , index) => {
                    return <TodoItems key={index} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo} Toggle={Toggle } />
                })}
               
            </div>

        </div>
    )
}

export default Todo
