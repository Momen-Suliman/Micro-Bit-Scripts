let xarr:number [] = []
for (let i=1; i<=100; i++) {
    xarr.insertAt(i,i)
}

for (let i = 0; i <= 100; ) {
     if (i == 2 || i == 3 || i == 5 || i == 7) {
        basic.showNumber(xarr[i - 1])
        basic.clearScreen()
        i++
    }
    
    else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0
        || i % 7 == 0 || i % 9 == 0) {
        i++
    }
    

    else {
        basic.showNumber(xarr[i-1])
        basic.clearScreen()
        i++
    }
    
}
