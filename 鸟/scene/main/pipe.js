class Pipe extends GameImage {
  constructor(game, name) {
    super(game, name)
    this.game = game
    this.setup()
  }

  setup() {
    this.x = 450
    this.y = randomBetween(280, 470)
    this.space = 148
  }

  update() {
    if (this.x <= -50) {
      this.y = randomBetween(280, 470)
      this.x += 650
    }
    this.x -= 5
  }

  draw() {
    var context = this.game.context
    context.drawImage(this.texture, this.x, this.y)
    context.save()
    let w = this.texture.width / 2
    let h = this.texture.height / 2
    context.translate(this.x + w, this.y + h)
    // context.scale(1, -1)
    context.rotate(180 * Math.PI / 180)
    context.translate(-w, -h)
    context.drawImage(this.texture, 0, this.space + this.texture.height)
    context.restore()
  }
}
