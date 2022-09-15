import { appState } from "../AppState.js"
import { SandboxGif } from "../Models/SandboxGif.js"
import { GiphyServer, SandboxServer } from "./AxiosService.js"

class SandboxGifsService {
  async unwrapGift(id) {
    let giftToUnwrap = appState.sandboxGifs.find(g => g.id == id)
    giftToUnwrap.opened = true
    console.log('is this the one?', giftToUnwrap);
    const res = await SandboxServer.put(`/api/gifts/${id}`, giftToUnwrap)
    let giftIndex = appState.sandboxGifs.findIndex(g => g.id == id)
    let unwrappedGift = new SandboxGif(res.data)
    appState.sandboxGifs.splice(giftIndex, 1, unwrappedGift)
    appState.emit('sandboxGifs')
  }
  async sendGift(formData) {
    const res = await SandboxServer.post('/api/gifts', formData)
    let gift = new SandboxGif(res.data)
    appState.sandboxGifs = [gift, ...appState.sandboxGifs]
  }
  async getSandboxGifs() {
    const res = await SandboxServer.get('/api/gifts')
    appState.sandboxGifs = res.data.map(g => new SandboxGif(g))
  }

}

export const sandboxGifsService = new SandboxGifsService()

