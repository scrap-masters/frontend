import { api } from "./api.utils"
import { useQuery, UseQueryOptions } from "react-query"

type QueryKey = [string, object | undefined]
type Fetcher = { queryKey: QueryKey }

export const fetcher = async <T>({ queryKey }: Fetcher): Promise<T> => {
  const [url, params] = queryKey
  const response = await api.get<T>(url, { params: { ...params } })
  return response.data
}

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKey>
) => {
  return useQuery<T, Error, T, QueryKey>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey }),
    {
      enabled: !!url,
      ...config
    }
  )
}
