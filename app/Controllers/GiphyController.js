import { appState } from "../AppState.js"
import { giphyService } from "../Services/GiphyService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawGiphyGifs() {
  let template = ''
  appState.giphyGifs.forEach(g => template += g.Template)
  setHTML('giphy-gifs', template)
}

export class GiphyController {
  constructor() {
    appState.on('giphyGifs', _drawGiphyGifs)
  }

  async search() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let query = getFormData(form)
      await giphyService.search(query)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[SEARCHING]', error)
      Pop.error(error)
    }

  }
}