import '../styles/PopularMovies.css'
import PopularMoviesItem from './PopularMoviesItem'

const PopularMovies = () => {
  return (
    <>
      <section className='popular-movies'>
        <div className='popular-movies-container'>
          <div className='popular-movies-header'>
            <h1 className='popular-movies-title'>Popular Movies to Watch Now</h1>
            <p className='popular-movies-subtitle'>
              Most watched movies by days
            </p>
            <div className='popularmovies-separator'>
              <button>View All</button>
            </div>
          </div>
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
          <PopularMoviesItem />
        </div>
      </section>
    </>
  )
}

export default PopularMovies
