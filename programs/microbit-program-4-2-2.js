/* *** Global variables *** */
let gesture: Gesture = Gesture.TiltLeft

/* *** Event-handler registrants *** */
input.onGesture(Gesture.TiltRight, function () {
    gesture = Gesture.TiltRight
})

input.onGesture(Gesture.TiltLeft, function () {
    gesture = Gesture.TiltLeft
})



/* *** Main program (forever loop) *** */////////////
basic.forever(function () {

    if (gesture==Gesture.TiltLeft) {
        basic.showString("L")
    }
    else if (gesture==Gesture.TiltRight) {
        basic.showString("R")
    }
})
