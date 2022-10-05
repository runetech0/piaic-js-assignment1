



const makeCar = (manufacturer, modelName, additionalInfo) => {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
    }
    for (let k in additionalInfo) {
        car[k] = additionalInfo[k]

    }
    return car
}


let car = makeCar("Honda", "Civic", {color: "Green", powerWindow: true})
console.log("Manufacturer:",car.manufacturer)
console.log("Car Model:",car.modelName)
console.log("Car Color:",car.color)
console.log("Power Window:",car.powerWindow)