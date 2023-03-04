import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/'

export const instance = axios.create({
  baseURL: API_URL
})
