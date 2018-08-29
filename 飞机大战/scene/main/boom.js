class Boom extends GameImage {
  constructor(game) {
    super(game, 'boom')
    this.game = game
    this.setup()
  }

  setup() {
    this.cooldown = 20
    this.index = 0.05
  }

  update() {
    this.cooldown--
    if (this.cooldown < 0) {
      this.scene.removeElement(this)
    }
  }

}
