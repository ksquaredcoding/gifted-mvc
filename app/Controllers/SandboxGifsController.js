import { appState } from "../AppState.js"
import { sandboxGifsService } from "../Services/SandboxGifsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSandboxGifs() {
  let template = ''
  appState.sandboxGifs.forEach(g => template += g.Template)
  setHTML('sandbox-gifts', template)
}

export class SandboxGifsController {
  constructor() {
    appState.on('sandboxGifs', _drawSandboxGifs)
    this.getSandboxGifs()
  }

  async getSandboxGifs() {
    try {
      await sandboxGifsService.getSandboxGifs()
    } catch (error) {
      console.error('[Getting Sanndbox Gifs]', error)
      Pop.error(error)
    }
  }

  async sendGift() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      await sandboxGifsService.sendGift(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[SENDING GIFT]', error)
      Pop.error(error)
    }
  }

  async unwrapGift(id) {
    try {
      await sandboxGifsService.unwrapGift(id)
    } catch (error) {
      console.error('[UNWRAPPING GIFT]', error)
      Pop.error(error)
    }
  }
}