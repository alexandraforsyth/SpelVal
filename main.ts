input.onButtonPressed(Button.A, function () {
    if (SpelVal > -1) {
        SpelVal += -1
    } else {
        SpelVal = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("SpelVal", SpelVal)
})
input.onButtonPressed(Button.B, function () {
    if (SpelVal < 1) {
        SpelVal += 1
    } else {
        SpelVal = 0
    }
})
let SpelVal = 0
radio.setGroup(1)
SpelVal = 0
basic.forever(function () {
    if (SpelVal == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (SpelVal == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
