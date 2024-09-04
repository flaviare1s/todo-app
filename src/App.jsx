import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import './App.css'
import { Header } from './components/Header'
import { Background } from './components/Background'
import { NewTodo } from './components/NewTodo'
import { Todos } from './components/Todos'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { url } from "../utils/url"


export function App() {
  const [mode, setMode] = useState('light')
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${url}/todos`)
      setTodos(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <div className={`relative h-screen ${mode === 'light' ? 'bg-very-light-gray' : 'bg-black'}`}>
       <Background mode={mode} />
        <main className='flex flex-col px-[26px] pt-12 md:pt-[70px] w-full sm:w-[540px] m-auto absolute top-0 left-1/2 -translate-x-1/2'>
          <Header mode={mode} changeMode={changeMode} />
          <NewTodo fetchTodos={fetchTodos} mode={mode} />
          <Todos fetchTodos={fetchTodos} todos={todos} setTodos={setTodos} mode={mode} />
          <Footer mode={mode} />
        </main>
        <Toaster position="top-center" />
      </div>
    </>
  )
}
