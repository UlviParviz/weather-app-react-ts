import { ChangeEvent } from 'react'
import { FaSearch } from 'react-icons/fa'
import { OptionType } from '../types/index'
import img from '../assets/images/favicon.png'
import Suggestions from './Suggestions'

type Props = {
  term: string,
  options: [],
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onOptionSelect: (option: OptionType) => void ,
  onSubmit: () => void

  
}

const Search = ({term,onInputChange,options,onOptionSelect,onSubmit}: Props): JSX.Element => {

  return (
    <main className="flex justify-center items-center h-[100vh] w-full bg-blue-500">
      <div
        className="bg-white bg-opacity-20 backdrop-blur-lg 
        drop-shadow-lg rounded w-full md:max-w-[500px] p-4 flex flex-col 
        text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] text-zinc-700"
      >
        <img className='w-[40%] md:w-[50%] lg:w-[60%]' src={img} alt="" />
        <h1 className="text-3xl font text-white mt-2">
          Weather <span className="font-extrabold">Forecast</span>
        </h1>

        <div className="relative flex mt-10 md:mt-8">
          <input
            type="text"
            className="px-2 py-1 rounded-l-md border-2 border-white focus:outline-none font-bold"
            onChange={onInputChange}
            value={term}
          />
          {term.length > 0 && (
            <Suggestions options={options} onSelect={onOptionSelect}/>
          )}

          <button
            onClick={onSubmit}
            className="rounded-r-md border-t-2 border-r-2 border-b-2 flex justify-center items-center bg-white hover:text-blue-600 transition-all duration-500
         text-blue-500 px-2 py-1 cursor-pointer"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Search
