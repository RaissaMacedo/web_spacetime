import axios from 'axios'
// caminho padrão para backend
// requisição p/ backend
export const api = axios.create({
  baseURL: 'http://192.168.1.13:3333',
})
