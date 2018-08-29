class Label {
  constructor(game, text) {
    this.game = game
    this.text = text
    this.x = 0
    this.y = 0
  }

  draw() {
    this.game.context.font = "20pt Microsoft JhengHei";            //设置文本大小 + 字体
    this.game.context.fillStyle = "tomato";
    this.game.context.fillText(this.text, this.x, this.y)
  }
  update() {

  }
}
