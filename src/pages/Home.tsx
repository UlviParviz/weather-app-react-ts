import Forecast from '../components/Forecast'
import Search from '../components/Search'

import useForecast from '../hooks/useForecast'

const Home = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast()

    

  return (
    <main className="flex justify-center items-center bg-blue-500 w-full py-1">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default Home