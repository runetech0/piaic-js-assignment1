

    let magiciansList = [
        "Abra",
        "Cadebra",
        "Faad"
    ]


const makeGreat = () => {
    magiciansList.forEach((m, i) => {
        magiciansList[i] = `Great ${m}`
    })
}


const showMagicians = (magiciansList) => {
    magiciansList.forEach(m => {
        console.log(m)
    })
}


makeGreat()
showMagicians(magiciansList)