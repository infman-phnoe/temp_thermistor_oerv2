let TempCalc = 0
let TempWert = 0
input.onButtonPressed(Button.A, function () {
    TempCalc = pins.analogReadPin(AnalogPin.P0) - 199.65
    TempCalc = Math.round(TempCalc / 1.3066)
    TempCalc = TempCalc / 10
    basic.showLeds(`
        # . . # #
        . . # . .
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.pause(300)
    basic.showNumber(TempCalc)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    TempWert = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(TempWert)
    basic.pause(1000)
})
