/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import checkIcon from '../assets/images/icon-check.svg'
import crossIcon from '../assets/images/icon-cross.svg'
import axios from 'axios'
import { url } from "../../utils/url"


export const Todos = ({ mode, todos, setTodos, fetchTodos }) => {
  const [filter, setFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === 'active' ? 'completed' : 'active'
      await axios.put(`${url}/todos/${id}`, { status: newStatus })
      setTodos(todos.map(todo => todo.id === id ? { ...todo, status: newStatus } : todo))
      fetchTodos()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setFilteredTodos(todos.filter(todo => {
      if (filter === 'all') return true
      if (filter === 'active') return todo.status === 'active'
      if (filter === 'completed') return todo.status === 'completed'
      return false
    }))
  }, [todos, filter])

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${url}/todos/${id}`)
      setTodos(todos.filter(todo => todo.id !== id))
      fetchTodos()
    } catch (error) {
      console.error(error)
    }
  }

  const clearCompleted = async () => {
    try {
      await axios.delete(`${url}/todos/completed`)
      fetchTodos()
    } catch (error) {
      console.error(error)
    }
  }

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  return (
    <>
      <section className={`rounded-[5px] mt-[16px] shadow-sm ${mode === 'light' ? 'bg-white' : 'bg-dark-mode-input'}`}>
        {filteredTodos.map((todo) => (
          <div key={todo.id} className={`px-5 p-4 md:p-5 flex justify-between items-center border-b ${mode === 'light' ? 'border-light-grayish-blue' : 'border-very-dark-grayish-blue'}`}>
            <div className='flex items-center'>
              <button onClick={() => toggleStatus(todo.id, todo.status)} className={`h-5 w-5 border pr-[19px] ${mode === 'light' ? 'border-light-grayish-blue' : 'border-very-dark-grayish-blue'} rounded-full relative ${todo.status === 'completed' ? 'bg-gradient-to-r from-linear-gradient-1 to-linear-gradient-2' : ''}`}></button>
              {todo.status === 'completed' && <img className='absolute p-1 pointer-events-none' src={checkIcon} alt="check" />}
              {mode === 'light' && 
              <button className={`pl-3 pr-4 text-xs md:text-base text-very-dark-grayish-blue ${todo.status === 'completed' ? 'text-very-light-grayish-blue line-through' : ''}`}>
              {todo.title}
              </button>}
              {mode === 'dark' && 
              <button className={`px-3 text-xs md:text-base text-very-dark-grayish-blue ${todo.status === 'completed' ? 'line-through' : 'text-very-light-grayish-blue'}`}>
              {todo.title}
            </button>}
            </div>
            <button className='w-3' onClick={() => deleteTodo(todo.id)}><img className='h-3 w-full' src={crossIcon} alt="cross" /></button>
          </div>
        ))}
        <div className={`h-12 flex justify-around items-center text-xs md:hidden ${mode === 'light' ? 'text-dark-grayish-blue' : 'text-very-dark-grayish-blue'}`}>
          <span>{filteredTodos.length} items left</span>
          <button className={`${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`} onClick={clearCompleted}>Clear Completed</button>
        </div>
        <div className={`hidden md:flex justify-around items-center text-sm h-12 ${mode === 'light' ? 'text-dark-grayish-blue' : 'text-very-dark-grayish-blue'}`}>
          <span>{filteredTodos.length} items left</span>
          <div className='flex justify-center gap-5'>
            <button onClick={() => changeFilter('all')} className={`font-bold ${filter === 'all' ? 'text-bright-blue' : ''} ${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`}>All</button>
            <button onClick={() => changeFilter('active')} className={`font-bold ${filter === 'active' ? 'text-bright-blue' : ''} ${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`}>Active</button>
            <button onClick={() => changeFilter('completed')} className={`font-bold ${filter === 'completed' ? 'text-bright-blue' : ''} ${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`}>Completed</button>
          </div>
          <button className={`${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`} onClick={clearCompleted}>Clear Completed</button>
        </div>
      </section>
      <div className={`h-12 flex justify-evenly rounded-[5px] font-bold items-center text-xs md:text-base mt-4 shadow-sm md:hidden ${mode === 'light' ? 'bg-white text-dark-grayish-blue' : 'bg-dark-mode-input text-very-dark-grayish-blue'}`}>
          <button onClick={() => changeFilter('all')} className={`${filter === 'all' ? 'text-bright-blue' : ''} ${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`}>All</button>
          <button onClick={() => changeFilter('active')} className={`${filter === 'active' ? 'text-bright-blue' : ''} ${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`}>Active</button>
          <button onClick={() => changeFilter('completed')} className={`${filter === 'completed' ? 'text-bright-blue' : ''} ${mode === 'light' ? ' hover:text-very-dark-grayish-blue' :  'hover:text-light-grayish-blue'}`}>Completed</button>
        </div>
        {/* <p className={`text-center text-sm md:text-base mb-10 ${mode === 'light' ? 'text-dark-grayish-blue' : 'text-very-dark-grayish-blue'}`}>Drag and drop to reorder list</p> */}
    </>
  )
}
