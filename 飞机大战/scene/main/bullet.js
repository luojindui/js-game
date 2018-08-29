class Bullet extends GameImage {
  constructor(game, name) {
    let n = 'bullet' + name
    // TODO: different bullet
    super(game, n)
    this.game = game
    this.type = name
    this.setup()
  }
  setup() {
    this.speed = 15
    this.acceleration = 1
  }

  kill() {
    this.scene.removeElement(this)
  }

  move() {
    this.y -= this.speed
    if(this.y < 0) {
      this.kill()
    }
  }

  setAcceleration() {
    this.speed += this.acceleration
  }

  update() {
    this.move()
    if (this.type == 2) {
      this.setAcceleration()
    }
  }
}
