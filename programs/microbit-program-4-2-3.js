/* *** Global variables *** */
enum Mode { Asleep = 0, Working }
let mode: Mode = Mode.Working
let gesture: Gesture = Gesture.TiltLeft
let liner: number[] = [1, 2, 3, 4, 5]
let line: number[] = [5]
let drop: number[] = [5]


/* *** Function declarations *** */
function coding() {

    for (let y = 0; y < liner.length; y++) {
        for (let x = 0; x < liner[y]; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }

    basic.clearScreen();
    if (liner.length == 5) {
        liner.removeAt(0)
        liner.push(randint(1, 5))

    }
}

function rain() {

    for (let y = 0; y < drop.length; y++) {
        for (let x = 0; x < drop[y]; x++) {
            led.plotBrightness(y, x + randint(0, 4), randint(150, 250)); led.plotBrightness(y + 1, x + randint(0, 4), randint(125, 250))
            led.plotBrightness(y + 2, x + randint(0, 4), randint(150, 250)); led.plotBrightness(y + 3, x + randint(0, 4), randint(125, 250))
            led.plotBrightness(y + 4, x + randint(0, 4), randint(150, 250))
            basic.pause(110)
            basic.clearScreen();

        }
    }

    if (drop.length == 5) {
        drop.removeAt(0)
        drop.push(1)

    }
}

function freqBars() {

    //1st starts
    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.plot(x, y)
            basic.pause(20)
        }
    }

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.unplot(x, y + 1)
            basic.pause(10)
        }

    }

    if (line.length == 1) {
        line.removeAt(0)
        line.push(randint(0, 4))

    }
    ///1st column done///

        //2nd starts
        for (let x = 0; x < 1; x++) {
            for (let y = 5; y >= line[x]; y--) {
                led.plot(x + 1, y)
                basic.pause(20)
            }
        }

        for (let x = 0; x < 1; x++) {
            for (let y = 5; y >= line[x]; y--) {
                led.unplot(x + 1, y + 1)
                basic.pause(10)
            }

        }

        if (line.length == 1) {
            line.removeAt(0)
            line.push(randint(0, 4))

        }
        ///2nd column done///

            //3rd starts
            for (let x = 0; x < 1; x++) {
                for (let y = 5; y >= line[x]; y--) {
                    led.plot(x + 2, y)
                    basic.pause(20)
                }
            }

            for (let x = 0; x < 1; x++) {
                for (let y = 5; y >= line[x]; y--) {
                    led.unplot(x + 2, y + 1)
                    basic.pause(10)
                }

            }

            if (line.length == 1) {
                line.removeAt(0)
                line.push(randint(0, 4))

            }
            ///3rd column done///

        //4th starts
        for (let x = 0; x < 1; x++) {
            for (let y = 5; y >= line[x]; y--) {
                led.plot(x + 3, y)
                basic.pause(20)
            }
        }

        for (let x = 0; x < 1; x++) {
            for (let y = 5; y >= line[x]; y--) {
                led.unplot(x + 3, y + 1)
                basic.pause(10)
            }

        }

        if (line.length == 1) {
            line.removeAt(0)
            line.push(randint(0, 4))

        }
        ///4th column done///

    //5th starts
    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.plot(x + 4, y)
            basic.pause(20)
        }
    }

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.unplot(x + 4, y + 1)
            basic.pause(10)
        }

    }

    basic.pause(300)
    basic.clearScreen();
    if (line.length == 1) {
        line.removeAt(0)
        line.push(randint(0, 4))

    }
    ///5th column done///

}

/* *** Event-handler registrants *** */
input.onButtonPressed(Button.A, function () {
    mode = Mode.Asleep
})

input.onButtonPressed(Button.B, function () {
    mode = Mode.Working
})

input.onGesture(Gesture.TiltRight, function () {
    gesture = Gesture.TiltRight
})

input.onGesture(Gesture.TiltLeft, function () {
    gesture = Gesture.TiltLeft
})



/* *** Main program (forever loop) *** */////////////
basic.forever(function () {

    if (mode == Mode.Working) {
        coding()
    }
    else if (mode==Mode.Asleep) {

        if (gesture == Gesture.TiltLeft) {
            rain()
        }
        else if (gesture == Gesture.TiltRight) {
            freqBars()
        }
    }

    
})
