import { appState } from "../AppState.js"
import { GiphyGif } from "../Models/GiphyGif.js"
import { GiphyServer, SandboxServer } from "./AxiosService.js"


class GiphyService {
  async search(query) {
    const res = await GiphyServer.get('search', {
      params: {
        api_key: 'XhhdJHA8U0uQIiQzXv9OQ6FiZjTzZSTJ',
        rating: 'pg',
        limit: 10,
        q: query
      }
    })
    appState.giphyGifs = res.data.map(g => new GiphyGif(res.data))
  }
}

export const giphyService = new GiphyService()