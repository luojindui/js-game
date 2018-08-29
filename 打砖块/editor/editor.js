const Editor = function() {
  editors = es('#editor')

  let o = {
    editors: editors,
    currentClick: 0,
    currBlock: [],
  }

  o.bindEvents = () => {
    for (let i = 0; i < o.editors.length; i++) {
      let ed = o.editors[i]
      ed.addEventListener('click', function(event) {
        o.setCurrBlockId(event.target)
      })
    }
  }

  o.setCurrBlockId = (event) => {
    let blockId = event.dataset.block
    o.currentClick = blockId
  }

  o.setBlock = () => {
    let c = e('#canvas')
    c.addEventListener('click', function(event) {
      let offsetX = Math.floor(event.offsetX / 32) * 32
      let offsetY = Math.floor(event.offsetY / 16) * 16
      if (o.currentClick != 0) {
        let blockId = o.currentClick
        path = 'img/block' + blockId + '.png'
        let imag = imageFromPath(path)
        let b = Block([offsetX, offsetY, blockId])
        o.currBlock.push(b)
      }
    })
  }

  o.saveMap = () => {
    var map = []
    for (let i = 0; i < o.currBlock.length; i++) {
      let b = o.currBlock[i]
      let m = [b.x, b.y, parseInt(b.lives)]
      map.push(m)
    }
    if (map.length == 0) {
      return
    }
    levels.push(map)
    localStorage.levels = JSON.stringify(levels)
  }

  return o
}
