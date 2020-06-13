forever(function () {
    light.showAnimation(light.rainbowAnimation, 1000)
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
})
