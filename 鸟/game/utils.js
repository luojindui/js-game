const log = console.log.bind(console)

const e = (sel) => document.querySelector(sel)

const es = (sel) => document.querySelectorAll(sel)

const rectIntersects = (a, b) => {
  a.image = a.img
  b.image = b.img
  if (b.x >= a.x && b.x <= a.x + a.image.width) {
    if (b.y <= a.y && b.y + b.image.height >= a.y) {
      return 'speedY'
    }
  }
  if (b.x <= a.x && b.x + b.image.width >= a.x) {
    if (b.y >= a.y && b.y <= a.y + a.image.height) {
      return 'speedX'
    }
  }
  if (b.x >= a.x && b.x <= a.x + a.image.width && b.x + b.image.width <= a.x + a.image.width) {
    if (b.y >= a.y && b.y <= a.y + a.image.height) {
      return 'speedY'
    }
  }
  if (b.x >= a.x && b.x <= a.x + a.image.width && b.x + b.image.width >= a.x + a.image.width) {
    if (b.y >= a.y && b.y <= a.y + a.image.height) {
      return 'speedX'
    }
  }
}

const imageFromPath = (path) => {
  var img = new Image()
  img.src = path
  return img
}

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
