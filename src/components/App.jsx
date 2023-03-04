import HeroRecommendations from './HeroRecommendations'
import Menu from './Menu'
import PopularMovies from './PopularMovies'

import '../styles/App.css'

function App () {
  return (
    <div className='App'>
      <Menu />
      <HeroRecommendations />
      <PopularMovies />
    </div>

  )
}

export default App
