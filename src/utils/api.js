//geralmente utilizado para guardar linhas de JAVASCRIPT relacionadas ao backend (DATABASE)
//menor relação com a parte renderizada

import axios from "axios"

const headers = {
  "client-token": process.env.REACT_APP_CLIENT_TOKEN
}

export const api = axios.create({
  headers
})
