





const makeGreat = (magiciansList) => {
    let newList = []
    magiciansList.forEach((m) => {
        newList.push(`Great Magician ${m}`)
    })
    return newList
}


const showMagicians = (magiciansList) => {
    magiciansList.forEach(m => {
        console.log(m)
    })
}

let magiciansList = [
    "Abra",
    "Cadebra",
    "Faad"
]

let greatMagicians = makeGreat(magiciansList)
showMagicians(greatMagicians)
console.log("Original List")
showMagicians(magiciansList)