const Block = function(position, game) {
  let p = position
  path = 'block' + p[2]
  let image = game.imageByName(path)
  let o = {
    img: image,
    x: p[0],
    y: p[1],
    alive: true,
    lives: p[2] || 1,
  }
  o.kill = () => {
    o.lives--
    if (o.lives < 1) {
      o.alive = false
    }
  }
  o.collide = (image) => {
    return rectIntersects(o, image)
  }
  o.changeLives = () => {
    let life = o.lives - 1
    if (life == 0) {
      return
    }
    let path = 'block' + life
    let ima = game.imageByName(path)
    o.img = ima
    log('block change', path)
  }
  return o
}
