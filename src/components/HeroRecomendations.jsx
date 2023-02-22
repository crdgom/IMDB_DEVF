import RecomendationGrid from './RecomendationGrid'
import '../styles/HeroRecomendations.css'

const HeroRecomendations = ({ title, year, category, time }) => {
  return (
    <>
      <section>
        <div className='hero-container'>
          <div className='recomendation-movie'>
            <div className='recomendation-movie-container'>
              <h1>{title}</h1>
              <p>{year} | {category} | {time}</p>
              <div className='buttons-holder'>
                <button className='btn btn-primary btn-lg spread-1'> Watch Now </button>
                <button className='btn btn-outline-light btn-lg'> <i className='bi bi-plus' /> Add to Playlist</button>
              </div>
            </div>
          </div>
          <div className='recomendation-grid'>
            <RecomendationGrid />
          </div>
          <div className='fade-banner' />
        </div>
      </section>
    </>
  )
}

export default HeroRecomendations
