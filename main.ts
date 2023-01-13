input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Butterfly)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 99; index++) {
        music.ringTone(10000000000000000)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 500)
    }
})
basic.showIcon(IconNames.Yes)
