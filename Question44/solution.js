


const makeSandwitch = (...args) => {
    console.log("Here's a summary of the sandwitch you have ordered.")
    args.forEach((arg, i) => {
        console.log(`${i+1}. ${arg}`)
    })
}

makeSandwitch("Catchup", "Bread", "Mayoneese", "2 Eggs", "Salad")