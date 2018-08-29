class GameScene {
  constructor(game) {
    this.game = game
    this.elements = []
  }

  draw() {
    for (let i = 0; i < this.elements.length; i++) {
      let el = this.elements[i]
      if (el.constructor.name == 'Player' || el.constructor.name == 'Pipe') {
        el.draw()
        continue
      }
      // if (el.constructor.name == 'GameImage') {
      //   if (el.texture.src.slice(-10, -6) == 'font') {
      //     log(el.type )
      //   }
      // }
      this.game.drawImage(el)
    }
  }

  addElement(gameImage) {
    gameImage.scene = this
    this.elements.push(gameImage)
  }

  removeElement(gameImage) {
    for (var i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === gameImage) {
        this.elements.splice(i, 1)
      }
    }
  }

  update() {
    if (this.elements != undefined) {
      for (let i = 0; i < this.elements.length; i++) {
        let el = this.elements[i]
        el.update()
      }
    }
  }
}
