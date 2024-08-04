/* eslint-disable react/prop-types */
import bgDesktopLight from '../images/bg-desktop-light.jpg'
import bgDesktopDark from '../images/bg-desktop-dark.jpg'
import bgMobileLight from '../images/bg-mobile-light.jpg'
import bgMobileDark from '../images/bg-mobile-dark.jpg'

export const Background = ({ mode }) => {
  return (
    <picture>
    <source media="(min-width: 375px)" srcSet={mode === 'light' ? bgDesktopLight : bgDesktopDark} />
    <img className='w-screen h-[200px] md:h-[300px] object-cover' src={mode === 'light' ? bgMobileLight : bgMobileDark} alt="background" />
  </picture>
  )
}
