/* *** Global variables *** */
let drop: number[] = [5]

/* *** Main program (forever loop) *** */
basic.forever(function () {

    for (let y = 0; y < drop.length; y++) {
        for (let x = 0; x < drop[y]; x++) {
            led.plotBrightness(y, x + randint(0, 4), randint(150, 250)); led.plotBrightness(y+1, x + randint(0, 4), randint(150, 250))
            led.plotBrightness(y+2, x + randint(0, 4), randint(150, 250)); led.plotBrightness(y+3, x + randint(0, 4), randint(150, 250))
            led.plotBrightness(y+4, x + randint(0, 4), randint(150, 250))
            basic.pause(110)
            basic.clearScreen();

        }
    }

    if (drop.length == 5) {
        drop.removeAt(0)
        drop.push(1)

    }
})
