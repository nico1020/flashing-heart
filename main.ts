input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.showIcon(IconNames.Skull)
    basic.showString("suscribete papu")
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.East)
})
basic.forever(function () {
	
})
