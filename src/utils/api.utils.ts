import axios from "axios"

// THIS PROBABLY SHOULD BE IN .ENV FILE
const baseURL = "https://backend.scrapmasters.site/api/v1"

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(baseURL + url, {
      ...params
    })
}
