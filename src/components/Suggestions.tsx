import { OptionType } from './../types/index'

type componentProps = {
  options: []
  onSelect: (option: OptionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => (
  <ul className="absolute top-9 bg-white ml-1 rounded-b-md w-[96.5%]">
    {options.map((option: OptionType, index: number) => (
      <li key={option.name + '-' + index}>
        <button
          className="text-left text-md w-full hover:text-blue-500 px-2 py-1 cursor-pointer transition-all duration-700"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)

export default Suggestions