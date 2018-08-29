class SceneTitle extends GameScene {
  constructor(game) {
    super(game)
    game.registerAction('k', () => {
      var s = Scene(game)
      game.replaceScene(s)
    })
  }

  draw() {
    this.game.context.fillText('按K开始游戏', 300, 150)
  }
}
