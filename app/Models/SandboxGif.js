


export class SandboxGif {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag || 'Orphan Gif'
    this.url = data.url
    this.opened = data.opened
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-2 gift-card">
      <img src="${this.url}" alt="${this.tag}" class="img-fluid m-1 p-1">
      <p class="text-center m-1 p-1">${this.tag}</p>
      <button class="btn btn-success" type="button" onclick="app.sandboxGifsController.unwrapGift('${this.id}')">Unwrap Gift</button>
    </div>
    `
  }
}