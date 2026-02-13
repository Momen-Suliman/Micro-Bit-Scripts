/* *** Global variables *** */
enum Mode { Asleep = 0, Working }
let mode: Mode = Mode.Working

/* *** Event-handler registrants *** */
input.onButtonPressed(Button.A, function () {
    mode = Mode.Asleep
})

input.onButtonPressed(Button.B, function () {
    mode = Mode.Working
})



/* *** Main program (forever loop) *** */////////////
basic.forever(function () {

    if (mode) {
        basic.showString("W")
    }
    else {
        basic.showString("Z")
    }
    
})
