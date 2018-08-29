class Scene extends GameScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setupInputs()
  }
  setup() {
    this.bg = new Background(this.game)

    this.player = new Player(this.game)
    this.enemy = new Enemy(this.game)

    //先画背景 否则会覆盖其他东西
    for (var i = 0; i < this.bg.backgroundImages.length; i++) {
      var b = this.bg.backgroundImages[i]
      this.addElement(b)
    }

    // this.addElement(this.boom)

    this.addElement(this.player)
    this.addElement(this.enemy)

    this.numberOfEnemys = 10
    this.currentNumberOfEnemys = 0
    this.addEnemys()

    this.score = 0

  }

  addEnemys() {
    var es = []
    var num = this.numberOfEnemys - this.currentNumberOfEnemys
    for (var i = 0; i < num; i++) {
      var e = new Enemy(this.game)
      es.push(e)
      this.addElement(e)
      this.currentNumberOfEnemys++
    }
    this.enemies = es
  }
  setupInputs() {
    this.game.registerAction('w', () => {
      this.player.moveUp()
    })
    this.game.registerAction('a', () => {
      this.player.moveLeft()
    })
    this.game.registerAction('s', () => {
      this.player.moveDown()
    })
    this.game.registerAction('d', () => {
      this.player.moveRight()
    })
    this.game.registerAction('j', () => {
      this.player.attack()
    })
  }
  update() {
    super.update()
    this.bg.update()
    if(this.currentNumberOfEnemys < 5) {
      this.addEnemys()
    }

  }
}
