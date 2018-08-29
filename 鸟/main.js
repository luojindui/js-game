const __main = () => {

  const images = {
    bg1: 'img/bg_day.png',
    bg2: 'img/bg_night.png',
    bird1_1: 'img/bird0_0.png',
    bird1_2: 'img/bird0_1.png',
    bird1_3: 'img/bird0_2.png',
    bird2_1: 'img/bird1_0.png',
    bird2_2: 'img/bird1_1.png',
    bird2_3: 'img/bird1_2.png',
    bird3_1: 'img/bird2_0.png',
    bird3_2: 'img/bird2_1.png',
    bird3_3: 'img/bird2_2.png',
    font0: 'img/font_0.png',
    font1: 'img/font_1.png',
    font2: 'img/font_2.png',
    font3: 'img/font_3.png',
    font4: 'img/font_4.png',
    font5: 'img/font_5.png',
    font6: 'img/font_6.png',
    font7: 'img/font_7.png',
    font8: 'img/font_8.png',
    font9: 'img/font_9.png',
    land: 'img/land.png',
    pipe1: 'img/pipe1.png',
    pipe2: 'img/pipe2.png',
    title: 'img/title.png',
  }
  const game = new Game(30, images, (game) => {
    let s = new Scene(game)
    game.runWithScene(s)
  })
}


__main()
