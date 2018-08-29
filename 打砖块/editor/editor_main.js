const __main = () => {

  const game = new Game(30)

  editor = new Editor(game)

  editor.bindEvents()
  editor.setBlock()

  game.update = () => {

  }

  var saveButton = e('#save-button')
  saveButton.addEventListener('click', function() {
    editor.saveMap()
  })


  game.draw = () => {
    for (var i = 0; i < editor.currBlock.length; i++) {
      game.drawImage(editor.currBlock[i])
    }
  }
}
