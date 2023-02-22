import axios from 'axios'

const API_URL = ''

export const instance = axios.create({
  baseURL: API_URL
})
