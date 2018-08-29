var loadLevel = (n, game) => {
  var level = levels[n]
  var blocks = []
  for (let i = 0; i < level.length; i++) {
    var p = level[i]
    let b = Block(p, game)
    blocks.push(b)
  }
  return blocks
}

const __main = () => {

  const images = {
    ball: 'img/ball.png',
    paddle: 'img/paddle.png',
    block1: 'img/block1.png',
    block2: 'img/block2.png',
    block3: 'img/block3.png',
    block4: 'img/block4.png',
    block5: 'img/block5.png',
  }
  const game = new Game(30, images, (game) => {
    let s = new SceneTitle(game)
    log(s)
    game.runWithScene(s)
  })
}


__main()
