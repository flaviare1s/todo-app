/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { url } from "../../utils/url"
export const NewTodo = ({ mode, fetchTodos }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    const trimedTitle = title.trim()
    if (!trimedTitle) return
    try {
      await axios.post(`${url}/todos`, { title, status: 'active' })
      setTitle('')
      fetchTodos()
      toast.success('Todo created')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input value={title} onChange={(e) => setTitle(e.target.value)} className={`font-josefin-sans text-very-dark-grayish-blue text-xs md:text-base h-12 md:h-16 w-full mt-10 rounded-[5px] px-[52px] placeholder:text-dark-grayish-blue placeholder:text-xs md:placeholder:text-base ${mode === 'light' ? 'bg-white' : 'bg-dark-mode-input'}`} type="text" placeholder="Create a new todo..." />
      <span className={`h-5 w-5 border rounded-full absolute top-[52px] md:top-[60px] left-[20px] ${mode === 'light' ? 'border-light-grayish-blue' : 'border-very-dark-grayish-blue'}`}></span>
    </form>
  )
}
