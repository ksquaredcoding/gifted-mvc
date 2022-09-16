


export class GiphyGif {
  constructor(data) {
    this.url = data.images.downsized.url
    this.type = data.type
    this.id = data.id
  }

  get Template() {
    return /*html*/ `
      <div class="col-md-2">
        <img src="${this.url}" alt="">
      </div>
    `
  }
}