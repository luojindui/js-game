class Animation {
  constructor(game, names) {
    this.game = game
    this.frames = []
    this.numOfFrames = names.length
    for (let i = 0; i < this.numOfFrames; i++) {
      let n = names[i]
      let t = game.textureByName(n)
      this.frames.push(t)
    }
    this.texture = this.frames[0]
    this.frameIndex = 0
    this.frameCount = this.numOfFrames
    this.rotation = 0
  }

  update() {
    this.frameCount--
    if (this.frameCount == 0) {
      this.frameCount = this.numOfFrames
      this.frameIndex = (this.frameIndex + 1) % this.frames.length
      this.texture = this.frames[this.frameIndex]
    }

    if(this.rotation < 90) {
      this.rotation += 5
    }
  }

  draw() {
    var context = this.game.context
    context.save()
    let w = this.texture.width / 2
    let h = this.texture.height / 2
    context.translate(this.x + w, this.y + h)
    context.rotate(this.rotation * Math.PI / 180)
    context.translate(-w, -h)
    context.drawImage(this.texture, 0, 0)
    context.restore()
  }
}
