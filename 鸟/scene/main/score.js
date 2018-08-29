class Score {
  constructor(game) {
    this.game = game
    this.setup()
    this.textures = []
  }

  setup() {
    this.scoreImages = []
    for (let i = 0; i < 10; i++) {
      let fontType = i
      let name = 'font' + fontType
      let s = new GameImage(this.game, name)
      this.scoreImages.push(s)
      s.type = i
    }
  }

  update() {
      this.textures = []
      for (let i = 0; i < this.scoreImages.length; i++) {
        let s = this.scoreImages[i]
        this.game.scene.removeElement(s)
      }
      let score = this.game.scene.score + ''
      let scores = []
      for (let j = 0; j < score.length; j++) {
        scores.push(score[j])
      }
      for (let j = 0; j < scores.length; j++) {
        let sc = scores[j]
        for (let i = 0; i < this.scoreImages.length; i++) {
          let s = this.scoreImages[i]
          if (s.type == sc) {
            s.y = 100
            this.textures.push(s)
          }
        }
      }
      if (this.check(scores)) {
        for (let i = 0; i < this.textures.length; i++) {
          let t = this.textures[0]
          t.x = 200 + 22 * i
          this.game.scene.addElement(t)
        }
      } else {
        for (let i = 0; i < this.textures.length; i++) {
          let t = this.textures[i]
          t.x = 200 + 22 * i
          this.game.scene.addElement(t)
        }
        let name = 'font' + this.textures[0].type
        let s = new GameImage(this.game, name)
        s.x = 200
        s.y = 100
        this.game.scene.addElement(s)
      }
  }
  check(scores) {
    for (let i = 0; i < scores.length; i++) {
      let s = scores[i]
      for (let j = i + 1; j < scores.length; j++) {
        if (s == scores[j]) {
          return true
        }
      }
    }
    return false
  }

}
