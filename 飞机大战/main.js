const __main = () => {

  const images = {
    bullet1: 'img/bullet1.png',
    bullet2: 'img/bullet2.png',
    bullet3: 'img/bullet3.png',
    bg11: 'img/b1-1.png',
    bg12: 'img/b1-2.png',
    bg13: 'img/b1-3.png',
    bg14: 'img/b1-4.png',
    bg15: 'img/b1-5.png',
    bg16: 'img/b1-6.png',
    bg21: 'img/b2-1.png',
    bg22: 'img/b2-2.png',
    bg23: 'img/b2-3.png',
    bg24: 'img/b2-4.png',
    bg25: 'img/b2-5.png',
    bg26: 'img/b2-6.png',
    bg31: 'img/b3-1.png',
    bg32: 'img/b3-2.png',
    bg33: 'img/b3-3.png',
    bg34: 'img/b3-4.png',
    bg35: 'img/b3-5.png',
    bg36: 'img/b3-6.png',
    bg41: 'img/b4-1.png',
    bg42: 'img/b4-2.png',
    bg43: 'img/b4-3.png',
    bg44: 'img/b4-4.png',
    bg45: 'img/b4-5.png',
    bg46: 'img/b4-6.png',
    bg51: 'img/b5-1.png',
    bg52: 'img/b5-2.png',
    bg53: 'img/b5-3.png',
    bg54: 'img/b5-4.png',
    bg55: 'img/b5-5.png',
    bg56: 'img/b5-6.png',
    title: 'img/title.jpg',
    plane: 'img/plane.png',
    enemy1: 'img/enemy1.png',
    enemy2: 'img/enemy2.png',
    enemy3: 'img/enemy3.png',
    enemy4: 'img/enemy4.png',
    enemy5: 'img/enemy5.png',
    enemy6: 'img/enemy6.png',
    boom: 'img/boom.png',
    boom1: 'img/boom1.jpg',
    boom2: 'img/boom2.png',
    boom3: 'img/boom3.png',
  }
  const game = new Game(30, images, (game) => {
    let s = new Scene(game)
    game.runWithScene(s)
  })
}


__main()
