const Paddle = function(game) {
  var image = game.imageByName('paddle')
  var o = {
    img: image,
    x: 200,
    y: 280,
    speed: 10,
    leftDown: false,
    rightDown: false,
  }
  o.moveLeft = () => {
    o.x -= o.speed
    if (o.x < 0) {
      o.x = 0
    }
  }
  o.moveRight = () => {
    o.x += o.speed
    if (o.x > 640 - o.img.width) {
     o.x = 640 - o.img.width
    }
  }
  o.collide = (image) => {
    return rectIntersects(o, image)
  }
  return o
}
