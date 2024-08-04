// eslint-disable-next-line react/prop-types
export const Footer = ({ mode }) => {
  return (
    <footer className={`text-center text-xs mt-3 ${mode === 'dark' ? 'text-light-grayish-blue' : ''}`}>
      Challenge by <a className="text-bright-blue font-bold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a className="text-bright-blue font-bold" href="https://github.com/flaviare1s" target="_blank">Flávia Reis</a>.
    </footer>
  )
}

