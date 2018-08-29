class GameScene {
  constructor(game) {
    this.game = game
    this.elements = []
  }

  draw() {
    for (let i = 0; i < this.elements.length; i++) {
      let e = this.elements[i]
      this.game.drawImage(e)
    }

    this.drawText()
  }

  drawText () {
    if (this.score != undefined) {
      this.game.context.fillStyle = 'white'
      this.game.context.font = "20px sans-serif"
      this.game.context.fillText('分数:'+ this.score, 50, 50)
    }
    if (this.playerLife != undefined) {
      this.game.context.fillStyle = 'white'
      this.game.context.font = "20px sans-serif"
      this.game.context.fillText('生命:'+ this.playerLife, 250, 50)
    }
    if (this.endTitle != undefined) {
      this.game.context.fillStyle = 'black'
      this.game.context.font = "20px sans-serif"
      this.game.context.fillText('游戏结束！按R重新开始！', 100, 300)
    }
  }

  addElement(gameImage) {
    gameImage.scene = this
    this.elements.push(gameImage)
  }

  removeElement(gameImage) {
    for (var i = 0; i < this.elements.length; i++) {
      if (this.elements[i] === gameImage) {
        this.elements.splice(i, 1)
      }
    }
  }

  update() {
    if (this.elements != undefined) {
      for (let i = 0; i < this.elements.length; i++) {
        let e = this.elements[i]
        e.update()
      }
    }
  }
}
