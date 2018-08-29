class Player extends GameImage {
  constructor(game) {
    super(game, 'plane')
    this.game = game
    this.setup()
    this.life = 3
  }
  setup() {
    this.x = 190
    this.y = 560
    this.speed = 10
    this.cooldown = 3
    this.rocketTime = 10
    this.rocketA = 0.5
  }

  check() {
    let es = []
    for (let i = 0; i < this.scene.elements.length; i++) {
      let en = this.scene.elements[i]
      if (en.constructor.name == 'Enemy') {
        es.push(en)
      }
    }
    for (let i = 0; i < es.length; i++) {
      let e = es[i]
      if (this.collide(e)) {
        this.kill()
        e.life--
      }
    }
  }

  kill() {
    if (this.life > 0) {
      let boom = new Boom(this.game)
      boom.x = this.x + this.w / 2
      boom.y = this.y
      this.scene.addElement(boom)
      this.setup()
      this.rocketTime--
      this.life--
    } else {
      this.scene.removeElement(this)
      let s = new SceneEnd(this.game)
      this.game.replaceScene(s)
    }
  }

  attack() {
    if (this.cooldown < 0) {
      this.cooldown = 3
      let x = this.x + this.w / 2 - 5
      let y = this.y - this.h / 2
      let b = new Bullet(this.game, '1')
      b.x = x
      b.y = y
      this.scene.addElement(b)
      this.rocketTime--
      if (this.rocketTime < 0) {
        this.rocketTime = 10
        let x1 = this.x + this.w - 10
        let y1 = this.y
        let b1 = new Bullet(this.game, '2')
        b1.x = x1
        b1.y = y1
        let x2 = this.x - 10
        let y2 = this.y
        let b2 = new Bullet(this.game, '2')
        b2.x = x2
        b2.y = y2
        this.scene.addElement(b1)
        this.scene.addElement(b2)
      }
    }
  }
  moveLeft() {
    this.x -= this.speed
    if (this.x <= 0) {
      this.x = 0
    }
  }
  moveRight() {
    this.x += this.speed
    if (this.x >= this.game.canvas.width - this.texture.width) {
      this.x = this.game.canvas.width - this.texture.width
    }
  }
  moveUp() {
    this.y -= this.speed
    if (this.y <= 0) {
      this.y = 0
    }
  }
  moveDown() {
    this.y += this.speed
    if (this.y >= this.game.canvas.height - this.texture.height) {
      this.y = this.game.canvas.height - this.texture.height
    }
  }
  update() {
    this.scene.playerLife = this.life
    this.cooldown--
    this.check()
  }
}
