


export class GiphyGif {
  constructor(data) {
    this.url = data.url
  }

  get Template() {
    return /*html*/ `
    <div class="row">
      <div class="col-md-2">
        <img src="${this.url}" alt="">
      </div>
    </div>
    `
  }
}