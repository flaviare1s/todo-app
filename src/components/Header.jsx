/* eslint-disable react/prop-types */
import lightMode from '../assets/images/icon-sun.svg'
import darkMode from '../assets/images/icon-moon.svg'

export const Header = ({ mode, changeMode }) => {
  return (
    <header className='flex justify-between items-center w-full'>
      <h1 className='text-white uppercase font-bold tracking-[10px] md:tracking-[15px] text-3xl md:text-4xl'>Todo</h1>
      <button onClick={changeMode}><img className='h-5 md:h-[26px]' src={mode === 'light'? darkMode : lightMode } alt="Icon" /></button>
    </header>
  )
}
