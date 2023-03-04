import { useState, useEffect } from 'react'
import { getRecommendations } from '../helpers/getRecommendations'

import '../styles/RecommendationGrid.css'

const RecommendationGrid = () => {
  const [recommendationsData, setRecommendationsData] = useState([])

  const getRecommendationsData = async () => {
    const newRecommendationsData = await getRecommendations()
    setRecommendationsData(newRecommendationsData.slice(0, 9))
  }

  useEffect(() => {
    getRecommendationsData()
  }, [])
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/'
  return (
    <>
      <div className='grid-content'>
        <h3 className='grid-content-title'>Todays Recommendations</h3>
        <div className='grid'>
          {
          recommendationsData.map(recommendation => (
            <div key={recommendation.id} className='grid-item'>
              <img key={recommendation.id} src={baseImageUrl + recommendation.image} alt={recommendation.title} />
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default RecommendationGrid

// key={id}
