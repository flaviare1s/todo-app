import { useState } from 'react'
import { Footer } from './assets/components/Footer'
import bgDesktopLight from '../src/assets/images/bg-desktop-light.jpg'
import bgDesktopDark from '../src/assets/images/bg-desktop-dark.jpg'
import bgMobileLight from '../src/assets/images/bg-mobile-light.jpg'
import bgMobileDark from '../src/assets/images/bg-mobile-dark.jpg'
import './App.css'
import { Header } from './assets/components/Header'

export function App() {
  const [mode, setMode] = useState('light')

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div className='relative'>
        <picture>
          <source media="(min-width: 375px)" srcSet={mode === 'light' ? bgDesktopLight : bgDesktopDark} />
          <img className='w-screen h-[200px] md:h-[300px] object-cover' src={mode === 'light' ? bgMobileLight : bgMobileDark} alt="background" />
        </picture>
        <main className='flex justify-between items-center px-[26px] pt-12 md:pt-[70px] w-full sm:w-[540px] m-auto absolute top-0 left-1/2 -translate-x-1/2'>
          <Header mode={mode} changeMode={changeMode} />
        </main>
        
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
