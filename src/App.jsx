import { useState } from 'react'
import { Footer } from './assets/components/Footer'
import './App.css'
import { Header } from './assets/components/Header'
import { Background } from './assets/components/Background'

export function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div className='relative'>
       <Background mode={mode} />
        <main className='flex justify-between items-center px-[26px] pt-12 md:pt-[70px] w-full sm:w-[540px] m-auto absolute top-0 left-1/2 -translate-x-1/2'>
          <Header mode={mode} changeMode={changeMode} />
        </main>
      </div>
      <Footer />
    </>
  )
}
