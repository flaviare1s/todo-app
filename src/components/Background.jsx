/* eslint-disable react/prop-types */
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg'
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg'
import bgMobileLight from '../assets/images/bg-mobile-light.jpg'
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg'

export const Background = ({ mode }) => {
  return (
    <picture>
    <source media="(min-width: 375px)" srcSet={mode === 'light' ? bgDesktopLight : bgDesktopDark} />
    <img className='w-screen h-[200px] md:h-[300px] object-cover' src={mode === 'light' ? bgMobileLight : bgMobileDark} alt="background" />
  </picture>
  )
}
