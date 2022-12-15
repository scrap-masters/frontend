import axios from "axios"

// THIS PROBABLY SHOULD BE IN .ENV FILE
const baseURL = process.env.BASE_URL

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(baseURL + url, {
      ...params
    })
}
