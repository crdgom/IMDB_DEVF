export const getGenres = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=72d71bb3a417fc00b20abd6c2412664c'
  const resp = await fetch(url)
  const { genres } = await resp.json()
  return genres
}
