var Scene = function(game) {

  var s = {
    game: game,

  }

  const paddle = Paddle(game)
  const ball = Ball(game)
  const blocks = loadLevel(2, game)


  game.registerAction('a', () => {
    paddle.moveLeft()
  })

  game.registerAction('d', () => {
    paddle.moveRight()
  })

  game.registerAction('f', () => {
    ball.fire()
    log('fire')
  })

  s.draw = function() {
    let color = '#5A9BDC'
    game.drawBackground(color)
    game.drawImage(paddle)
    game.drawImage(ball)
    //先画背景 不会覆盖
    for (let i = 0; i < blocks.length; i++) {
      var b = blocks[i]
      if (b.alive) {
        game.drawImage(b)
      }
    }
  }

  s.update = function() {
    if (paddle.leftDown) {
      paddle.moveLeft()
    } else if (paddle.rightDown) {
      paddle.moveRight()
    }

    if (paddle.collide(ball) == 'speedX') {
      ball.speedX = -ball.speedX
    }
    if (paddle.collide(ball) == 'speedY') {
      ball.speedY = -ball.speedY
    }

    for (let i = 0; i < blocks.length; i++) {
      let b = blocks[i]
      if (b.alive) {
        if (b.collide(ball) == 'speedX') {
          b.changeLives()
          ball.speedX = -ball.speedX
          b.kill()
        }
        if (b.collide(ball) == 'speedY') {
          b.changeLives()
          ball.speedY = -ball.speedY
          b.kill()
        }
      }
    }

    ball.move()
    if (ball.y >= game.canvas.height - 10) {
      //跳转到游戏结束的场景
      var endScene = new SceneEnd(game)
      game.replaceScene(endScene)
      return
    }
  }


  let enableDrag = false
  game.canvas.addEventListener('mousedown', (event) => {
    let x = event.offsetX
    let y = event.offsetY
    //检查是否点中球
    if (ball.hasPoint(x, y)) {
      //可拖拽
      enableDrag = true
    }
  })

  game.canvas.addEventListener('mousemove', (event) => {
    let x = event.offsetX
    let y = event.offsetY
    //球随鼠标移动
    if (enableDrag && !ball.fired) {
      ball.x = x
      ball.y = y
    }
  })

  game.canvas.addEventListener('mouseup', (event) => {
    //不可拖拽
    enableDrag = false
  })

  return s
}
