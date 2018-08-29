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

  collide(gameImage) {
    let yIn = this.y + this.h / 2 >= gameImage.y && this.y <= gameImage.y
    let xIn = this.x <= gameImage.x && this.x + this.w >= gameImage.x
    if (yIn && xIn) {
      return true
    }
    return false
  }
}
