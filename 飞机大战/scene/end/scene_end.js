class SceneEnd extends GameScene {
  constructor(game) {
    super(game)
    this.bg = new GameImage(game, 'title')
    this.addElement(this.bg)
    this.endTitle = '游戏结束'

    game.registerAction('r', () => {
      var s = new Scene(game)
      game.replaceScene(s)
    })
  }
}
