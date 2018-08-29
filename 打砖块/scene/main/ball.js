const Ball = function(game) {
  var image = game.imageByName('ball')
  var o = {
    img: image,
    x: 180,
    y: 250,
    speedX: 5,
    speedY: -5,
    fired: false,
  }
  o.fire = () => {
    o.fired = true
  }

  o.move = () => {
    if (o.fired) {
      o.x += o.speedX
      o.y += o.speedY
      if (o.x >= 640 - o.img.width || o.x <= 0) {
       o.speedX = -o.speedX
      }
      if (o.y >= 320 - o.img.height || o.y <= 0) {
       o.speedY = -o.speedY
      }
    }
  }

  o.hasPoint = (x, y) => {
    let xIn = x > o.x && x <= o.x + o.img.width
    let yIn = y > o.y && y <= o.y + o.img.height
    return xIn && yIn
  }

  return o
}
