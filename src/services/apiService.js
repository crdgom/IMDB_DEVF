import { instance } from './instance'

export const getMovies = async ({ select = 'id', limit = 50 }) => {
  const { data } = await instance.get(`/movies?select=${select}&limit=${limit}`)
  return data
}
