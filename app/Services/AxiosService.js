// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 3000
})

// @ts-ignore
export const GiphyServer = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 3000,
})