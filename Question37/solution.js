


let defaultMessage = "I love JavaScript"
const makeTShirt = (size, message) => {
    if (message === defaultMessage) {
        console.log(`A Large sized T-Shirt with a message [${message}] printed on it has been created. Thank you.`)
        console.log(`A Medium sized T-Shirt with a message [${message}] printed on it has been created. Thank you.`)
    }

    else {
        console.log(`A ${size} sized T-Shirt with a message [${message}] printed on it has been created. Thank you.`)

    }
}


makeTShirt("medium", defaultMessage)