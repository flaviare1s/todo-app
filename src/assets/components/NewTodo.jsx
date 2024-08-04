export const NewTodo = () => {
  return (
    <form className="relative">
      <input className="h-12 w-full mt-10 rounded-[5px] px-14 placeholder:text-dark-grayish-blue placeholder:text-xs" type="text" placeholder="Create a new todo..." />
      <span className="h-5 w-5 border border-light-grayish-blue rounded-full absolute top-[52px] left-[20px]"></span>
    </form>
  )
}
