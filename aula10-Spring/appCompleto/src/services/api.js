

import axios from 'axios'


const BASE_URL = 'https://fuzzy-chainsaw-q7q56466q75jf94w5-8080.app.github.dev'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api