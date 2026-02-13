/* *** Global variables *** */
let liner: number [] = [1,2,3,4,5]

/* *** Main program (forever loop) *** */
basic.forever(function () {

    for ( let y = 0; y < liner.length; y++) {
        for (let x = 0; x < liner[y]; x++) {
            led.plot(x,y)
            basic.pause(100)
        }
    }

    basic.clearScreen();
    if (liner.length == 5) {
        liner.removeAt(0)
        liner.push(randint(1,5))

    }
})
