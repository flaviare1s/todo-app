import { useState } from 'react'
import { Footer } from './assets/components/Footer'
import lightMode from '../src/assets/images/icon-sun.svg'
import darkMode from '../src/assets/images/icon-moon.svg'
import './App.css'

export function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <main className={mode === 'light' ? 'bg-bg-mobile-light h-[200px] tablet:bg-bg-desktop-light md:h-[300px] w-screen' : 'bg-bg-mobile-dark h-[200px] tablet:bg-bg-desktop-dark md:h-[300px] w-screen'} >
        <header className='flex justify-between items-center px-[26px] pt-12'>
          <h1 className='text-white uppercase font-bold tracking-[4px] text-3xl'>Todo</h1>
          <button onClick={changeMode}><img src={mode === 'light'? darkMode : lightMode } alt="Icon" /></button>
        </header>
        
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
