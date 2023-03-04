import React, { useState, useEffect } from 'react'
import { getPopularMoviesDay } from '../helpers/getPopularMoviesDay'
import { getGenres } from '../helpers/genresHelper'
import '../styles/PopularMoviesItem.css'

const PopularMoviesItem = () => {
  const [recommendationsData, setRecommendationsData] = useState([])
  const [genres, setGenres] = useState([])

  const getRecommendationsData = async () => {
    const newRecommendationsData = await getPopularMoviesDay()
    setRecommendationsData(newRecommendationsData.slice(0, 12))
  }

  const getGenresData = async () => {
    const newGenresData = await getGenres()
    setGenres(newGenresData)
  }

  useEffect(() => {
    getRecommendationsData()
    getGenresData()
  }, [])
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/'
  // crear funcion que compare los id recommendationData y genres  y guarde los generos en un array
  const getGenres = (recommendationsData, genres) => {
    const genresArray = []
    recommendationsData.forEach((recommendation) => {
      recommendation.categories.forEach((category) => {
        genres.forEach((genre) => {
          if (category.id === genre.id) {
            genresArray.push(genre.name)
          }
        })
      })
    })
    return genresArray
  }
  console.log(getGenres(recommendationsData, genres))
  return (
    <>
      {
        recommendationsData.map(recommendation => (
          <div key={recommendation.id} className='popular-movies-item'>
            <div className='popular-movies-item-featured-container'>
              <p className='popular-movies-item-featured'>featured</p>
            </div>
            <img className='popular-movies-img' src={baseImageUrl + recommendation.image} alt={recommendation.title} />
            <div className='popular-movies-item-info'>
              <div className='popular-movies-basic-info'>
                <p className='popular-movies-item-year'>{recommendation.year}, </p>
                <p className='popular-movies-item-categories'>
                  {
                    /* recommendation.categories.map((category) =>
                    <span key={category.id}> {category.id} </span>
                   ) */
                  }
                </p>
              </div>
              <h4 className='popular-movies-item-title'>{recommendation.title}</h4>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default PopularMoviesItem
