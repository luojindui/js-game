class SceneEnd extends GameScene {
  constructor(game, score) {
    super(game)
    this.game = game
    this.score = score
    this.setup()
  }
  setup() {
    this.bg = new GameImage(this.game, 'title')
    this.addElement(this.bg)
    this.game.registerAction('r', () => {
      var s = new Scene(this.game)
      this.game.replaceScene(s)
    })
    this.text = 'you lose!'
    this.label = new Label(this.game, this.text)
    this.label.x = 160
    this.label.y = 300
    this.text1 = 'press r to play game'
    this.label1 = new Label(this.game, this.text1)
    this.label1.x = 100
    this.label1.y = 330
  }
  draw() {
    super.draw()
    this.label.draw()
    this.label1.draw()
  }
}
