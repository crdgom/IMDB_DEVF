import HeroRecomendations from './HeroRecomendations'
import Menu from './Menu'
import PopularMovies from './PopularMovies'

import '../styles/App.css'

function App () {
  return (
    <div className='App'>
      <Menu />
      <HeroRecomendations
        title='The Avengers'
        year='2017'
        category='Comedy'
        time='1hr 55min'
      />
      <PopularMovies />
    </div>
  )
}

export default App
