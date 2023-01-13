input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 500)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Butterfly)
})
basic.showIcon(IconNames.Yes)
