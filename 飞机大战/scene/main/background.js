class Background {
  constructor(game) {
    this.game = game
    this.type = randomBetween(1, 5)
    this.backgroundImages = []
    this.numberOfPiece = 6
    this.speed = 0.8
    this.init()
  }
  init() {
    let n = 'bg' + this.type
    for (let i = 1; i <= this.numberOfPiece; i++) {
      let name = n + i
      let image = new GameImage(this.game, name)
      let blockSize = 128
      image.x = 0
      image.y = blockSize * i - 128
      this.backgroundImages.push(image)
    }
  }
  update() {
    for (let i = 0; i < this.backgroundImages.length; i++) {
      let b = this.backgroundImages[i]
      b.y += this.speed
      if (b.y >= 640) {
        b.y = -127
      }
    }
  }
}
