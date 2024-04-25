import nodeFetch, { RequestInfo, RequestInit } from 'node-fetch'

const fetch = async <T>(url: RequestInfo, init?: RequestInit): Promise<T> => {
  const response = await nodeFetch(url, init)

  return await response.json()
}


