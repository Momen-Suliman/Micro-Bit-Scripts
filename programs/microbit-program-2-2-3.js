/* *** Global variables *** */
let line:  number[] = [5]

/* *** Main program (forever loop) *** */
basic.forever(function () {

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.plot(x, y)
            basic.pause(20)
        }
    }

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.unplot(x, y+1)
            basic.pause(10)
        }
        
    }

    if (line.length == 1) {
        line.removeAt(0)
        line.push(randint(0, 4))

    }
///1st column done///
    
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
    
    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.plot(x+2, y)
            basic.pause(20)
        }
    }

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.unplot(x+2, y + 1)
            basic.pause(10)
        }

    }

    if (line.length == 1) {
        line.removeAt(0)
        line.push(randint(0, 4))

    }
///3rd column done///
    
    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.plot(x +3, y)
            basic.pause(20)
        }
    }

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.unplot(x +3, y + 1)
            basic.pause(10)
        }

    }

    if (line.length == 1) {
        line.removeAt(0)
        line.push(randint(0, 4))

    }
///4th column done///

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.plot(x+4, y)
            basic.pause(20)
        }
    }

    for (let x = 0; x < 1; x++) {
        for (let y = 5; y >= line[x]; y--) {
            led.unplot(x+4, y + 1)
            basic.pause(10)
        }

    }

    basic.pause(300)
    basic.clearScreen();
    if (line.length == 1) {
        line.removeAt(0)
        line.push(randint(0, 4))

    }
})
///5th column done///
