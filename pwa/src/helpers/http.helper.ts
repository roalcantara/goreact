const getResult = async (response: Response) => {
  const isJson = response.headers
    .get('content-type')
    ?.includes('application/json')

  const data = isJson && (await response.json())

  // check for error response
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status
    return Promise.reject(error)
  }

  return data
}

const sendData = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
  url: string,
  data: unknown = {}
) => {
  if (method !== 'GET' && method !== 'HEAD' && data != null) {
    const opts: RequestInit = {
      method, // *GET, POST, PUT, DELETE, etc.
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    opts.body = JSON.stringify(data) // body data type must match "Content-Type" header
    return fetch(url, opts).then(getResult)
  }
  return fetch(url).then(getResult)
}

export const getData = (url: string, data = null) => sendData('GET', url, data)
export const putData = (url: string, data = {}) => sendData('PUT', url, data)
export const postData = (url: string, data = {}) => sendData('POST', url, data)
export const deleteData = (url: string, data = {}) =>
  sendData('DELETE', url, data)
