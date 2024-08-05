/* eslint-disable react/prop-types */
export const NewTodo = ({ mode }) => {
  return (
    <form className="relative">
      <input className={`font-josefin-sans text-very-dark-grayish-blue text-xs md:text-base h-12 md:h-16 w-full mt-10 rounded-[5px] px-[52px] placeholder:text-dark-grayish-blue placeholder:text-xs md:placeholder:text-base ${mode === 'light' ? 'bg-white' : 'bg-dark-mode-input'}`} type="text" placeholder="Create a new todo..." />
      <span className={`h-5 w-5 border rounded-full absolute top-[52px] md:top-[60px] left-[20px] ${mode === 'light' ? 'border-light-grayish-blue' : 'border-very-dark-grayish-blue'}`}></span>
    </form>
  )
}
