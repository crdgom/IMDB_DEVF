export const getRecommendations = async () => {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=72d71bb3a417fc00b20abd6c2412664c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
  const resp = await fetch(url)
  const { results } = await resp.json()

  const recommendations = results.map((results) => ({
    id: results.id,
    image: results.backdrop_path,
    title: results.original_title
  }))
  return recommendations
}
