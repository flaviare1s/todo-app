import { todos } from '../../../todoData.json'
import checkIcon from '../images/icon-check.svg'
import crossIcon from '../images/icon-cross.svg'

export const Todos = () => {

  return (
    <>
      <section className='bg-white rounded-[5px] mt-[16px] shadow-sm'>
        {todos.map((todo) => (
          <div key={todo.id} className='px-5 h-12 md:h-16 flex justify-between items-center border-b border-very-light-grayish-blue'>
            <div className='flex items-center'>
              <button className={`h-5 w-5 border border-light-grayish-blue rounded-full relative ${todo.completed ? 'bg-gradient-to-r from-linear-gradient-1 to-linear-gradient-2' : ''}`}></button>
              {todo.completed && <img className='absolute p-1 pointer-events-none' src={checkIcon} alt="check" />}
              <button className={`px-3 text-xs md:text-base text-very-dark-grayish-blue ${todo.completed ? 'text-very-light-grayish-blue line-through' : ''}`}>{todo.title}</button>
            </div>
            <button><img className='h-3' src={crossIcon} alt="cross" /></button>
          </div>
        ))}
        <div className='h-12 flex justify-around items-center text-xs md:text-base text-dark-grayish-blue'>
          <span>{todos.length} items left</span>
          <button>Clear Completed</button>
        </div>
      </section>
      <div className='h-12 flex justify-evenly bg-white rounded-[5px] font-bold items-center text-xs md:text-base mt-4 text-dark-grayish-blue shadow-sm'>
          <button className='hover:text-bright-blue'>All</button>
          <button className='hover:text-bright-blue'>Active</button>
          <button className='hover:text-bright-blue'>Completed</button>
        </div>
        <p className='text-center text-dark-grayish-blue text-xs md:text-base my-10'>Drag and drop to reorder list</p>
    </>
  )
}

