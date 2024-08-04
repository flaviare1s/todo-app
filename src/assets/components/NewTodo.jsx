export const NewTodo = () => {
  return (
    <form className="relative">
      <input className="font-josefin-sans text-very-dark-grayish-blue text-xs md:text-base h-12 md:h-16 w-full mt-10 rounded-[5px] px-[52px] placeholder:text-dark-grayish-blue placeholder:text-xs md:placeholder:text-base" type="text" placeholder="Create a new todo..." />
      <span className="h-5 w-5 border border-light-grayish-blue rounded-full absolute top-[52px] left-[20px]"></span>
    </form>
  )
}
