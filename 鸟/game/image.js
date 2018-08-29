class GameImage {
  constructor(game, name) {
    this.texture = game.textureByName(name)
    this.game = game
    this.x = 0
    this.y = 0
    this.w = this.texture.width
    this.h = this.texture.height
  }

  draw() {

  }
  update() {

  }
}
