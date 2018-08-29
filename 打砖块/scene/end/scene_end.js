class SceneEnd extends GameScene {
  constructor(game) {
    super(game)
    game.registerAction('r', () => {
      var s = new Scene(game)
      game.replaceScene(s)
    })
  }

  draw() {
    this.game.context.fillText('你输了!按R重新开始。', 290, 150)
  }
}
