export const getPopularMoviesDay = async () => {
  const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=72d71bb3a417fc00b20abd6c2412664c'
  const resp = await fetch(url)
  const { results } = await resp.json()

  const recommendations = results.map((results) => ({
    id: results.id,
    image: results.poster_path,
    title: results.original_title,
    popularity: results.popularity,
    categories: results.genre_ids,
    year: results.release_date
  }))
  return recommendations
}
