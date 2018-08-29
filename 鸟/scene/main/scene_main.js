class Scene extends GameScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setupInputs()
  }
  setup() {
    //先画背景 否则会覆盖其他东西

    this.setBg()
    this.setPlayer()

    this.setPipe()
    this.setLand()
    this.setScore()
  }

  setScore() {
    this.score = 0
    this.scoreImage = new Score(this.game)

  }

  setPlayer() {
    this.player = new Player(this.game)
    this.addElement(this.player)
  }

  setPipe() {
    let space = 200
    let pipeType = randomBetween(1, 2)
    let pipeName = 'pipe' + pipeType
    this.pipes = []
    for (let i = 0; i < 3; i++) {
      let p = new Pipe(this.game, pipeName)
      p.x = 500 + space * i
      this.pipes.push(p)
    }
    for (let i = 0; i < this.pipes.length; i++) {
      let p = this.pipes[i]
      this.addElement(p)
    }
  }

  setBg() {
    let bgType = randomBetween(1, 2)
    let bgName = 'bg' + bgType
    this.bg = new GameImage(this.game, bgName)
    this.addElement(this.bg)
  }

  updateLand() {
    for (let i = 0; i < this.lands.length; i++) {
      let l = this.lands[i]
      l.x -= 5
      if (l.x <= -45) {
        l.x= 450
      }
    }
  }

  setLand() {
    this.lands = []
    for (let i = 0; i < 11; i++) {
      let l = new GameImage(this.game, 'land')
      l.x = i * 45
      l.y = 590
      this.addElement(l)
      this.lands.push(l)
    }
  }

  setupInputs() {
    this.game.registerAction('j', () => {
      this.player.jump()
    })
  }

  update() {
    this.updateLand()
    super.update()
    this.scoreImage.update()

  }
}
