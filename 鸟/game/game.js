class Game {
  constructor(fps, images, runCallback) {
    this.fps = fps
    this.images = images
    this.runCallback = runCallback
    this.scene = null
    this.actions = {}
    this.keydowns = {}
    this.canvas = document.querySelector('#canvas')
    this.context = canvas.getContext('2d')
    window.addEventListener('keydown', (event) => {
      this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', (event) => {
      this.keydowns[event.key] = false
    })
    this.init()
  }

  drawImage(gameImage) {
    this.context.drawImage(gameImage.texture, gameImage.x, gameImage.y)
  }

  textureByName(name) {
    let img = this.images[name]
    return img
  }

  replaceScene(scene) {
    this.scene = scene
  }

  registerAction(key, callback) {
    this.actions[key] = callback
  }

  run(scene) {
    this.runCallback(this)
  }


  update() {
    this.scene.update()
  }

  draw() {
    this.scene.draw()
  }

  runloop() {
    var actions = Object.keys(this.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (this.keydowns[key]) {
        this.actions[key]()
      }
    }
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.update()
    this.draw()

    setTimeout(function() {
      this.runloop()
    }.bind(this), 1000/this.fps)
    // setTimeout(() => {
    //   this.runloop()
    // }, 1000/this.fps)
    //箭头函数 解决this混乱
  }

  runWithScene(scene) {
    this.scene = scene
    setTimeout(function() {
      scene.game.runloop()
    }, 1000/this.fps)
    // setTimeout(() => {
    //   this.runloop()
    // }, 1000/this.fps)
    //箭头函数 解决this混乱
  }

  init() {
    //预先加载图片
    const loads = []
    let names = Object.keys(this.images)
    for (let i = 0; i < names.length; i++) {
      let name = names[i]
      let path = this.images[name]
      let img = new Image()
      img.src = path
      img.onload = function() {
        this.images[name] = img
        //图片全部载入之后, run
        loads.push(1)
        if (loads.length == names.length) {
          this.run()
        }
      }.bind(this)
    }
  }

}
