class Player extends Animation {
  constructor(game) {
    let birdType = randomBetween(1, 3)
    let names = [
      `bird${birdType}_1`,
      `bird${birdType}_2`,
      `bird${birdType}_3`,
    ]
    super(game, names)
    this.game = game
    this.setup()
  }

  setup() {
    this.x = 250
    this.y = 250
    this.w = this.texture.width
    this.y = this.texture.height
    this.gy = 10
    this.acceleration = 0
  }

  addScore() {
    this.scene.score++
  }

  check() {
    let pipes = []
    for (let i = 0; i < this.scene.elements.length; i++) {
      let el = this.scene.elements[i]
      if (el.constructor.name == 'Pipe') {
        pipes.push(el)
      }
    }
    for (let i = 0; i < pipes.length; i++) {
      let p = pipes[i]
      if (this.x + this.texture.width >= p.x && this.x <= p.x + p.texture.width) {
        if (this.y + this.texture.height >= p.y + 5 || this.y <= p.y - p.space - 5) {
          this.kill()
        } else if (this.x == p.x) {
          this.addScore()
        }
      }
    }
  }

  kill() {
    var s = new SceneEnd(this.game, this.scene.score)
    this.game.replaceScene(s)
  }

  birdDrop() {
    this.y += this.acceleration
    this.acceleration += this.gy * 0.1
    var h = 550
    if (this.y >= h) {
      this.y = h
      this.kill()
    } else if (this.y <= 0) {
      this.y = 0
    }
  }

  jump() {
    this.acceleration = -10
    this.rotation = -65
  }

  update() {
    super.update()
    this.birdDrop()
    this.check()
  }
}
