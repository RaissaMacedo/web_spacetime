import axios from 'axios'
// caminho padrão para backend
// requisição p/ backend
export const api = axios.create({
  baseURL: 'http://localhost:3333',
})
