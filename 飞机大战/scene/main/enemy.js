class Enemy extends GameImage {
  constructor(game) {
    var type = randomBetween(1, 6)
    let name = 'enemy' + type
    super(game, name)
    this.setup()
    this.life = type
    this.type = type
  }
  setup() {
    this.x = randomBetween(0, 350)
    this.y = randomBetween(-150, -50)
    this.speed = randomBetween(2, 5)
    this.w = this.texture.width
    this.h = this.texture.height
  }

  kill() {
    this.scene.removeElement(this)
    this.scene.currentNumberOfEnemys--
    this.scene.score += 100 * parseInt(this.type)
    let boom = new Boom(this.game)
    boom.x = this.x + this.w / 4
    boom.y = this.y
    this.scene.addElement(boom)
  }

  move() {
    this.y += this.speed
    if(this.y > 700) {
      this.setup()
    }
  }

  check() {
    let es = []
    let bs = []
    for (let i = 0; i < this.scene.elements.length; i++) {
      let en = this.scene.elements[i]
      if (en.constructor.name == 'Enemy') {
        es.push(en)
      }
      if (en.constructor.name == 'Bullet') {
        bs.push(en)
      }
    }
    for (let i = 0; i < bs.length; i++) {
      let b = bs[i]
      if (this.collide(b)) {
        let bType = b.texture.src.slice(-5, -4)
        if (bType == 1) {
          this.life--
        } else if (bType == 2) {
          this.life -= 2
        }
        b.kill()
      }
    }
  }

  update() {
    this.move()
    if (this.life <= 0) {
      this.kill()
    }
    this.check()
  }
}
