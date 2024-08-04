import { useState } from 'react'
import { Footer } from './assets/components/Footer'
import lightMode from '../src/assets/images/icon-sun.svg'
import darkMode from '../src/assets/images/icon-moon.svg'
import bgDesktopLight from '../src/assets/images/bg-desktop-light.jpg'
import bgDesktopDark from '../src/assets/images/bg-desktop-dark.jpg'
import bgMobileLight from '../src/assets/images/bg-mobile-light.jpg'
import bgMobileDark from '../src/assets/images/bg-mobile-dark.jpg'
import './App.css'

export function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <main className='relative'>
        <picture>
          <source media="(min-width: 375px)" srcSet={mode === 'light' ? bgDesktopLight : bgDesktopDark} />
          <img className='w-screen h-[200px] md:h-[300px] object-cover' src={mode === 'light' ? bgMobileLight : bgMobileDark} alt="background" />
        </picture>
        <header className='flex justify-between items-center px-[26px] pt-12 md:pt-[70px] w-full sm:w-[540px] m-auto absolute top-0 left-1/2 -translate-x-1/2'>
          <h1 className='text-white uppercase font-bold tracking-[10px] md:tracking-[15px] text-3xl md:text-4xl'>Todo</h1>
          <button onClick={changeMode}><img className='h-5 md:h-[26px]' src={mode === 'light'? darkMode : lightMode } alt="Icon" /></button>
        </header>
        
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
