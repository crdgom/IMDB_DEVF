import '../styles/PopularMovies.css'
import PopularMoviesItem from './PopularMoviesItem'
const PopularMovies = () => {
  return (
    <>
      <section className='popular-movies'>
        <div className='popular-movies-container'>
          <div className='popular-movies-header'>
            <h1 className='popular-movies-title'>Popular Movies & TV to Watch Now</h1>
            <p className='popular-movies-subtitle'>
              Most watched movies by day
            </p>
            <div className='popular-movies-separator'>
              <button className='btn btn-outline-light btn-lg'>View All</button>
            </div>
          </div>
          <PopularMoviesItem />
        </div>
      </section>
    </>
  )
}

export default PopularMovies
