import axios from "axios"

// THIS PROBABLY SHOULD BE IN .ENV FILE
const baseURL = process.env.BASE_URL

console.log(process.env)

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(baseURL + url, {
      ...params
    })
}
