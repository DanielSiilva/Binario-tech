import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
})


export const getKeyboard = () => api.get('/Keyboards')
export const getMouses = () => api.get('/Mouses')
export const getEarphones = () => api.get('/Earphones')