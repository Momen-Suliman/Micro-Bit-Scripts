let xarr:number [] = []
for (let i=1; i<=100; i++) {
    xarr.insertAt(i,i)
}

for (let i = 83; i <= 100; i++) {
    basic.showNumber(xarr[i])
}
