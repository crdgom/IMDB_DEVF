import { useState, useEffect } from 'react'
import RecommendationGrid from './RecommendationGrid'
import { instance } from '../services/instance'

import '../styles/HeroRecommendations.css'

const HeroRecommendations = () => {
  const [heroRecommendationData, setHeroRecommendationData] = useState({})

  useEffect(() => {
    instance.get('movie/852096?api_key=72d71bb3a417fc00b20abd6c2412664c').then(({ data }) =>
      setHeroRecommendationData(data)
    )
  }, [])
  const validateHeroRecommendationData = Object.keys(heroRecommendationData)
  const { genres } = heroRecommendationData
  const baseURL = 'https://image.tmdb.org/t/p/w1280/'
  const composedUrl = `${baseURL}${heroRecommendationData.backdrop_path}`
  const background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${composedUrl}')`
  }
  return (
    <>
      <section>
        <div className='hero-container' style={background}>
          <div className='recommendation-movie'>
            <div className='recommendation-movie-container'>
              {
                validateHeroRecommendationData.length !== 0 &&
                  <div>
                    <h1>{heroRecommendationData.original_title}</h1>
                    <p>{heroRecommendationData.release_date} |
                      {
                      genres.map((genre) =>
                        <span key={genre.id}> {genre.name} </span>
                      )
}
                    </p>
                  </div>
              }
              <div className='buttons-holder'>
                <button className='btn btn-primary btn-lg spread-1'> Info </button>
                <button className='btn btn-outline-light btn-lg'> <i className='bi bi-plus' /> Add to Playlist</button>
              </div>
            </div>
          </div>
          <div className='recommendation-grid'>
            <RecommendationGrid />
          </div>
          <div className='fade-banner' />
        </div>
      </section>
    </>
  )
}

export default HeroRecommendations
