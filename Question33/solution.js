



let numbers = [
    0,1,2,3,4,5,6,7,8,9
]


numbers.forEach((num, i) => {
    positionEnding = "th"
    if (num === 1) {
        positionEnding = "st"
    }
    
    else if (num === 2) {
        positionEnding = "nd"
    }
    else if (num === 3) {
        positionEnding = "rd"
    }
    console.log(`${num} is ${i}${positionEnding} position in array.`)
})