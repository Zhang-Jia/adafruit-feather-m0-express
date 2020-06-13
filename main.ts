input.buttonD12.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 1000)
})
forever(function () {
    music.playMelody("E D G F B A C5 B ", 120)
    for (let index = 0; index < 4; index++) {
        pins.i2cWriteNumber(
        pins.i2cReadNumber(
        5,
        NumberFormat.Int8LE,
        false
        ),
        0,
        NumberFormat.Int8LE,
        false
        )
    }
})
